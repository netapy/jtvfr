var ctxx = document.querySelector('#chart1_sbf120_secteurs').getContext('2d');
var chart = new Chart(ctxx, {
    type: 'horizontalBar',
    data: {
        labels: data_score_secteurs['index'],
        datasets: [{
            label: "Indice égalité",
            backgroundColor: '#6219D8',
            data: data_score_secteurs["data"].map(x => x[0])
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
        labels: data_top_pot_sbf['index'].slice(10).reverse(),
        datasets: [{
            label: "Indice égalité",
            backgroundColor: '#E74C3C',
            data: data_top_pot_sbf["data"].slice(10).reverse().map(x => x[0]),
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