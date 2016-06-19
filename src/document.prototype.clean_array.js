Document.prototype.clean_array = function(array_value) {

   var clean_array =  array_value.filter( function(i) {

        return i
       
   } );
   
   clean_array = clean_array.toString().replace(/\,{2,}/gi,',');
   
   //remove the last comma from the string
   clean_array = clean_array.replace(/\,$/,'');
   
   return clean_array.split(',');
   
};
