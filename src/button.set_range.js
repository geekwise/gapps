function button_set_range() {
    
    var sheet_name = get_range('script_values','c2');
    var range_value = get_range('script_values','d2');
    var cell_data = get_range('script_values','e2').toString().split(',');
    
    set_range(sheet_name,range_value,cell_data);
    
}