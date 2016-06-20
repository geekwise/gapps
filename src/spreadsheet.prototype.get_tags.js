Spreadsheet.prototype.get_tags = function() {

  var values = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet()
    .getDataRange()
    .getValues();

  return spreadsheet.clean_array( values );

};
