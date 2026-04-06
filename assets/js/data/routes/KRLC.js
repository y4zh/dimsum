export const routeKRLC = {
            id: "KRL-C",
            code: "C",
            mode: "krl",
            subtype: "krl",
            name: "Cikarang - Kampung Bandan",
            badgeColor: "#26baed",
            geoJsonLine: "Cikarang Loop Line - Line.geojson",
            geoJsonStops: "Cikarang Loop Line - Stops.geojson",
            details: {
                tarif: "Rp 3.000 - Rp 13.000",
                ops: "04.00 - 24.00",
                headway: "15-30 Menit",
                headwayNote: "Situasional",
                heroImage: "assets/images/fotokrl.jpg"
            },
            directions: [
                {
                    name: "via Manggarai",
                    stops: [
                        { name: "Cikarang", transfers: ["LJ| Jatiluhur","LW | Walahar", "TWM-K1"], icons: ["KAJJ.svg", "icon-bus.svg"] },
                        { name: "Metland Telaga Murni", transfers: [] },
                        { name: "Cibitung", transfers: [] },
                        { name: "Tambun", transfers: [] },
                        { name: "Bekasi Timur", transfers: [] },
                        { name: "Bekasi", transfers: [], icons: ["KAJJ.svg"] },
                        { name: "Kranji", transfers: [] },
                        { name: "Cakung", transfers: ["11B","11C","11M","JAK 100"] },
                        { name: "Klender Baru", transfers: ["JAK 85"] },
                        { 
                            name: "Buaran", 
                            transfers: [], 
                            isActive: true, 
                            label: "Terdekat", 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "integrasi", 
                                stops: [
                                    { halte: "Simpang Buaran", routes: ["11", "11M"] }, 
                                    { halte: "Flyover Radin Inten 1 & 2", type: "busstop", routes: ["11P", "11Q", "JAK 39"] }
                                ] 
                            } 
                        },
                        { 
                            name: "Klender", 
                            transfers: [], 
                            isActive: true, 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "terdekat", 
                                halte: ["Stasiun Klender"], 
                                routes: ["11", "11M"] 
                            } 
                        },
                        {
                            name: "Jatinegara",
                            transfers: [], 
                            icons: ["KAJJ.svg", "icon-bus.svg"],
                            halteInfo: {
                                type: "integrasi",
                                stops: [
                                    { halte: "Stasiun Jatinegara", routes: ["11", "11M", "B25"] },
                                    { halte: "Bali Mester", routes: ["5", "5B", "5C"] }
                                ]
                            }
                        },
                        { 
                            name: "Matraman", 
                            transfers: [], 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "integrasi", 
                                halte: ["Matraman Baru"], 
                                routes: ["5", "5C", "7U", "B25"] 
                            } 
                        },
                        { name: "Manggarai", transfers: ["A | Basoetta", "B | Bogor"], icons: ["KAB.svg"], trainConnections: ["A | Basoetta", "B | Bogor"] },
                        { name: "Sudirman", transfers: [], icons: ["MRT.svg", "icon-lrt.svg"], trainConnections: ["MRT", "CB", "BK"] },
                        { name: "BNI City", transfers: ["A | Basoetta"], icons: ["KAB.svg"] },
                        { name: "Karet", transfers: [] },
                        { 
                            name: "Tanah Abang", 
                            transfers: ["R | Rangkasbitung"], 
                            icons: ["icon-bus.svg"],
                            trainConnections: ["R | Rangkasbitung"],
                            halteInfo: {
                                type: "integrasi",
                                stops: [
                                    { halte: "Transjakarta Tanah Abang 1", type: "busstop", routes: ["JAK 07", "JAK 08", "JAK 09", "JAK 10", "JAK 11", "JAK 12", "JAK 13", "JAK 14"] },
                                    { halte: "Transjakarta Tanah Abang 2", type: "busstop", routes: ["1H", "1N", "1R", "5M", "8C", "8M", "9D"] },
                                    { halte: "Explorer Tanah Abang", type: "busstop", routes: ["1H", "1N", "1R", "5M", "8M", "9D", "JAK 07", "JAK 11", "JAK 12", "JAK 14"] }
                                ]
                            }
                        },
                        { name: "Duri", transfers: ["A | Basoetta", "T | Tangerang"], icons : ["KAB.svg"], trainConnections: ["A | Basoetta", "T | Tangerang"] },
                        { name: "Angke", transfers: [] },
                        { name: "Kampung Bandan", transfers: ["TP | Tanjung Priok"], trainConnections: ["TP | Tanjung Priok"] },
                        
                        { name: "---", transfers: [], isSeparator: true },

                        { name: "Rajawali", transfers: [] },
                        { name: "Kemayoran", transfers: [] },
                        { name: "Pasar Senen", transfers: [], icons: ["KAJJ.svg"] },
                        { name: "Gang Sentiong", transfers: [] },
                        { name: "Kramat", transfers: [] },
                        { name: "Pondok Jati", transfers: [] },
                        { 
                            name: "Jatinegara",
                            transfers: [], 
                            icons: ["KAJJ.svg", "icon-bus.svg"],
                            halteInfo: {
                                type: "integrasi",
                                stops: [
                                    { halte: "Stasiun Jatinegara", routes: ["11", "11M", "B25"] },
                                    { halte: "Bali Mester", routes: ["5", "5B", "5C"] }
                                ]
                            }
                        },
                        { 
                            name: "Klender", 
                            transfers: [], 
                            isActive: true, 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "terdekat", 
                                halte: ["Stasiun Klender"], 
                                routes: ["11", "11M"] 
                            } 
                        },
                        { 
                            name: "Buaran", 
                            transfers: [], 
                            isActive: true, 
                            label: "Terdekat", 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "terdekat", 
                                stops: [
                                    { halte: "Simpang Buaran", routes: ["11", "11M"] }, 
                                    { halte: "Flyover Radin Inten 1 & 2", type: "busstop", routes: ["11P", "11Q", "JAK 39"] }
                                ] 
                            } 
                        },
                        { name: "Klender Baru", transfers: [] },
                        { name: "Cakung", transfers: ["11B","11C","11M","JAK 100"] },
                        { name: "Kranji", transfers: [] },
                        { name: "Bekasi", transfers: [], icons: ["KAJJ.svg"] },
                        { name: "Bekasi Timur", transfers: [] },
                        { name: "Tambun", transfers: [] },
                        { name: "Cibitung", transfers: [] },
                        { name: "Metland Telaga Murni", transfers: [] },
                        { name: "Cikarang", transfers: ["LJ| Jatiluhur","LW | Walahar", "TWM-K1"], icons: ["KAJJ.svg", "icon-bus.svg"] }
                    ]
                },
                {
                    name: "via Pasar Senen",
                    stops: [
                        { name: "Cikarang", transfers: ["LJ| Jatiluhur","LW | Walahar", "TWM-K1"], icons: ["KAJJ.svg", "icon-bus.svg"] },
                        { name: "Metland Telaga Murni", transfers: [] },
                        { name: "Cibitung", transfers: [] },
                        { name: "Tambun", transfers: [] },
                        { name: "Bekasi Timur", transfers: [] },
                        { name: "Bekasi", transfers: [], icons: ["KAJJ.svg"]},
                        { name: "Kranji", transfers: [] },
                        { name: "Cakung", transfers: ["11B","11C","11M","JAK 100"], icons: ["icon-bus.svg"] },
                        { name: "Klender Baru", transfers: ["JAK 85"] },
                        { 
                            name: "Buaran", 
                            transfers: [], 
                            isActive: true, 
                            label: "Terdekat", 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "terdekat", 
                                stops: [
                                    { halte: "Simpang Buaran", routes: ["11", "11M"] }, 
                                    { halte: "Flyover Radin Inten 1 & 2", type: "busstop", routes: ["11P", "11Q", "JAK 39"] }
                                ] 
                            } 
                        },
                        { 
                            name: "Klender", 
                            transfers: [], 
                            isActive: true, 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "terdekat", 
                                halte: ["Stasiun Klender"], 
                                routes: ["11", "11M"] 
                            } 
                        },
                        {
                            name: "Jatinegara",
                            transfers: [], 
                            icons: ["KAJJ.svg", "icon-bus.svg"],
                            halteInfo: {
                                type: "integrasi",
                                stops: [
                                    { halte: "Stasiun Jatinegara", routes: ["11", "11M", "B25"] },
                                    { halte: "Bali Mester", routes: ["5", "5B", "5C"] }
                                ]
                            }
                        },
                        { name: "Pondok Jati", transfers: [] },
                        { name: "Kramat", transfers: [] },
                        { name: "Gang Sentiong", transfers: [] },
                        { name: "Pasar Senen", transfers: [], icons: ["KAJJ.svg"] },
                        { name: "Kemayoran", transfers: [] },
                        { name: "Rajawali", transfers: [] },
                        { name: "Kampung Bandan", transfers: ["TP | Tanjung Priok"], trainConnections: ["TP | Tanjung Priok"] },

                        { name: "---", transfers: [], isSeparator: true },

                        { name: "Angke", transfers: [] },
                        { name: "Duri", transfers: ["A | Basoetta", "T | Tangerang"], icons: ["KAB.svg"], trainConnections: ["A | Basoetta", "T | Tangerang"] },
                        { 
                            name: "Tanah Abang", 
                            transfers: ["R | Rangkasbitung"], 
                            icons: ["icon-bus.svg"],
                            trainConnections: ["R | Rangkasbitung"],
                            halteInfo: {
                                type: "integrasi",
                                stops: [
                                    { halte: "Transjakarta Tanah Abang 1", type: "busstop", routes: ["JAK 07", "JAK 08", "JAK 09", "JAK 10", "JAK 11", "JAK 12", "JAK 13", "JAK 14"] },
                                    { halte: "Transjakarta Tanah Abang 2", type: "busstop", routes: ["1H", "1N", "1R", "5M", "8C", "8M", "9D"] },
                                    { halte: "Explorer Tanah Abang", type: "busstop", routes: ["1H", "1N", "1R", "5M", "8M", "9D", "JAK 07", "JAK 11", "JAK 12", "JAK 14"] }
                                ]
                            }
                        },
                        { name: "Karet", transfers: [] },
                        { name: "BNI City", transfers: ["A | Basoetta"], icons: ["KAB.svg"] },
                        { name: "Sudirman", transfers: [], icons: ["MRT.svg", "icon-lrt.svg"], trainConnections: ["MRT","CB","BK"] },
                        { name: "Manggarai", transfers: ["A | Basoetta", "B | Bogor"], icons: ["KAB.svg"], trainConnections: ["A | Basoetta", "B | Bogor"] },
                        { 
                            name: "Matraman", 
                            transfers: [], 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "integrasi", 
                                halte: ["Matraman Baru"], 
                                routes: ["5", "5C", "7U", "B25"] 
                            } 
                        },
                        {
                            name: "Jatinegara",
                            transfers: [], 
                            icons: ["KAJJ.svg", "icon-bus.svg"],
                            halteInfo: {
                                type: "integrasi",
                                stops: [
                                    { halte: "Stasiun Jatinegara", routes: ["11", "11M", "B25"] },
                                    { halte: "Bali Mester", routes: ["5", "5B", "5C"] }
                                ]
                            }
                        },
                        { 
                            name: "Klender", 
                            transfers: [], 
                            isActive: true, 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "terdekat", 
                                halte: ["Stasiun Klender"], 
                                routes: ["11", "11M"] 
                            } 
                        },
                        { 
                            name: "Buaran", 
                            transfers: [], 
                            isActive: true, 
                            label: "Terdekat", 
                            icons: ["icon-bus.svg"],
                            halteInfo: { 
                                type: "terdekat", 
                                stops: [
                                    { halte: "Simpang Buaran", routes: ["11", "11M"] }, 
                                    { halte: "Flyover Radin Inten 1 & 2", type: "busstop", routes: ["11P", "11Q", "JAK 39"] }
                                ] 
                            } 
                        },
                        { name: "Klender Baru", transfers: [] },
                        { name: "Cakung", transfers: ["11B","11C","11M","JAK 100"], icons : ["icon-bus.svg"] },
                        { name: "Kranji", transfers: [] },
                        { name: "Bekasi", transfers: [] },
                        { name: "Bekasi Timur", transfers: [] },
                        { name: "Tambun", transfers: [] },
                        { name: "Cibitung", transfers: [] },
                        { name: "Metland Telaga Murni", transfers: [] },
                        { name: "Cikarang", transfers: ["LJ| Jatiluhur","LW | Walahar", "TWM-K1"], icons: ["KAJJ.svg", "icon-bus.svg"] }
                    ]
                }
            ]
        }
