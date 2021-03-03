$(document).ready(function () {
    let menuButton = document.querySelector('.header__menu');
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    let menuLinks = document.querySelectorAll('.menu__link')

    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('menu-active');
    });

    menuLinks.forEach(e => {
        e.addEventListener('click', function() {
            menuButton.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('menu-active');
        })
    })

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


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            576: {
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }

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

    let setModalShow = false;

    window.addEventListener('scroll', function() {
        if (($('.reviews__slide').offset().top < window.pageYOffset) && !setModalShow) {
            setTimeout(function() {
                document.querySelector('.link-modal-email').click();
                setModalShow = true;
            }, 5000)

        }
    })

    if (window.matchMedia('(max-width: 576px)').matches) {
        let listHeaders = document.querySelectorAll('.list__header');

        listHeaders.forEach((e) => {
            e.addEventListener('click', function() {
                let nextItem = e.nextElementSibling;


                if (!nextItem.classList.contains('active')) {
                    nextItem.style.height = `${nextItem.scrollHeight}px`
                    nextItem.classList.toggle('active')
                    e.classList.toggle('active')
                } else {
                    nextItem.style.height = `0`
                    nextItem.classList.toggle('active')
                    e.classList.toggle('active')
                }
            })
        })
    }

    if (document.querySelector('.section__more') && window.matchMedia('(max-width: 576px)').matches) {
        let moreBtns = document.querySelectorAll('.section__more');

        moreBtns.forEach(e => {
            e.addEventListener('click', function() {
                const prevItem = e.previousElementSibling;

                prevItem.classList.add('active')
                prevItem.style.height = prevItem.scrollHeight + 'px'
                e.style.opacity = 0
                e.style.pointerEvents = 'none'
            })
        })


    }

});
