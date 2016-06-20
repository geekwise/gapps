Spreadsheet.prototype.sheet = function(sheet_name) {
  return this.spreadsheet.getSheetByName(sheet_name);
};


Spreadsheet.prototype.get_sheet = function(sheet_name) {

  return this.spreadsheet.getSheetByName(sheet_name).activate();

};



