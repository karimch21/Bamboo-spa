
$(function () {
    // swiper in fancybox
    let modalSwiper = document.querySelectorAll('.modal__swiper-container');
    let mores = document.querySelectorAll('.varieties-detailed');

    for (let i = 0; i < modalSwiper.length; i++) {
        swipFunc(i);
    }

    function swipFunc(i) {
        mores[i].onclick = function (e) {

            e.preventDefault();

            $.fancybox.open({
                src: `.modal-${i + 1}`,
                type: 'inline',
                opts: {
                    toolbar: false,
                    defaultType: 'inline',
                    autoFocus: true,
                    touch: false,
                    afterLoad: function () {

                        var mySwiper = new Swiper(modalSwiper[i], {
                            slidesPerView: 3,
                            loop: true,
                            spaceBetween: 20,
                            pagination: {
                                el: '.modal__swiper-pagination',
                                type: 'fraction',
                            },
                            navigation: {
                                nextEl: '.modal__btn-next',
                                prevEl: '.modal__btn-prev',
                            },
                            breakpoints: {
                                320: {
                                    slidesPerView: 1,
                                    loop: true,
                                    spaceBetween: 20,
                                },
                                721: {
                                    slidesPerView: 2,
                                    loop: true,
                                    spaceBetween: 20,
                                },
                                1101: {
                                    slidesPerView: 3,
                                    loop: true,
                                    spaceBetween: 20,
                                },
                            }
                        })
                    }
                }
            })
        }
    }
    // swiper in fancybox

    //tab
    $('.registration-wrapper .registration__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.registration-wrapper').find('.registration-item').removeClass('active-tab').hide();
        $('.registration__tab').removeClass('registration__tab--active');
        if ($(this).hasClass('registration__tab-right')) {
            $('.registration__tab-right').addClass('registration__tab--active');
        } else {
            $('.registration__tab-left').addClass('registration__tab--active');
        }
        $('#' + id).addClass('registration-item--active').fadeIn();
        return false;
    });
    //tab

    $('select').styler();
});

//menu
const wrapBurger = document.querySelector('.menu-wrap'),
    burger = wrapBurger.querySelector('.menu-burger'),
    burgerClose = wrapBurger.querySelector('.menu-close');

burger.addEventListener('click', function () {
    wrapBurger.querySelector('.navigation-wrap').classList.add('active');
});
burgerClose.addEventListener('click', function () {
    wrapBurger.querySelector('.navigation-wrap').classList.remove('active');
});
//menu

//btn for increase and decrease
let btnCounterIncrease = document.querySelector('.registration__counter-more');
let btnCounterLess = document.querySelector('.registration__counter-less');
let inputForResultCounter = document.querySelector('.registration__counter-inp');

function changeValueInputForResultCounter(selector, fn) {
    if (selector) {
        selector.addEventListener('click', fn);
    }
}

function increaseValueInputForCounter(e) {
    e.preventDefault(); +
        inputForResultCounter.value++;
}

function decreaseValueInputForCounter(e) {
    e.preventDefault();
    if (Number(inputForResultCounter.value)) {
        +inputForResultCounter.value--;
    }
}

changeValueInputForResultCounter(btnCounterIncrease, increaseValueInputForCounter);
changeValueInputForResultCounter(btnCounterLess, decreaseValueInputForCounter);
//btn for increase and decrease

// rotate 3d card
let cards3DPush = document.querySelectorAll('.review-swiper__slide');

function rotate3DCard(selectorCard) {
    for (let i = 0; i < selectorCard.length; i++) {
        selectorCard[i].addEventListener('click', function () {
            selectorCard[i].classList.toggle('review-swiper__slide--active')
        })
    }
}
rotate3DCard(cards3DPush);
// rotate 3d card

//accordion
let btnsTitle = document.querySelectorAll('.spoiler-block__inner');

