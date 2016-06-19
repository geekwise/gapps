Document.prototype.search_column_index = function(sheet_name,column_value,search_value) {
        
  var sheet  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet_name);
  var column = sheet.getRange(column_value + ":" + column_value);  // like A:A
  
  var values = column.getValues().toString().split(',');
                
  values =  values.filter( function(i) {
      return i
  } );
  
  
  var values = column.getValues(); 
  var row = 0;
  
  while ( values[row] && values[row][0] !== search_value ) {
    row++;
  }
  
  var cell_index;
  
  
  try {
     
          if (values[row][0] === search_value) {
            cell_index = row+1; 
          }else {
            cell_index = -1;
          } 
  
  }catch(error) {
    
    cell_index =  'none';
    
  };
  
    if(cell_index > 0) {
        return column_value + cell_index;
    }else{
      return cell_index;
    }


};
