$(document).ready(function(){  
    $(".owl-carousel").owlCarousel({
        margin:10,
        responsiveClass: true,
        responsive:
        {
            0:{
                items:1
            },
            680:{
                items:2
            },
            960:{
                items:3
            },
            
        }
    });
});