
//  G O O G L E   B O O K S   A P I   C A L L
//  =========================================

var body = document.body;

$(document).ready(function() {
  $.ajax(ajaxArgument);
});

var ajaxArgument = {
  type: 'get',
  url: 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse',
  dataType: 'json',
  success: function(bookInfo) {
    console.log(bookInfo);
    return bookInfo  },
  error: function(error) {
    console.log(error);
  }
}
