function Spreadsheet() {

  this.spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  this.name = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();



    this.set_cell = function(sheet_name,range_value,cell_data) {

    return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheet_name)
    .getRange(range_value)
    .setValue(cell_data);


  }





}








