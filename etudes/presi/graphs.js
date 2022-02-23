minSent = 1.8
echelleSentiments = [minSent, minSent + .2, minSent + .4, minSent + .6, minSent + .8]
echelleSentimentsShort = [minSent, minSent + .35, minSent + .4, minSent + .45, minSent + .8]

const customLegend = {
    id: 'customLegend',
    afterDraw: (chart, args, options) => {
        const {
            _metasets,
            ctx
        } = chart;
        ctx.save();

        _metasets.forEach((meta) => {
            ctx.font = 'bolder 12px Arial';
            ctx.fillStyle = meta._dataset.borderColor;
            ctx.textBaseline = 'middle';
            ctx.fillText(meta._dataset.label, meta.data[meta.data.length - 1].x + 6, meta.data[meta.data.length - 1].y)
        })
    }
}

//graph score candidats a travers le temps
var courbe1 = document.getElementById('chart1_courbeSent').getContext('2d');
var chart1 = new Chart(courbe1, {
    type: 'line',
    data: {"labels": ["2021-12-01", "2021-12-02", "2021-12-03", "2021-12-04", "2021-12-05", "2021-12-06", "2021-12-07", "2021-12-08", "2021-12-09", "2021-12-10", "2021-12-11", "2021-12-12", "2021-12-13", "2021-12-14", "2021-12-15", "2021-12-16", "2021-12-17", "2021-12-18", "2021-12-19", "2021-12-20", "2021-12-21", "2021-12-22", "2021-12-23", "2021-12-24", "2021-12-25", "2021-12-26", "2021-12-27", "2021-12-28", "2021-12-29", "2021-12-30", "2021-12-31", "2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10", "2022-01-11", "2022-01-12", "2022-01-13", "2022-01-14", "2022-01-15", "2022-01-16", "2022-01-17", "2022-01-18", "2022-01-19", "2022-01-20", "2022-01-21", "2022-01-22", "2022-01-23", "2022-01-24", "2022-01-25", "2022-01-26", "2022-01-27", "2022-01-28", "2022-01-29", "2022-01-30", "2022-01-31", "2022-02-01", "2022-02-02", "2022-02-03", "2022-02-04", "2022-02-05", "2022-02-06", "2022-02-07", "2022-02-08", "2022-02-09", "2022-02-10", "2022-02-11", "2022-02-12", "2022-02-13", "2022-02-14", "2022-02-15", "2022-02-16", "2022-02-17", "2022-02-18", "2022-02-19", "2022-02-20"], "datasets": [{"data": ["1.89", "2.41", "1.81", "2.06", "2.0", "2.6", "2.04", "2.07", "2.11", "2.0", "1.64", "1.8", "2.17", "1.8", "1.64", "1.6", "1.74", "1.9", "2.3", "1.81", "1.76", "1.86", "2.14", "1.87", "2.19", "1.71", "2.05", "1.93", "1.55", "2.19", "1.67", "2.04", "1.97", "1.6", "1.62", "1.91", "1.77", "2.0", "2.0", "1.94", "1.99", "1.89", "1.89", "2.08", "2.1", "1.88", "2.12", "2.13", "2.03", "2.16", "2.14", "1.86", "1.64", "2.18", "2.32", "1.9", "1.72", "1.92", "1.95", "1.86", "1.78", "1.99", "1.94", "1.91", "2.25", "1.76", "2.11", "2.03", "2.18", "2.1", "1.94", "2.16", "1.98", "2.15", "2.13", "1.95", "1.9", "1.84", "2.08", "2.05", "1.78", "1.74"], "label": "Arthaud", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#F58851"}, {"data": ["2.22", "2.39", "2.4", "2.43", "2.44", "2.29", "2.26", "2.33", "2.55", "2.37", "2.55", "2.37", "2.15", "2.3", "2.26", "2.09", "2.3", "2.3", "2.3", "2.24", "2.23", "2.2", "2.25", "2.41", "2.36", "2.08", "2.21", "2.31", "2.18", "2.34", "2.5", "2.51", "2.19", "2.61", "2.42", "2.3", "2.28", "2.04", "2.1", "2.44", "2.03", "2.13", "2.11", "2.14", "2.34", "2.3", "2.58", "2.41", "2.31", "2.35", "2.55", "2.38", "2.63", "2.23", "2.34", "2.32", "2.32", "2.03", "1.97", "2.35", "2.31", "2.33", "2.44", "2.32", "2.21", "2.22", "2.3", "2.37", "2.46", "2.52", "2.16", "2.18", "2.3", "2.36", "2.23", "1.88", "2.21", "2.22", "2.49", "2.31", "2.25", "2.34"], "label": "Dupont-Aignan", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#C1A5A9"}, {"data": ["2.0", "2.09", "2.07", "2.08", "2.01", "2.07", "1.95", "2.08", "1.94", "2.02", "1.99", "2.06", "1.87", "1.91", "1.97", "1.92", "2.07", "2.03", "1.98", "1.95", "2.04", "1.98", "1.87", "2.0", "2.1", "2.0", "2.0", "2.04", "2.08", "2.04", "2.15", "2.24", "2.14", "1.97", "2.15", "2.2", "2.02", "1.98", "2.09", "1.97", "2.05", "2.0", "2.07", "2.04", "2.02", "2.04", "2.06", "1.96", "1.97", "2.06", "2.05", "2.01", "2.1", "2.05", "2.0", "2.03", "2.06", "1.98", "2.0", "1.96", "2.02", "2.0", "2.11", "2.09", "2.16", "2.08", "2.09", "2.09", "2.05", "2.18", "2.01", "2.08", "2.01", "2.15", "1.98", "1.97", "1.95", "2.01", "1.94", "2.03", "2.06", "2.02"], "label": "Hidalgo", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#894106"}, {"data": ["2.28", "2.32", "2.24", "2.14", "2.3", "2.39", "2.33", "2.23", "2.19", "2.23", "2.49", "2.37", "2.35", "2.2", "2.22", "2.31", "2.41", "2.28", "2.3", "2.37", "2.25", "2.32", "2.33", "2.39", "2.34", "2.2", "2.57", "2.56", "2.36", "2.3", "2.35", "2.46", "2.34", "2.36", "2.26", "2.33", "2.24", "2.37", "2.47", "2.4", "2.34", "2.39", "2.31", "2.38", "2.52", "2.37", "2.29", "2.36", "2.2", "2.04", "2.11", "2.28", "2.3", "2.46", "2.32", "2.44", "2.45", "2.33", "2.2", "2.76", "2.38", "2.26", "2.54", "2.55", "2.46", "2.52", "2.35", "2.37", "2.47", "2.47", "2.36", "2.48", "2.33", "2.33", "1.89", "1.98", "2.11", "2.11", "2.49", "2.28", "2.35", "2.26"], "label": "Jadot", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#33673B"}, {"data": ["2.64", "2.47", "3.13", "2.5", "2.19", "2.38", "2.12", "2.01", "1.96", "2.57", "2.26", "2.52", "2.76", "2.5", "2.3", "2.63", "2.3", "2.46", "2.47", "2.35", "2.0", "2.35", "3.09", "3.07", "3.14", "2.29", "2.67", "2.11", "2.06", "2.6", "2.67", "2.65", "2.81", "2.87", "2.81", "2.23", "2.55", "2.61", "2.42", "1.99", "2.72", "2.05", "2.19", "2.17", "1.98", "1.88", "1.85", "2.36", "2.26", "2.59", "2.67", "2.74", "2.56", "2.34", "2.14", "2.44", "2.06", "2.25", "2.22", "2.71", "2.64", "2.27", "2.79", "2.16", "2.37", "2.43", "2.85", "2.39", "2.75", "2.36", "2.49", "2.48", "2.55", "2.36", "2.2", "2.72", "2.34", "1.95", "2.6", "2.48", "2.49", "2.32"], "label": "Lassalle", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#23BE6E"}, {"data": ["2.18", "2.22", "2.28", "2.35", "2.17", "2.19", "2.26", "2.19", "2.1", "2.22", "2.22", "2.16", "2.21", "2.13", "2.15", "2.31", "2.17", "2.18", "2.16", "2.28", "2.25", "2.23", "2.22", "2.52", "2.26", "2.19", "2.2", "2.17", "2.13", "2.15", "2.31", "2.12", "2.17", "2.27", "2.16", "2.13", "2.06", "2.21", "2.13", "2.09", "2.13", "2.25", "2.15", "2.14", "2.26", "1.97", "2.07", "2.12", "2.21", "2.23", "2.34", "2.23", "2.19", "2.12", "2.16", "2.24", "2.26", "2.18", "2.35", "2.28", "2.3", "2.19", "2.23", "2.28", "2.18", "2.12", "2.34", "2.25", "2.31", "2.16", "2.29", "2.39", "2.33", "2.27", "2.3", "2.15", "2.17", "2.47", "2.21", "2.3", "2.18", "2.29"], "label": "Le pen", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#7798AB"}, {"data": ["2.18", "2.27", "2.27", "2.25", "2.15", "2.19", "2.16", "2.34", "2.36", "2.29", "2.23", "2.09", "2.15", "2.17", "2.46", "2.2", "2.23", "2.19", "2.21", "2.23", "2.22", "2.21", "2.2", "2.44", "2.28", "2.22", "2.15", "2.18", "2.18", "2.26", "2.54", "2.34", "2.24", "2.2", "2.16", "2.15", "2.19", "2.15", "2.26", "2.14", "2.16", "2.24", "2.09", "2.09", "2.11", "2.07", "2.19", "2.12", "2.17", "2.29", "2.26", "2.25", "2.2", "2.17", "2.2", "2.14", "2.27", "2.16", "2.19", "2.15", "2.18", "2.19", "2.19", "2.24", "2.24", "2.16", "2.16", "2.14", "2.32", "2.18", "2.16", "2.24", "2.32", "2.31", "2.15", "2.18", "2.19", "2.28", "2.18", "2.17", "2.21", "2.22"], "label": "Macron", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#6219D8"}, {"data": ["2.16", "2.17", "2.37", "2.23", "2.19", "2.25", "2.17", "2.21", "2.2", "2.19", "2.25", "2.29", "2.18", "2.19", "2.2", "2.21", "2.02", "2.24", "2.21", "2.23", "2.26", "2.15", "2.19", "2.37", "2.35", "2.36", "2.4", "2.4", "2.23", "2.26", "2.38", "2.35", "2.55", "2.23", "2.15", "2.22", "2.23", "2.31", "2.3", "2.23", "2.28", "2.21", "2.3", "2.18", "2.25", "2.21", "2.33", "2.19", "2.27", "2.3", "2.18", "2.29", "2.17", "2.37", "2.43", "2.3", "2.13", "2.05", "1.97", "2.13", "2.39", "2.08", "2.16", "2.23", "2.35", "2.31", "2.3", "2.19", "2.15", "2.19", "2.32", "2.59", "2.3", "2.39", "2.26", "2.23", "2.36", "2.53", "2.51", "2.26", "2.25", "2.25"], "label": "M\u00e9lenchon", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#DB5461"}, {"data": ["2.3", "2.33", "2.25", "2.26", "2.15", "2.29", "2.14", "2.14", "2.13", "2.19", "2.14", "2.04", "2.13", "2.05", "2.11", "2.05", "2.06", "2.11", "2.08", "2.11", "2.1", "2.07", "2.16", "2.2", "2.1", "1.91", "1.95", "2.18", "2.21", "2.01", "2.07", "1.98", "2.08", "2.13", "2.1", "1.94", "1.93", "2.07", "2.03", "1.99", "2.08", "2.1", "2.0", "2.14", "2.15", "2.01", "2.1", "2.02", "2.16", "2.03", "2.02", "2.13", "2.11", "2.16", "2.07", "2.17", "2.18", "2.09", "2.18", "2.13", "2.05", "2.33", "2.09", "2.01", "2.06", "2.08", "2.06", "2.15", "2.02", "2.21", "2.09", "2.04", "2.17", "2.06", "1.98", "2.02", "2.04", "2.15", "2.12", "2.21", "1.9", "2.02"], "label": "Pecresse", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#42BFDD"}, {"data": ["2.35", "2.24", "2.36", "2.25", "2.23", "2.23", "1.87", "2.05", "2.04", "2.01", "2.08", "2.17", "2.09", "2.31", "2.04", "2.11", "2.35", "2.13", "1.93", "2.09", "2.19", "1.96", "2.14", "2.46", "2.21", "2.16", "2.35", "2.04", "2.16", "2.15", "2.01", "2.14", "2.24", "2.07", "2.07", "2.26", "2.04", "2.04", "2.13", "1.9", "2.07", "2.03", "1.98", "2.06", "2.06", "2.04", "2.18", "2.05", "2.05", "1.99", "2.07", "2.17", "2.14", "2.12", "2.11", "2.06", "2.04", "1.96", "2.14", "2.07", "2.09", "2.19", "2.13", "2.03", "2.11", "2.08", "2.03", "2.35", "2.06", "2.13", "2.27", "2.26", "2.12", "2.04", "2.13", "2.06", "1.99", "2.11", "2.04", "2.07", "2.2", "1.89"], "label": "Roussel", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#E7BB73"}, {"data": ["2.37", "2.63", "2.67", "2.92", "2.83", "2.34", "2.41", "2.38", "2.42", "2.58", "2.41", "2.54", "2.4", "2.14", "2.17", "2.28", "2.4", "2.3", "2.26", "2.27", "2.25", "2.46", "2.36", "2.34", "2.21", "2.51", "2.37", "2.39", "2.73", "2.46", "2.52", "2.27", "2.26", "2.21", "2.2", "2.12", "2.27", "2.21", "2.13", "2.48", "2.34", "2.34", "2.35", "2.34", "2.28", "2.28", "2.27", "2.27", "2.21", "2.18", "2.28", "2.22", "2.14", "2.14", "2.23", "2.2", "2.26", "2.38", "2.38", "2.36", "2.26", "2.1", "2.17", "2.09", "2.06", "2.3", "2.03", "2.22", "2.29", "2.25", "2.25", "2.34", "2.24", "2.55", "2.31", "2.29", "2.09", "2.06", "2.05", "2.38", "2.2", "2.07"], "label": "Taubira", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#F08CAE"}, {"data": ["2.05", "2.18", "2.2", "2.25", "2.07", "2.08", "2.02", "2.11", "2.17", "2.1", "2.22", "2.12", "2.1", "2.18", "2.22", "2.33", "2.18", "2.22", "2.36", "2.22", "2.14", "2.3", "2.22", "2.6", "2.4", "2.2", "2.28", "2.19", "2.27", "2.29", "2.55", "2.3", "2.23", "2.17", "2.18", "2.04", "2.1", "2.53", "2.29", "2.26", "2.33", "2.29", "2.56", "2.29", "2.39", "2.11", "2.29", "2.15", "2.19", "2.35", "2.26", "2.33", "2.46", "2.3", "2.23", "2.27", "2.3", "1.97", "2.25", "2.27", "2.24", "2.27", "2.22", "2.5", "2.12", "2.11", "2.33", "2.2", "2.32", "2.23", "2.32", "2.25", "2.39", "2.36", "2.17", "2.28", "2.17", "2.34", "2.23", "2.21", "2.27", "2.21"], "label": "Zemmour", "backgroundColor": "#FFFFFF00", "tension": 0.2, "borderColor": "#4C4C47"}]},
    options: {
        responsive: true,
        interaction: {
            intersect: true,
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 14
                }
            },
            y: {
                ticks: {
                    min: 0,
                    max: 3,
                    stepSize: .1,
                    font: {
                        size: 18
                    },
                    callback: function (value, index, ticks) {
                        if (echelleSentiments.includes(value)) return ['😡', '😕', '😐', '🙂', '😀'][echelleSentiments.indexOf(value)];
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    font: {
                        size: 14
                    }
                }
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x'
                },
                zoom: {
                    wheel: {
                        enabled: true
                    },
                    pinch: {
                        enabled: true
                    },
                    limits: {
                        xAxes: {
                            minRange: 10
                        },
                    },
                    mode: 'x',
                }
            }
        }
    },
    //plugins:[customLegend]
});

chart1.canvas.style.touchAction = "pan-y";

//graph jours et sentiments
var courbe2 = document.getElementById('chart2_courbeJour').getContext('2d');
var chart2 = new Chart(courbe2, {
    type: 'bar',
    data: {
        "labels": ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        "datasets": [{
            "data": ["2.1749345211870246", "2.181104304798217", "2.173469414953874", "2.163155202988543", "2.2303432222806334", "2.204978515924326", "2.1857983821413085"],
            "label": "Sentiment",
            "backgroundColor": "#6219D8"
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (tooltipItems, data) {
                    var label = data.datasets[tooltipItems.datasetIndex].label + " : " + tooltipItems.yLabel + "%";
                    return label;
                }
            }
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                gridLines: {
                    display: false
                },
            },
            yAxes: {
                min: 2.12,
                max: 2.25,
                ticks: {
                    font: {
                        size: 18
                    },
                    stepSize: .01,
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        if (echelleSentimentsShort.includes(value)) return ['😡', '😕', '😐', '🙂', '😀'][echelleSentimentsShort.indexOf(value)];
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        }
    }
});




//graph score candidats a travers le temps
var courbe3 = document.getElementById('chart3_courbeHeure').getContext('2d');
var chart3 = new Chart(courbe3, {
    type: 'bar',
    data: {
        "labels": ["0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"],
        "datasets": [{
            "data": ["2.1585514715855147", "2.1254484721019424", "2.1261419536191144", "2.148467241033861", "2.1714466803993027", "2.1433024362234434", "2.1767637740514645", "2.20461261427648", "2.1858910006635925", "2.1840884383947574", "2.1927783322623426", "2.2092022795544732", "2.1775733954577072", "2.181131952514907", "2.1799170703843957", "2.188612956011166", "2.183697967086157", "2.1914025959733676", "2.199062381927735", "2.1977019969745113", "2.203480484978662", "2.1878390964327425", "2.1717089809918644", "2.1671494061262764"],
            "label": "Sentiment",
            "backgroundColor": "#6219D8"
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (tooltipItems, data) {
                    var label = data.datasets[tooltipItems.datasetIndex].label + " : " + tooltipItems.yLabel + "%";
                    return label;
                }
            }
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10
                }
            },
            yAxes: {
                min: 2.12,
                max: 2.25,
                ticks: {
                    font: {
                        size: 18
                    },
                    stepSize: .01,
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        if (echelleSentimentsShort.includes(value)) return ['😡', '😕', '😐', '🙂', '😀'][echelleSentimentsShort.indexOf(value)];
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 300
            }
        }
    }
});

//graph score candidats a travers le temps
var courbe4 = document.getElementById('chart4_treemap').getContext('2d');
var chart4 = new Chart(courbe4, {
    type: 'treemap',
    data: {
        datasets: [{
            label: "Candidat",
            tree: [{
                'title': 'Arthaud',
                'tweets': 820
            }, {
                'title': 'Macron',
                'tweets': 33150
            }, {
                'title': 'Pécresse',
                'tweets': 27330
            }, {
                'title': 'Le Pen',
                'tweets': 8090
            }, {
                'title': 'Zemmour',
                'tweets': 37940
            }, {
                'title': 'Mélenchon',
                'tweets': 14800
            }, {
                'title': 'Jadot',
                'tweets': 6860
            }, {
                'title': 'Taubira',
                'tweets': 11180
            }, {
                'title': 'Hidalgo',
                'tweets': 4220
            }, {
                'title': 'Roussel',
                'tweets': 6050
            }, {
                'title': 'Dupont-Aignan',
                'tweets': 3530
            }, {
                'title': 'Lassalle',
                'tweets': 330
            }],
            key: 'tweets',
            groups: ['title'],
            labels: {
                display: true,
                color: 'white',
                font: {
                    size: 12,
                },
                formatter: (ctx) =>[ ctx.raw.g, ctx.raw.v + " tweets"]

            },
            borderWidth: 0,
            spacing: 1,
            backgroundColor: "#6219D8",
        }],
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});