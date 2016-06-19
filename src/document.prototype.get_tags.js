Document.prototype.get_tags = function() {
  
  var values = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet()
    .getDataRange()
    .getValues();

  return document.clean_array( values );

};
