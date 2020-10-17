//graph matériaux
var ctxx = document.getElementById('chart3_materio').getContext('2d');
var chart_marques = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_materials["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_materials["data"].map(x => x[0])
        }]
    },
    options: {
        responsive: true,
        title:{
            display:true,
            position:"bottom",
            fontFamily:"AileronHeavy",
            text:"Popularité cumulée des smartphones par matériaux."
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
                delay: 500 
            }
        },
    }
});

//graph colors
var ctxx = document.getElementById('chart4_color').getContext('2d');
var chart_marques = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: data_chart_couleurs["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: ["#171123", "#1B98E0", "#ABA8B2", "#FBFCFF", "#F3A712", "#DB2B39", "#DD99BB", "#6219D8"],
            data: data_chart_couleurs["data"].map(x => x[0])
        }]
    },
    options: {
        responsive: true,
        title:{
            display:true,
            position:"bottom",
            fontFamily:"AileronHeavy",
            text:"Popularité cumulée des smartphones par couleur."
        },
        legend: {
            position: "right",
            align:"start",
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
                delay: 500 
            }
        },
    }
});



//graph marques
var ctxx = document.getElementById('chart2_marques').getContext('2d');
var chart_marques = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: data_chart_marques["index"],
        datasets: [{
            label: "Indice de popularité",
            backgroundColor: '#6219D8',
            data: data_chart_marques["data"].map(x => x[0])
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
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
                delay: 500 
            }
        } 
    }
});