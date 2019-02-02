$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 400) {
        $('#dekoracija').fadeIn();
    } else {
        $('#dekoracija').fadeOut();
    }
    var y = $(this).scrollTop();
    if (y > 1000) {
        $('#dekoracija2').fadeIn();
    } else {
        $('#dekoracija2').fadeOut();
    }
    var y = $(this).scrollTop();
    if (y > 1600) {
        $('#dekoracija3').fadeIn();
    } else {
        $('#dekoracija3').fadeOut();
    }


});
$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});


function scrollWin(){
    window.scrollTo({
        top: 850,
        behavior: "smooth",
    });
}