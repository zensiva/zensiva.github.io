(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X','auto');ga('send','pageview');
$(document).ready(function(){

    $(".service").click(function(){
        console.log('clicked');
        $('.service').removeClass('hovered').removeClass('unhovered').not(this).addClass('closed');
        $(this).addClass('opened');
        $(this).find('.service-details').show();
        $(this).find('.service-header').hide();
    });
    $(".service .back-arrow").click(function(e){
        $(".service").removeClass('opened').removeClass('closed');
        $(".service-details").hide();
        $(".service-header").show();
        e.stopPropagation();
    });
});
