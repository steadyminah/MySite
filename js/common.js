$(function(){
    var i = 0;

    $('.goTop button').click(toTop);
    function toTop(){
        $('html').animate({scrollTop: 0}, 500);
    }
});