Spreadsheet.prototype.set_range = function(sheet_name,range_value,cell_data) {

    return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheet_name)
    .getRange(range_value)
    .setValues([

      cell_data

    ]);

};
