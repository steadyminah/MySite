$(function(){
    var i = 0;

    //ct2 section draggable
    $('.ct2 .circle:first').draggable({
        containment: '.ct2 .artGroup', /* 'parent' */
        cursor: 'grabbing'
    });
    

    //ct6 article
    $('.ct6 .events ol li').click(ct2ImgClick);
    function ct2ImgClick(){
        i =  $(this).index();
        console.log(i);
      
        $('.ct6 .events li a').removeClass('selected');
        $('.ct6 .events li a').eq(i).addClass('selected');
        
        $('.ct6 .events-content ol').stop().animate({marginLeft : -100*i+'%'}, 700);
    };


    //landing image hiding
    var $page = $('.landing'),
        pageHeight = $page.outerHeight();

    $(window).on('resize', function(){
        pageHeight = $page.outerHeight()
        console.log(pageHeight);
    });

    $(window).on('scroll', function(){
        var scrolltop = $('html').scrollTop();
        console.log(scrolltop);
        if(scrolltop > 250){
            $page.fadeOut(1000);
        }else if(scrolltop < 500){
            $page.fadeIn(800);
        }
    });

    //popup
    setTimeout(function(){
        $('.popup').fadeOut(700);
    }, 5000);

    $('.popup .close').click(function(){
        $('.popup').fadeOut(700);
    });
});
   