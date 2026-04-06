export const route11 = {
            id: "11",
            code: "11",
            mode: "brt",
            name: "Pulo Gebang - Kampung Melayu",
            badgeColor: "#2F4FA2",
            geoJsonLine: "Transjakarta - 11 Pulo Gebang - Kampung Melayu.geojson",
            geoJsonStops: "Transjakarta - 11 Pulo Gebang - Kampung Melayu - Stops.geojson",
            defaultIsHalteStop: true,
            details: {
                tarif: "Rp 3.500",
                tarifNote: "Rp 2.000 (05.00 - 07.00)",
                headway: "7 Menit",
                ops: "00.00 - 23.59 (24 Jam)",
                heroImage: "assets/images/foto11.jpg"
            },
            directions: [
                {
                    name: "Full Route",
                    stops: [
                        { name: "Kampung Melayu", transfers: ["5", "5C", "7", "11", "B25"] },
                        { name: "Jatinegara", transfers: ["5", "5B", "5C", "11", "B25"] },
                        { name: "Stasiun Jatinegara", transfers: ["11M", "B25"], icons: ["icon-train.svg","KAJJ.svg"], 
                            halteInfo: { 
                                type: "stasiun", 
                                halte: ["Stasiun Jatinegara"], 
                                routes: ["C | Cikarang"] 
                            } 
                        },
                        { name: "Flyover Jatinegara", transfers: ["4K", "10", "B25"] },
                        { name: "Pasar Enjo", transfers: ["11M"] },
                        { name: "Flyover Cipinang", transfers: ["11M"] },
                        { name: "Cipinang", transfers: ["11M"] },
                        { 
                            name: "Stasiun Klender", 
                            transfers: ["11M"], 
                            icons: ["icon-train.svg"],
                            halteInfo: {
                                type: "stasiun",
                                halte: ["Stasiun Klender"],
                                routes: ["C | Cikarang"]
                            }
                        },
                        { name: "Klender", transfers: ["11M"] },
                        { name: "Kampung Sumur", transfers: ["11M"] },
                        { name: "Buaran", transfers: ["11M"] },
                        { 
                            name: "Simpang Buaran", 
                            transfers: ["11M"], 
                            icons: ["icon-train.svg"], 
                            isActive: true,
                            label: "Terdekat", halteInfo: { type: "stasiun", stops: [{ halte: "Stasiun Buaran", routes: ["C | Cikarang"] }, { halte: "Flyover Radin Inten 1 & 2", routes: ["11P", "11Q", "JAK 39"] }] } },
                        { name: "Flyover Pondok Kopi", transfers: ["11M"] },
                        { name: "Penggilingan", transfers: ["11D", "11M"] },
                        { name: "Walikota Jakarta Timur", transfers: ["11D", "11M"] },
                        { name: "Pulo Gebang", transfers: ["11D"] }
                    ]
                }
            ]
        };
