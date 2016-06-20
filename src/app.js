var spreadsheet = new Spreadsheet();

function get_range(sheet_name,range_value) {
  return spreadsheet.get_range(sheet_name,range_value);
};

function get_range_as_csv(sheet_name,range_value) {
  return spreadsheet.get_range(sheet_name,range_value).toString();
};

function get_range_as_text_array(sheet_name,range_value) {
  return '[' + spreadsheet.get_range(sheet_name,range_value).toString() + ']';
};

function get_range_as_array( sheet_name, range_value) {
  return spreadsheet.get_range( sheet_name, range_value ).toString().split(',');
};

function get_column( sheet_name, column_value) {
  return spreadsheet.get_column( sheet_name, column_value );
};

function get_column_as_text( sheet_name, column_value) {
  return spreadsheet.get_column( sheet_name, column_value ).toString();
};

function set_range(sheet_name,range_value,cell_data) {
  return spreadsheet.set_range(sheet_name,range_value,cell_data);
};

function search_column(sheet_name,column_value,search_value) {
  return spreadsheet.search_column(sheet_name,column_value,search_value);
};

function search_column_index(sheet_name,column_value,search_value) {
  return spreadsheet.search_column_index(sheet_name,column_value,search_value);
};

function get_tags() {
  return spreadsheet.get_tags();
};

