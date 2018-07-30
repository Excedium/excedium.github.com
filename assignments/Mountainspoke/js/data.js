/* The function */

function json2table(json, classes) {
  var cols = Object.keys(json[0]);
  
  var headerRow = '';
  var bodyRows = '';
  
  classes = classes || '';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  cols.map(function(col) {
    headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
  });

  json.map(function(row) {
    bodyRows += '<tr>';

    cols.map(function(colName) {
      bodyRows += '<td>' + row[colName] + '</td>';
    })

    bodyRows += '</tr>';
  });

  return '<table class="' +
         classes +
         '"><thead><tr>' +
         headerRow +
         '</tr></thead><tbody>' +
         bodyRows +
         '</tbody></table>';
}

/* How to use it */

var defaultData = [
  { service: 'Full Tune Up',         price: 55 },
  { service: 'Deluxe Tune Up',         price: 95 },
  { service: 'Ultimate Service', price:  165 },
  { service: 'Complete Overhaul',     price:  265 },
  
];

document.getElementById('tableGoesHere').innerHTML = json2table(defaultData, 'table');

/* Live example */

var dom = {
  data: document.getElementById('data'),
  table: document.getElementById('tableGoesHere'),
};

dom.data.value = JSON.stringify(defaultData);
dom.data.addEventListener('input', function() {
  dom.table.innerHTML = json2table(JSON.parse(dom.data.value), 'table');
});