function read_data() {

  var sheet = document.sheet('display');
  var data = document.get_range('display','a2:d2');
  var array = data.toString().split(',');
  
  
  document.set_range(
    'display',
    'a10:d10',
    array
  )

    
};