$(document).ready(function () {
    let menuButton = document.querySelector('.header__menu');
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('menu-active');
    });

    $('.short__quest-title span').eq(0).addClass('active').fadeIn(1000);

    setInterval(blockAnimate, 5000);

    function blockAnimate() {
        var length = $('.short__quest-title span').length - 1;
        $('.short__quest-title span').each(function(index) {
            if($(this).hasClass('active') && index != length) {
                $(this).removeClass('active').fadeOut(1000).next('span').addClass('active').delay(1000).fadeIn(1000);
                return false;
            } else if (index == length) {
                $(this).removeClass('active').fadeOut(1000);
                $('.short__quest-title span').eq(0).addClass('active').delay(1000).fadeIn(1000);
                return false;
            }
        });
    }

    const reviewsSlider = new Swiper('.reviews__container', {
        loop: true,
        slidesPerView: 1,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const btnUp = document.querySelector('.footer__up');

    btnUp.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })

    $('.f-modal__input').inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false,
        placeholder: '  ',
    });

    $.fancybox.defaults.animationEffect = 'fade';
    $.fancybox.defaults.touch = false;

    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
        // добавим больше данных
        console.log('holdReady');
    }
    console.log($('.reviews__slide').offset());

    window.addEventListener('scroll', function() {
        console.log('scroll');
        if ($('.reviews__slide').offset().top < window.pageYOffset) {

        }
    })

});
