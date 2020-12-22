var mainBan = new Swiper('.main-ban', {
    loop: true,
    navigation: {
        nextEl: '.main-ban .swiper-button-next',
        prevEl: '.main-ban .swiper-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.main-ban .swiper-pagination',
    },
});
var aboutMain = new Swiper('.about-main__slider', {
    loop: false,
    spaceBetween: 5,
    navigation: {
        nextEl: '.about-main__slider .swiper-button-next',
        prevEl: '.about-main__slider .swiper-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.about-main__slider .swiper-pagination',
    },
});
var tour3d = new Swiper('.tour3d-slider', {
    loop: false,
    spaceBetween: 5,
    navigation: {
        nextEl: '.tour3d-slider .swiper-button-next',
        prevEl: '.tour3d-slider .swiper-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.tour3d-slider .swiper-pagination',
    },
});
var imageSlider = new Swiper('.images-slider', {
    loop: false,
    spaceBetween: 5,
    navigation: {
        nextEl: '.images-slider .swiper-button-next',
        prevEl: '.images-slider .swiper-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.images-slider .swiper-pagination',
    },
});



var newsList = new Swiper('.news-list.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
        clickable: true,
        el: '.news-list .swiper-pagination',
    },
    breakpoints: {
        550: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 4,
            cssMode: true,
            spaceBetween: 30,
        },
    },
});


var newsList = new Swiper('.previously-viewed .swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.previously-viewed .swiper-button-next',
        prevEl: '.previously-viewed .swiper-button-prev',
    },
    breakpoints: {
        550: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            // cssMode: true,
            spaceBetween: 30,
        },
    },
});

var comparisonSlider = new Swiper('.comparison-slider', {
    slidesPerView: 2,
    // spaceBetween: 30,
    spaceBetween: 15,
    navigation: {
        nextEl: '.comparison-slider .swiper-button-next',
        prevEl: '.comparison-slider .swiper-button-prev',
    },
    breakpoints: {
        550: {
            slidesPerView: 3,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1199: {
            spaceBetween: 0,
            slidesPerView: 4,
        },
        1499: {
            spaceBetween: 0,
            slidesPerView: 5,
            // cssMode: true,
        },
    },
});




var catalogCardSlider = new Swiper('.catalog-card__slider', {
    loop: true,
    navigation: {
        nextEl: '.catalog-card__slider .swiper-button-next',
        prevEl: '.catalog-card__slider .swiper-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.catalog-card__slider .swiper-pagination',
    },
});


var galleryThumbs = new Swiper('.card-tile__gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        550: {
            // slidesPerView: 3,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
        1499: {
            spaceBetween: 20,
        },
    },
});
var galleryTop = new Swiper('.card-tile__gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.card-tile__gallery-top .swiper-button-next',
        prevEl: '.card-tile__gallery-top .swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});



var privateGalleryThumbs = new Swiper('.private-card__gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        550: {
            // slidesPerView: 3,
        },
        750: {
            slidesPerView: 5,
        },
        950: {
            slidesPerView: 6,
        },
        1199: {
            slidesPerView: 9,
        },
        1499: {
            spaceBetween: 12,
        },
    },
});

var privateGalleryTop = new Swiper('.private-card__gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.private-card__gallery-top .swiper-button-next',
        prevEl: '.private-card__gallery-top .swiper-button-prev',
    },
    thumbs: {
        swiper: privateGalleryThumbs
    }
});