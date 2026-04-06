async function initRouteMap(map, route) {
    if (!route || !route.geoJsonLine) return;

    try {
        const lineUrl = encodeURI(`assets/data/${route.geoJsonLine}`);
        const response = await fetch(lineUrl);
        
        if (!response.ok) return;
        
        const geojsonData = await response.json();

        if (map.getSource('route-line')) {
            if (map.getLayer('stop-points')) map.removeLayer('stop-points');
            if (map.getLayer('line-main')) map.removeLayer('line-main');
            if (map.getLayer('line-casing')) map.removeLayer('line-casing');
            map.removeSource('route-line');
            if (map.getSource('route-stops')) map.removeSource('route-stops');
        }

        map.addSource('route-line', { type: 'geojson', data: geojsonData });

        map.addLayer({
            id: 'line-casing',
            type: 'line',
            source: 'route-line',
            filter: ['==', ['geometry-type'], 'LineString'],
            paint: { 'line-color': '#FFFFFF', 'line-width': 6, 'line-opacity': 0.8 }
        });

        map.addLayer({
            id: 'line-main',
            type: 'line',
            source: 'route-line',
            filter: ['==', ['geometry-type'], 'LineString'],
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: { 'line-color': route.badgeColor, 'line-width': 4 }
        });

        if (route.geoJsonStops) {
            const stopsUrl = encodeURI(`assets/data/${route.geoJsonStops}`);
            map.addSource('route-stops', { type: 'geojson', data: stopsUrl });
            map.addLayer({
                id: 'stop-points',
                type: 'circle',
                source: 'route-stops',
                paint: {
                    'circle-radius': [
                        "interpolate", ["linear"], ["zoom"],
                        10, 2,
                        14, 5,
                        18, 10
                    ],
                    'circle-color': '#FFFFFF',
                    'circle-stroke-width': 2,
                    'circle-stroke-color': route.badgeColor
                }
            });
        } else {
            map.addLayer({
                id: 'stop-points',
                type: 'circle',
                source: 'route-line',
                filter: ['==', ['geometry-type'], 'Point'],
                paint: {
                    'circle-radius': [
                        "interpolate", ["linear"], ["zoom"],
                        10, 2,
                        14, 5,
                        18, 10
                    ],
                    'circle-color': '#FFFFFF',
                    'circle-stroke-width': 2,
                    'circle-stroke-color': route.badgeColor
                }
            });
        }

        if (map.getLayer('stop-points')) {
            map.moveLayer('stop-points');
        }

        map.on('click', 'stop-points', (e) => {
            const props = e.features[0].properties;
            const name = props.stop_name || props.title || 'Stasiun/Halte';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(`<p style="font-family: 'Plus Jakarta Sans', sans-serif;" class="font-bold text-sm text-gray-800">${name}</p>`)
                .addTo(map);
        });

        map.on('mouseenter', 'stop-points', () => { map.getCanvas().style.cursor = 'pointer'; });
        map.on('mouseleave', 'stop-points', () => { map.getCanvas().style.cursor = ''; });

        const bounds = new mapboxgl.LngLatBounds();
        geojsonData.features.forEach(f => {
            const c = f.geometry.coordinates;
            if (f.geometry.type === 'MultiLineString') {
                c.forEach(line => line.forEach(pt => bounds.extend(pt)));
            } else if (f.geometry.type === 'LineString') {
                c.forEach(pt => bounds.extend(pt));
            } else if (f.geometry.type === 'Point') {
                bounds.extend(c);
            }
        });
        map.fitBounds(bounds, { padding: 40, duration: 1500 });

    } catch (err) {}
}

window.initRouteMap = initRouteMap;
