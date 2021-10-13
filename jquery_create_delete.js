$.put = function(url, data, callback, type){
 
    if ( $.isFunction(data) ){
      type = type || callback,
      callback = data,
      data = {}
    }
   
    return $.ajax({
      url: url,
      type: 'PUT',
      success: callback,
      data: data,
      contentType: type
    });
  }

  $.delete = function(url, data, callback, type){
 
    if ( $.isFunction(data) ){
      type = type || callback,
          callback = data,
          data = {}
    }
   
    return $.ajax({
      url: url,
      type: 'DELETE',
      success: callback,
      data: data,
      contentType: type
    });
  }

  $.ajax({
    url: '/script.cgi',
    type: 'CREATE',
    success: function(result) {
        // Do something with the result
    }
});