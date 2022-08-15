$(document).ready(function(){
    $('.carousel__inner').slick({
       speed: 1200,
       autoplay: true,
       autoplaySpeed: 2000,
       prevArrow:'<button type="button" class="slick-prev"><img src="../img/carousel/chevron-left-solid.png"></button>',
       nextArrow:'<button type="button" class="slick-next"><img src="../img/carousel/chevron-right-solid.png"></button>'
    });
  });