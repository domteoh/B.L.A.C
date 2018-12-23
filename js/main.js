$(document).ready(() => {

$('.button').on('click', () => {
    setTimeout(function(){
            window.open("./between.html", "_self")}, 80)
});

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1mlGP8UYet-DizNaPSIE_91qNx1PXmnTJg1ODR27ZXl8&output=html&usp=sharing');
    query.setQuery('SELECT B');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);

});
