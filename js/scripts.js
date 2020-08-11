$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $(".clickable-header").click(function() {
    $(".show").toggle();
    $(".hide").toggle();
  });
});