export const routeLRTJB = {
            id: "LRT-BK",
            code: "BK",
            mode: "lrt",
            subtype: "lrt",
            name: "Dukuh Atas - Jati Mulya",
            badgeColor: "#006838",
            geoJsonLine: "LRT BK line.geojson",
            geoJsonStops: "LRT BK stops.geojson",
            details: {
                tarif: "Rp 5.000 - Rp 20.000",
                ops: "05.12 - 23.45",
                headway: "6-20 Menit",
                headwayNote: "Situasional",
                heroImage: "assets/images/fotolrt.jpg"
            },
            directions: [
                {
                    name: "Full Route",
                    stops: [
                        { name: "Dukuh Atas Bank Syariah Indonesia", transfers: ["CB | Cibubur", "BK | Bekasi"], icons: ["icon-bus.svg", "icon-train.svg", "MRT.svg"], trainConnections: ["C | Cikarang", "MRT", "A | Basoetta"], halteInfo: { type: "integrasi", stops: [{ halte: "Galunggung", routes: ["4", "6"] }, { halte: "Dukuh Atas", routes: ["1", "1B", "6A", "6B"] }] }, stationIntegration: { station: "Sudirman", trainLines: ["C | Cikarang"] } },
                        { name: "Setiabudi", transfers: [], icons: ["icon-bus.svg"], halteInfo: { type: "integrasi", halte: ["Setiabudi"], routes: ["4D", "6", "6A", "6B", "6H", "6M", "13E", "L13E"] } },
                        { name: "Rasuna Said", transfers: [], icons: ["icon-bus.svg"], halteInfo: { type: "integrasi", halte: ["Rasuna Said"], routes: ["4D", "6", "6A", "6B", "6H", "6M", "13E", "L13E"] } },
                        { name: "Kuningan", transfers: [], icons: ["icon-bus.svg"], halteInfo: { type: "integrasi", halte: ["Kuningan"], routes: ["4D", "6", "6A", "6B", "6H", "6K", "6M", "13E", "L13E"] } },
                        { name: "Pancoran bank bjb", transfers: [], icons: ["icon-bus.svg"], halteInfo: { type: "integrasi", halte: ["Pancoran"], routes: ["4K", "5N", "9", "9A", "9C", "9D", "13B", "P11"] } },
                        { name: "Cikoko", transfers: [], icons: ["icon-train.svg","icon-bus.svg"], halteInfo: { type: "integrasi", halte: ["Cikoko"], routes: ["4K", "7D", "9", "9A", "9C"] }, stationIntegration: { station: "Cawang", trainLines: ["B | Bogor"] } },
                        { name: "Ciliwung", transfers: [], icons: ["icon-bus.svg"],halteInfo: { type: "integrasi", halte: ["Ciliwung"], routes: ["4K", "7D", "9", "9A", "9C"] } },
                        { name: "Cawang", transfers: [], icons: ["icon-bus.svg"], halteInfo: { type: "integrasi", stops: [{ halte: "Cawang", routes: ["4K", "5C", "7", "7D", "9", "9A", "9C"] }, { halte: "BNN 1 & 2", routes: ["7W", "B11", "B21"] }] } },
                        { name: "Halim", transfers: [], icons: ["icon-bus.svg", "KCIC.svg"], halteInfo: { type: "stasiun", halte: ["St. Kereta Cepat Halim"], routes: ["7W"] }, stationIntegration: { station: "KCIC Halim", trainLines: ["Whoosh"], label: "Whoosh", labelColor: "#7B0D1E" } },
                        { name: "Jati Bening Baru", transfers: [], isActive: true, label: "Terdekat" },
                        { name: "Cikunir 1", transfers: [] },
                        { name: "Cikunir 2", transfers: [] },
                        { name: "Bekasi Barat", transfers: [] },
                        { name: "Jati Mulya", transfers: ["TWM-K1"] }
                    ]
                }
            ]
        }
