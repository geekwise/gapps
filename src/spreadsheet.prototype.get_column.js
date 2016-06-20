Spreadsheet.prototype.get_column = function(sheet_name,column_value) {

    return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheet_name)
    .getRange(column_value + ':' + column_value)
    .getValues();


};
