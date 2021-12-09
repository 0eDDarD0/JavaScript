function main(){
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Partido');
    data.addColumn('number', 'Escaños');
    data.addRows([
        ['PSOE', 120],
        ['PP', 88],
        ['VOX', 52],
        ['UP', 34],
        ['ERC', 13],
        ['Cs', 10],
        ['JxCAT', 8],
        ['PNV', 7],
        ['EH Bildu', 5],
        ['Más País', 3],
        ['CUP', 2],
        ['CCa', 2],
        ['NA+', 2],
        ['BNG', 1],
        ['PRC', 1],
        ['Teruel Existe', 1],
    ]);
    // Set chart options
    var options = {
        'title':'Congreso de los diputados',
        'width':750,
        'height':600,
        'is3D':true,
        'colors':[
            'rgb(219, 17, 17)',
            'rgb(20, 0, 199)',
            'rgb(0, 199, 50)',
            'purple', 'yellow',
            'rgb(231, 150, 0)',
            'rgb(228, 32, 91)',
            'green',
            'rgb(121, 197, 86)',
            'rgb(80, 248, 240)',
            'rgb(206, 226, 27)',
            'rgb(227, 240, 113)',
            'rgb(161, 24, 24)',
            'rgb(82, 186, 235)',
            'rgb(0, 177, 168)',
            'rgb(6, 97, 3)'
        ]
    };
    // Instantiate and draw our chart, passing in some options.
    var pie = new google.visualization.PieChart(document.getElementById('pie'));
    var bars = new google.visualization.BarChart(document.getElementById('bars'));
    pie.draw(data, options);
    bars.draw(data, options);
    }
}
window.addEventListener('load', main);