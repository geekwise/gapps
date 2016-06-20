Spreadsheet.prototype.search_column = function(sheet_name,column_value,search_value) {

    var sheet  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet_name);
    var column = sheet.getRange(column_value + ":" + column_value);  // like A:A

    var values = column.getValues().toString().split(',');

    values =  values.filter( function(i) {
      return i
    } );

    if(values.indexOf(search_value) > -1){
      return 'yes';
    }else{
      return 'no';
    }

};
