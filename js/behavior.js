
$(function() {

  // segment boxes on home page
  $("#home .segment h2").wrapInner("<span>")
  $("#home .segment h2 br").before("<span class='spacer'>").after("<span class='spacer'>");


  // use image captions as figcaptions in blog posts
  $("img.caption").each(function() {
    var imageCaption = $(this).attr("alt");
    $(this).removeClass('caption');
    if (imageCaption != '') {
      //$(this).wrap('<figure class="inline"><figcaption>' + imageCaption + '</figcaption></figure>');
      $(this).replaceWith('<figure class="inline"><img src="' + $(this).attr("src") + '" alt="' + $(this).attr("alt") +'"><figcaption>' + imageCaption + '</figcaption></figure>');
    }
  });

});
