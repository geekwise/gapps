Document.prototype.get_range = function(sheet_name,range_value) {
  
    return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheet_name)
    .getRange(range_value)
    .getValues();

  };
