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
            }],
            yAxes: [{
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