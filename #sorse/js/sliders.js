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
    navigation: {
        nextEl: '.about-main__slider .swiper-button-next',
        prevEl: '.about-main__slider .swiper-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.about-main__slider .swiper-pagination',
    },
});

var newsList = new Swiper('.news-list', {
    slidesPerView: 1,
    spaceBetween: 0,
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
        1500: {
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
        1500: {
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