btnsTitle.forEach(function (itemBtn) {
    let contentBlock = itemBtn.nextElementSibling;

    itemBtn.addEventListener('click', function () {
        if (contentBlock.classList.contains('spoiler-content--active')) {
            contentHide()
        } else {
            contentHide()
            contentBlock.classList.add('spoiler-content--active')
            itemBtn.classList.add('spoiler-block__inner--active')
            showContent()
        }

    })

    function contentHide() {
        let btnTitleAll = document.querySelectorAll('.spoiler-block__inner');
        let contentAll = document.querySelectorAll('.spoiler-content');

        for (let el of btnTitleAll) {
            el.classList.remove('spoiler-block__inner--active')
        }

        for (let el of contentAll) {
            el.style.height = 0;
            el.classList.remove('spoiler-content--active');
        }

    }

    function showContent() {
        contentBlock.style.height = contentBlock.scrollHeight + 'px';
    }
})
//accordion

//slider
const advantagesSwiper = document.querySelector('.advantages__swiper-container'),
    gallerySwiper = document.querySelector('.gallery__swiper-container'),
    reviewSwiper = document.querySelector('.review-swiper__container');

var swiper = new Swiper(gallerySwiper, {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 35,
    centeredSlides: true,
    pagination: {
        el: '.gallery__swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallery__swiper-next',
        prevEl: '.gallery__swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
        },
        400: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
        },
        1010: {
            slidesPerView: 1,
            centeredSlides: false,
        },
        1231: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1232: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 35,
            centeredSlides: true,
        }
    }
});

var swiper = new Swiper(reviewSwiper, {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 100,
    pagination: {
        el: '.review__swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.review__btn-next',
        prevEl: '.review__btn-prev',
    },
    breakpoints: {
        320: {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 20,
            allowTouchMove: false,
            pagination: {
                el: '.review__swiper-pagination',
                type: 'fraction',
            },
            spaceBetween: 50,
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1201: {
            slidesPerView: 1,
            allowTouchMove: true,
        },
        1565: {
            loop: true,
            centeredSlides: false,
            slidesPerView: 1,
            pagination: {
                el: '.review__swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        }
    }
});

sliderAdaptive(768, [
    '.advantages__swiper-container',
    {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.advantages__swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.advantages__btn-next',
            prevEl: '.advantages__btn-prev',
        },
    }
]);

function sliderAdaptive(breakpoint, sliderSettings) {
    let slider;
    let sliderIsEnabled = false;

    document.addEventListener('DOMContentLoaded', adaptiveFunction);

    window.addEventListener('resize', adaptiveFunction);

    function adaptiveFunction() {
        const windowWidth = document.documentElement.clientWidth;

        if (windowWidth <= breakpoint && !sliderIsEnabled) {
            slider = new Swiper(sliderSettings[0], sliderSettings[1]);
            sliderIsEnabled = true;
        } else if (windowWidth > breakpoint && sliderIsEnabled) {
            slider.destroy();
            sliderIsEnabled = false;
        }
    }
}
//slider

//Validate Form
const allForm = document.querySelectorAll('.form');
const inputForIphone = document.querySelectorAll('input[type="tel"]');
const inputsWithRegExpPatternForNumber = document.querySelectorAll(".forRegexp");
const inputsWithRegExpPatternForText = document.querySelectorAll('.inp-text');

function iterationInputForARegExpPattern(inputs, fn) {
    for (let el of inputs) {
        el.onpaste = (e) => e.preventDefault();
        el.addEventListener("keyup", fn);
    }
}

function validateInputForNumber(e) {
    if (e.keyCode !== 8 && e.keyCode != 46) {
        let newValue = e.target.value.replace(/\D/g, "");
        newValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        e.target.value = newValue;
    }
}

function validateInputForText(e) {
    if (e.keyCode !== 8 && e.keyCode != 46) {
        let newValue = e.target.value.replace(/\w/g, "");
        e.target.value = newValue;
    }
}

function maskForInputForIphone(selector, regExp) {
    for (let el of selector) {
        var maskForInput = new Inputmask(regExp);
        maskForInput.mask(el);
    }
}

function validateForm(form) {
    new JustValidate(form, {
        rules: {
            fullname: {
                required: true,
            },
            tel: {
                required: true,
            },

        },
    });
}

function formIteration() {
    for (let i = 0; i < allForm.length; i++) {
        validateForm(`.form-${i + 1}`)
    }
}

iterationInputForARegExpPattern(inputsWithRegExpPatternForNumber, validateInputForNumber);
iterationInputForARegExpPattern(inputsWithRegExpPatternForText, validateInputForText);
maskForInputForIphone(inputForIphone, "+7 999-999-99-99");
formIteration();
//Validate Form



