$(document).ready(function(){
    $('.carousel__inner').slick({
       speed: 1200,
       autoplay: true,
       autoplaySpeed: 2000,
       prevArrow:'<button type="button" class="slick-prev"><img src="../img/carousel/chevron-left-solid.png"></button>',
       nextArrow:'<button type="button" class="slick-next"><img src="../img/carousel/chevron-right-solid.png"></button>'


    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active ')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    
    // $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    // $('.catalog-item__back').each(function(i) {
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    function toggler(item){
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggler('.catalog-item__link');
    toggler('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function(){
         $('.overlay, #consultation').fadeIn()
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #oreder, #thanks').fadeOut()
   });



   $('.button_catalog').each(function(i){
    $(this).on('click', function(){
        $('.modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        $('.overlay, #order').fadeIn()
    })
   })
// Validation of forms

   function validateForms(form){
    $(form).validate({
        rules:{
            name: {
                required: true,
                minlength: 2
            },
            phone: 'required',
            email: {
                required:true,
                email: true,
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Имя должно содержать хотя бы {0} символа!")
              },
            phone: 'Пожалуйста, введите свой номер телефона',
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Ваш e-mail должен соответствовать name@domain.com"
            }
        }  
   });
   }
   validateForms('#consultation-form');
   validateForms('#consultation form');
   validateForms('#order form');

   //maskedInput

   $('input[name=phone').mask("+38 (999) 999-99-99");
   
   //mailer
   $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});
});