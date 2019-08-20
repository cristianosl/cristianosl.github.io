$('a[href^="#"]').on("click", function(event) {
  var target = $($(this).attr("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 100
      },
      500
    );
    $(".menu").collapse('hide');
  }
});