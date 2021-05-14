Chart.types.Bar.extend({
    name: "BarAlt",
    initialize: function (data) {
        Chart.types.Bar.prototype.initialize.apply(this, arguments);

        if (this.options.curvature !== undefined && this.options.curvature <= 1) {
            var rectangleDraw = this.datasets[0].bars[0].draw;
            var self = this;
            var radius = this.datasets[0].bars[0].width * this.options.curvature * 0.2;

            // override the rectangle draw with ours
            this.datasets.forEach(function (dataset) {
                dataset.bars.forEach(function (bar) {
                    bar.draw = function () {
                        // draw the original bar a little down (so that our curve brings it to its original position)
                        var y = bar.y;
                        // the min is required so animation does not start from below the axes
                        bar.y = Math.min(bar.y + radius, self.scale.endPoint - 1);
                        // adjust the bar radius depending on how much of a curve we can draw
                        var barRadius = (bar.y - y);
                        rectangleDraw.apply(bar, arguments);

                        // draw a rounded rectangle on top
                        Chart.helpers.drawRoundedRectangle(self.chart.ctx, bar.x - bar.width / 2, bar.y - barRadius + 1, bar.width, bar.height, barRadius);
                        ctx.fill();

                        // restore the y value
                        bar.y = y;
                    }
                })
            })
        }
    }
});


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
            backgroundColor: '#6219D8',
            data: data_top_pot_sbf["data"].slice(0, 10).map(x => x[0]),
            borderRadius:20,
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
            backgroundColor: '#6219D8',
            data: data_top_pot_sbf["data"].slice(10).reverse().map(x => x[0] * -1),
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
            callbacks: {
                label: function (tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += tooltipItem.xLabel * -1;
                    return label;
                }
            }
        },
        scales: {
            yAxes: [{
                stacked: true,
                position: 'right',
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
                    min: -60,
                    max: -90,
                    stepSize: -20,
                    callback: function (value, index, values) {
                        return value * -1;
                    }
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