function main(){
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['geochart']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Pais');
    data.addColumn('number', 'Turistas');
    data.addRows([
        ['France', 86861000],
        ['Spain', 81786000],
        ['United States', 76941000],
        ['China', 60740000],
        ['Italy', 58253000],
        ['Mexico', 39291000],
        ['United Kingdom', 37651000],
        ['Turkey', 37601000],
        ['Germany', 37452000],
        ['Thailand', 35592000],
        ['Austria', 29460000],
        ['Japan', 28691000],
        ['Greece', 27194000],
        ['Malaysia', 25948000],
        ['Russia', 24390000],
        ['Canada', 20798000],
        ['Poland', 18258000],
        ['Netherlands', 17924000],
        ['Saudi Arabia', 16109000]
    ]);
    // Set chart options
    var options = {
        'title':'Los 20 países más visitados del mundo',
        'width':1500,
        'height':700
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
    }
}
window.addEventListener('load', main);