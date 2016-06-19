function get_range(sheet_name,range_value) {
  return document.get_range(sheet_name,range_value);
};
function get_range_as_csv(sheet_name,range_value) {
  return document.get_range(sheet_name,range_value).toString();
};
function get_range_as_text_array(sheet_name,range_value) {
  return '[' + document.get_range(sheet_name,range_value).toString() + ']';
};
function get_range_as_array( sheet_name, range_value) {
  return document.get_range( sheet_name, range_value ).toString().split(',');
};

function get_column( sheet_name, column_value) {
  return document.get_column( sheet_name, column_value );
};

function get_column_as_text( sheet_name, column_value) {
  return document.get_column( sheet_name, column_value ).toString();
}




/**
 * Search Range -- custom comment. 
 * @param value The value to find.
 * @param range The range to search in.
 * @return A range pointing to the first cell containing the value, 
 *     or null if not found.
 */
function set_range(sheet_name,range_value,cell_data) {
  return document.set_range(sheet_name,range_value,cell_data);
};

/**
 * Finds a value within a given range. 
 * @param value The value to find.
 * @param range The range to search in.
 * @return A range pointing to the first cell containing the value, 
 *     or null if not found.
 */
function search_column(sheet_name,column_value,search_value) {
  return document.search_column(sheet_name,column_value,search_value);
};

function search_column_index(sheet_name,column_value,search_value) {
  return document.search_column_index(sheet_name,column_value,search_value);
};

function get_tags() {
  return document.get_tags();
};
