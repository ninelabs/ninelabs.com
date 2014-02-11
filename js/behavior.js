// behavior.js

$(document).ready(function(){

  $('.go').click(function(e){
    e.preventDefault();
    $(document.body).animate({
      'scrollTop': $($(this).attr('href')).offset().top
    }, 1000);
  });

});