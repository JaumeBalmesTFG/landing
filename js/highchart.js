Highcharts.chart('container', {

    title: {
        text: 'Comparison of student performance'
    },

    xAxis: {
        tickInterval: 0.50,
        type: 'logarithmic',
        accessibility: {
            rangeDescription: 'Range: 0 to 10'
        }
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,
        accessibility: {
            rangeDescription: 'Range: 0.1 to 1000'
        }
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
    },

    series: [
        {
            data: [0.00, 0.05, 1, 8, 16, 32, 64, 128, 256, 512],
            pointStart: 0,
            name: "K-lendar Users",
        },
        {
            data: [0.00, 0.02, 0.05, 0.08, 0.09, 0.15, 0.5, 1, 1, 1],
            pointStart: 0,
            name: "Other Users"
        },
    ]
});