Document.prototype.sheet = function(sheet_name) {
  return this.document.getSheetByName(sheet_name);
};


Document.prototype.get_sheet = function(sheet_name) {
  
  return this.document.getSheetByName(sheet_name).activate();
  
};



