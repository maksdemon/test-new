$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/symbol/1.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/symbol/2.png"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false
            }
        }         
        ]
    });
  });
          