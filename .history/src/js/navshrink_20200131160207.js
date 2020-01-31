$(window).scroll(function(){
    if($d(ocument).scrollTop() > 50){
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
})