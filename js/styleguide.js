$( document ).ready(function() {
  $('.row div').not('.row').each(function(){
    var t = $(this).attr("class");
    var t = t.replace(" ", ".");
    $(this).prepend('.' + t);
  });
});