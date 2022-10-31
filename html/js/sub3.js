$(function(){
    //box
    var i = 0;
    $('.experience article').on('click', openbox);

    function openbox(){
        i = $(this).attr('class'); //a1, a2, a3
        //console.log(i)
        $('.blackBg').fadeIn();
        $('.blackBg .'+i+' .image').fadeIn();
    }
    $('html').click(function(e){
        if($(e.target).hasClass("area")){
            $('.blackBg').fadeOut();
            $('.blackBg .slide .image').fadeOut();
        }
    });

    //button
    $('.blackBg .btNext').on('click', nextBtn);
    function nextBtn(){
		$('.blackBg .'+i+' .image').first().fadeOut(0, function(){
			$(this).appendTo('.blackBg .' + i).fadeIn(100);
		});
    }
    $('.blackBg .btPrev').on('click', prevBtn);
    function prevBtn(){
		$('.blackBg .'+i+' .image').last().fadeOut(0, function(){
			$(this).prependTo('.blackBg .' + i).fadeIn(100);
		});
    }
});