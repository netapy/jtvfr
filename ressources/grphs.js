//graph parts de marché
var ctx = document.getElementById('chart1_parts_de_marche').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sept 2015', 'Jun 2016', 'Jun 2017', 'Jun 2018', 'Sept 2020'],
        datasets: [{
            label: 'Android',
            backgroundColor: '#6219D8',
            data: [66.77, 69.68, 73.52, 76.61, 76.24, 74.44]
        }, {
            label: 'iOS',
            backgroundColor: '#7F67F1',
            data: [18.14, 19.38, 19.37, 20.66, 22.48, 24.98]
        }, {
            label: 'Windows Phone',
            backgroundColor: '#777EF2',
            data: [2.22, 1.63, 0.77, 0.37, 0.17, 0.03]
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 25
                }
            }]
        },
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        }
    }
});

//graph marques
var ctxx = document.getElementById('chart2_marques').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_marques["index"].map(day => day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()),
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_marques["data"].map(x => x[1]),
            yAxisID: "y-axis-1",
        }, {
            label: "Prix moyen",
            data: data_chart_marques["data"].map(x => x[0]),
            type: "line",
            yAxisID: "y-axis-2"
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
            }, {
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '€';
                    },
                    stepSize: 250
                }
            }],
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph matériaux
var ctxx = document.getElementById('chart3_materio').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_materials["index"].map(x => x.replace("Glass", "Verre").replace("Plastic", "Plastique").replace("Aluminum", "Aluminium").replace("Ceramic", "Ceramique")),
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_materials["data"].map(x => x[1]),
            yAxisID: "y-axis-1",
        }, {
            label: "Prix moyen",
            data: data_chart_materials["data"].map(x => x[0]),
            type: "line",
            yAxisID: "y-axis-2",
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones par matériaux."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
                ticks: {
                    stepSize: 20
                }
            }, {
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '€';
                    },
                    stepSize: 250
                }
            }],
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph colors
var ctxx = document.getElementById('chart4_color').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: data_chart_couleurs["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: ["#171123", "#1B98E0", "#ABA8B2", "#FBFCFF", "#DB2B39", "#F3A712", "#6219D8", "#DD99BB"],
            data: data_chart_couleurs["data"].map(x => x[1])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            padding: 20,
            fontSize: 14,
            text: "Indice popularité des smartphones par couleur."
        },
        legend: {
            position: "right",
            align: "start",
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph catprix
var ctxx = document.getElementById('chart5_catprix').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_cat_prix["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_cat_prix["data"].map(x => x[0])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones catégorie de prix."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 5
                }
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph cpu_brand
var ctxx = document.getElementById('chart6_popcpu').getContext('2d');
let data_cpu_brand = data_chart_cpu_brand["data"].map(b => [{
    "x": Math.round(b[0]),
    "y": b[1],
    "r": Math.round(b[0] / 60)
}][0]);
let color_cpu = ["#171123", "#1B98E0", "#ABA8B2", "#6219D8", "#F3A712", "#DB2B39"]
var chart = new Chart(ctxx, {
    type: 'bubble',
    data: {
        datasets: Array.from(Array(6).keys()).map(a => {
            return {
                label: data_chart_cpu_brand["index"][a],
                backgroundColor: color_cpu[a],
                data: [data_cpu_brand[a]]
            }
        })
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des ports de smartphones."
        },
        tooltips: {
            intersect: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Indice popularité'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Prix moyen'
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '€';
                    }
                }
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph ports
var ctxx = document.getElementById('chart6_typePort').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: data_chart_type_port["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: ["#6219D8", "#171123", "#ABA8B2", "#FBFCFF", "#F3A712", "#DB2B39", "#DD99BB", "#6219D8"],
            data: data_chart_type_port["data"].map(x => x[1])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "top",
            fontFamily: "Lexend Deca",
            padding: 20,
            fontSize: 14,
            text: "Indice popularité des smartphones par port."
        },
        legend: {
            position: "bottom",
            align: "start",
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph battery
var ctxx = document.getElementById('chart10_battery').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'line',
    data: {
        labels: data_chart_battery["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            borderColor: '#6219D8',
            fill: false,
            data: data_chart_battery["data"].map(x => x[1])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones par capacité de la batterie (mAh)."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 5
                }
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph screen tech
var ctxx = document.getElementById('chart7_techecran').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_screen_tech["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_screen_tech["data"].map(x => x[1]),
            yAxisID: "y-axis-1",
        }, {
            label: "Prix moyen",
            data: data_chart_screen_tech["data"].map(x => x[0]),
            type: 'line',
            yAxisID: "y-axis-2"
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones par matériaux."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
                ticks: {
                    stepSize: 25
                }
            }, {
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '€';
                    },
                    stepSize: 500
                }
            }],
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
            }],
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph screen size
var ctxx = document.getElementById('chart8_tailleecran').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_screen_sz["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_screen_sz["data"].map(x => x[0])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones par taille d'écran (pouces)."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 5
                }
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph screen refresh
var ctxx = document.getElementById('chart9_screenrefresh').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: data_chart_rfrsh_rate["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: ["#6219D8", "#171123", "#ABA8B2", "#FBFCFF", "#F3A712", "#DB2B39", "#DD99BB", "#6219D8"],
            data: data_chart_rfrsh_rate["data"].map(x => x[1])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            padding: 20,
            fontSize: 14,
            text: "Indice popularité des smartphones par taux de rafraîchissement."
        },
        legend: {
            position: "right",
            align: "start",
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph memoire ROM
var ctxx = document.getElementById('chart10_memROM').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_rom["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_rom["data"].map(x => x[1]),
            yAxisID: "y-axis-1",
        }, {
            label: "Prix moyen",
            data: data_chart_rom["data"].map(x => x[0]),
            type: "line",
            yAxisID: "y-axis-2",
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones par mémoire de stockage interne."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
                ticks: {
                    stepSize: 10
                }
            }, {
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '€';
                    },
                    stepSize: 250
                }
            }],
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph memoire RAM
var ctxx = document.getElementById('chart11_memRAM').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_ram["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_ram["data"].map(x => x[1]),
            yAxisID: "y-axis-1",
        }, {
            label: "Prix moyen",
            data: data_chart_ram["data"].map(x => x[0]),
            type: "line",
            yAxisID: "y-axis-2",
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones par mémoire vive."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
                ticks: {
                    stepSize: 10
                }
            }, {
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '€';
                    },
                    stepSize: 250
                }
            }],
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph 5G
var ctxx = document.getElementById('chart12_lacinqg').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: data_chart_5g["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: ["#6219D8", "#171123"],
            data: data_chart_5g["data"].map(x => x[1])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            padding: 20,
            fontSize: 14,
            text: "Indice popularité des smartphones par port."
        },
        legend: {
            position: "right",
            align: "start",
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph NFC
var ctxx = document.getElementById('chart13_nfc').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: data_chart_nfc["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: ["#6219D8", "#171123"],
            data: data_chart_nfc["data"].map(x => x[1])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            padding: 20,
            fontSize: 14,
            text: "Indice popularité des smartphones par port."
        },
        legend: {
            position: "right",
            align: "start",
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph NBCAM
var ctxx = document.getElementById('chart14_nbcam').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: data_chart_nb_cam["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: ["#6219D8", "#171123", "#EEEBF3", "#008EE0", "#F3A712"],
            data: data_chart_nb_cam["data"].map(x => x[0])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            padding: 20,
            fontSize: 14,
            text: "Indice popularité des smartphones par port."
        },
        legend: {
            position: "right",
            align: "start",
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});

//graph cam quality
var ctxx = document.getElementById('chart15_camqual').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_cam_qual["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_cam_qual["data"].map(x => x[1])
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Indice popularité des smartphones par mémoire de stockage interne."
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 10
                }
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        },
    }
});