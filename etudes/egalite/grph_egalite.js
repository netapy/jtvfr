var ctxx = document.querySelector('#chart0_secteurs_nat').getContext('2d');
var chart0nat = new Chart(ctxx, {
    type: 'horizontalBar',
    data: {
        labels: data_sect_181920['index'],
        datasets: [{
            label: "Indice égalité",
            backgroundColor: '#6219D8',
            data: data_sect_181920["data"].map(x => x[0][0])
        }]
    },
    options: {
        barValueSpacing: 20,
        responsive: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Source : Ministère du Travail"
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            yAxes: [{
                stacked: false,
                gridLines: {
                    display: false
                },
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            },
            legend: {
                onClick: ([event, legendItem, legend]) => {
                    var index = legendItem.datasetIndex;
                    if (index > 1) {
                        // Do the original logic
                        defaultLegendClickHandler(e, legendItem, legend);
                    } else {
                        let ci = legend.chart;
                        [
                            ci.getDatasetMeta(0),
                            ci.getDatasetMeta(1)
                        ].forEach(function (meta) {
                            meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
                        });
                        ci.update();
                    }
                }
            }
        },
    }
});

const c0_evol = (elem) => {
    chart0nat.data.datasets[0].data = data_sect_181920["data"].map(x => x[0][elem]);
    chart0nat.update();
}

//Graphique carte departements
let dataDepartements;
let laCarte = document.querySelector('#complete_map');
let legendeCarte = document.querySelector("#legendCarte").querySelectorAll("td");
var lesRegionsSvg = Array.from(laCarte.querySelectorAll("path"));
let chromaF = chroma.scale(['white', 'white', '6219D8']).domain([0, 70, 95]);

const fonctionHoverDep = (elem) => {
    elem.style.opacity = .3;
    document.querySelector('#dtCarteTerritoire').innerHTML = elem.dataset.label
    document.querySelector('#dtCarteMoyenne').innerHTML = Math.round(dataParDeps.Note[elem.dataset.label] * 10) / 10
}
const fonctionUnHoverDep = (elem) => {
    elem.style.opacity = 1;
    document.querySelector('#dtCarteTerritoire').innerHTML = "France"
    document.querySelector('#dtCarteMoyenne').innerHTML = 84
}


for (var ii in lesRegionsSvg) {
    if (String(typeof (lesRegionsSvg[ii])) == "object") {
        lesRegionsSvg[ii].style.fill = chromaF(dataParDeps.Note[lesRegionsSvg[ii].dataset.label]);
        let element = lesRegionsSvg[ii]
        lesRegionsSvg[ii].onmouseover = () => fonctionHoverDep(element);
        lesRegionsSvg[ii].onmouseout = () => fonctionUnHoverDep(element);
    }
}
console.log(legendeCarte)
for (ii in legendeCarte) {
    if (String(typeof (legendeCarte[ii])) == "object") {
        legendeCarte[ii].style.backgroundColor = chromaF(legendeCarte[ii].innerHTML)
    }
}

// CODE POUR COLLER LES NOMS DE DEPARTEMENTS AUX SVG DES DEPARTEMENTS
//fetch("https://www.data.gouv.fr/fr/datasets/r/7b4bc207-4e66-49d2-b1a5-26653e369b66")
//    .then(response => response.json())
//    .then((dataDepsImport) => {
//        console.log(dataDepsImport)
//        for (ii in lesRegionsSvg) {
//            console.log("")
//            console.log(lesRegionsSvg[ii].dataset.num)
//            console.log(dataDepsImport.find(el => el.num_dep == lesRegionsSvg[ii].dataset.num))
//            lesRegionsSvg[ii].dataset.label = dataDepsImport.find(el => el.num_dep == lesRegionsSvg[ii].dataset.num).dep_name
//        }
//    })





var ctxx = document.querySelector('#chart1_sbf120_secteurs').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'horizontalBar',
    data: {
        labels: data_sbf_secteurs['index'],
        datasets: [{
            label: "Indice égalité",
            backgroundColor: '#6219D8',
            data: data_sbf_secteurs["data"].map(x => x[0])
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Source : Ministère du Travail"
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        },
    }
});

var ctxx = document.querySelector('#chart2_sbf120_top').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'horizontalBar',
    data: {
        labels: data_top_pot_sbf['index'].slice(0, 10),
        datasets: [{
            label: "Indice égalité",
            backgroundColor: '#2ECC71',
            data: data_top_pot_sbf["data"].slice(0, 10).map(x => x[0]),
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Source : Ministère du Travail"
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
            }],
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
                ticks: {
                    min: 80,
                    max: 100,
                    stepSize: 10
                }
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        },
    }
});

var ctxx = document.querySelector('#chart3_sbf120_pot').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'horizontalBar',
    data: {
        labels: data_top_pot_sbf['index'].slice(10),
        datasets: [{
            label: "Indice égalité",
            backgroundColor: '#E74C3C',
            data: data_top_pot_sbf["data"].slice(10).map(x => x[0]),
            borderRadius: 20
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            position: "bottom",
            fontFamily: "Lexend Deca",
            text: "Source : Ministère du Travail"
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
            }],
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
                ticks: {
                    min: 60,
                    max: 90,
                    stepSize: 20,
                }
            }]
        },
        maintainAspectRatio: false,
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        },
    }
});