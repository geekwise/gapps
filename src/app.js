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
 * Set Range requires - sheet_name,range_value,cell_data
 * 
 * @param {object} sheet_name
 * @param {object} range_value
 * @param {object} cell_data
 * @set_range
 */
function set_range(sheet_name,range_value,cell_data) {
  return document.set_range(sheet_name,range_value,cell_data);
};

/**
 * Search Column requires - sheet_name,column_value,search_value
 * @license
 * @preserve
 * 
 * @param {object} sheet_name
 * @param {object} column_value
 * @param {object} search_value
 * @search_column
 */
function search_column(sheet_name,column_value,search_value) {
  return document.search_column(sheet_name,column_value,search_value);
};

function search_column_index(sheet_name,column_value,search_value) {
  return document.search_column_index(sheet_name,column_value,search_value);
};

