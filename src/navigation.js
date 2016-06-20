function read_data() {

  var sheet = spreadsheet.sheet('display');
  var data = spreadsheet.get_range('display','a2:d2');
  var array = data.toString().split(',');


  spreadsheet.set_range(
    'display',
    'a10:d10',
    array
  )


};
