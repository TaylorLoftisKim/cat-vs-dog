$(document).ready(function(){
  $("button#cat").click(function(){
    $("ul#cat-greeting").prepend("<li>Meow</li>");
    $("ul#dog-greeting").prepend("<li>Bark</li>");
  });
  $("button#dog").click(function(){
    $("ul#dog-greeting").prepend("<li>Wooof</li>");
    $("ul#cat-greeting").prepend("<li>Prrrr</li>");
  });
  $(".clickable").click(function(){
    $(".initially-hidden").show("<img src=img/goat-stare.jpg>");
    $(".initially-hidden").click(function(){
      $(this).remove();
    });
  });
});
