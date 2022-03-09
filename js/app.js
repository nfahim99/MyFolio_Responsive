$(function() {
    $(window).on('scroll' , function(){
        if($(window).scrollTop() > $('#nav').height()) {
            $('#nav').addClass('menu_animate')
        }else{
            $('#nav').removeClass('menu_animate');
        }
    })

    $(window).on('scroll',function() {
        if($(window).scrollTop()>400) {
            $('#backtotop').fadeIn(1000);
        }else{$('#backtotop').fadeOut(1000);}
})

$('#backtotop').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        },1000)
})
})