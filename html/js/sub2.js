$(function(){
    var i = 0;
    $('.artGroup article:last').prependTo('.artGroup');
    $('.artGroup').css({marginLeft: '-40%'});


    $('.btNext').click(function(){
        $('.artGroup').stop().animate({marginLeft: '-80%'}, function(){
            $('.artGroup article:first').appendTo('.artGroup');
            $('.artGroup').css({marginLeft: '-40%'});
        });
        i = (i+1)%4;
        $('.scrollBar').stop().animate({marginLeft: 25*i+'%'}, 'swing');
    });

    $('.btPrev').click(function(){
        $('.artGroup').stop().animate({marginLeft: 0}, function(){
            $('.artGroup article:last').prependTo('.artGroup');
            $('.artGroup').css({marginLeft: '-40%'});
        });
        i = (i+3)%4;
        $('.scrollBar').stop().animate({marginLeft: 25*i+'%'}, 'swing');
    });

    var delta = 0,
        scrollEvt = false;

    $(window).on('mousewheel', function(evt){
        delta = evt.originalEvent.wheelDelta;
        console.log(delta);
        
        if(delta < 0 && scrollEvt == false){
            scrollEvt = true;
            $('.artGroup').stop().animate({marginLeft: '-80%'}, function(){
                $('.artGroup article:first').appendTo('.artGroup');
                $('.artGroup').css({marginLeft: '-40%'});
                scrollEvt = false;
            });
            i = (i+1)%4;
            $('.scrollBar').stop().animate({marginLeft: 25*i+'%'}, 'swing');
        }else if(delta > 0 && scrollEvt == false){
            scrollEvt = true;
            $('.artGroup').stop().animate({marginLeft: 0}, function(){
                $('.artGroup article:last').prependTo('.artGroup');
                $('.artGroup').css({marginLeft: '-40%'});
                scrollEvt = false;
            });
            i = (i+3)%4;
            $('.scrollBar').stop().animate({marginLeft: 25*i+'%'}, 'swing');
        }
    });
});