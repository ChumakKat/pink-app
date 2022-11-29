 $(function() {

    /* NAV Burger =================*/

  const navToggle = $('#burger-btn');
  const nav = $('#nav');
  const header = $('#header');
  const main = $('#main');

  navToggle.on("click", function(event) {
      event.preventDefault();

      if (header.hasClass('show')) { 

        header.removeClass("show-height");
        navToggle.removeClass("burger__btn-rotate");
        main.removeClass("show");

        setTimeout(function() {  
            navToggle.removeClass("burger__btn-close");
        }, 500);

        setTimeout(function() { 
            header.removeClass("show"); 
            nav.removeClass("show"); 
        }, 900);

       } else {

        navToggle.addClass("burger__btn-close");
        header.addClass("show-height");
        header.addClass("show");
        nav.addClass("show");  
        main.addClass("show");

        setTimeout(function() {  
            navToggle.addClass("burger__btn-rotate");
        }, 500);

        }

  });
 
 
  /* SLIDER =========================*/

let slider =  $('#reviewsSlider');

    slider.slick({
        infinite: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        $('#reviewsSlider').slick("slickPrev");
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        $('#reviewsSlider').slick("slickNext");
    });


let sliderTariffs =  $('#tariffsSlider');

sliderTariffs.slick({
        infinite: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



 /* MODAL =======================*/

 /* проверка заполненности полей и вывод модального окна */

    const openCall = $("[data-open]");

    openCall.on("click", function(event) {
        event.preventDefault();

        let formInput = document.querySelectorAll('.field-red');
        let $allField = 1;              /*считаем, что все поля запонены */

        formInput.forEach(function(input) {
             $(input).removeClass('input__red');
            if (input.value == '') {
                $(input).addClass('input__red');
                $allField = 0;         /* найдено не заполненое поле */
            }     
        });
        
        let $errorWindow = $('#modal_error');
        let $sendWindow = $('#modal_send');

        if ($allField === 0) {        /* если найдено незаполненое поле */
            $($errorWindow).addClass('show');
            $("body").addClass('no-scroll');
        } else {                     /* если все поля заполены */
            $($sendWindow).addClass('show');
            $("body").addClass('no-scroll');
        }

    });


    /* закрытие модального окна */

    const modalClose = $("[data-close");

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    }); 

    /* закрытие модального окна по клику вне окна, т.е. по клику по маске */
    $(".modal").on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    }); 


    /* чтобы модальное окно не закрывалось при нажатии на самомо модальном окне */
    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    }); 
        
});