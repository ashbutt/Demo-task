$(document).ready(function(){
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 52) {
       $('body').addClass('sticky');
    }
    else {
       $('body').removeClass('sticky');
    }

});

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
