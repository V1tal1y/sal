$(function() {
    $.fn.hasAttr = function(name) {
        return this.attr(name) !== undefined;
    };

    $('.nav-mobile__title').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).parents('ul').find('.nav-mobile__title.active').removeClass('active').next().slideUp();
            $(this).addClass('active').next().slideDown();
        } else {
            $(this).removeClass('active').next().slideUp();
        }
    });

    $('.nav-mobile__second a').click(function() {
        console.log($(this).hasAttr('data-id'))
        if ($(this).hasAttr('data-id')) {
            let navId = '#' + $(this).attr('data-id');
            $(this).parents('.navs').addClass('nav-s-active').find('.nav-third-menu').hide(0)
            $(navId).show(0);
            return false;
        }
    });
    $('.nav-third-menu__title').click(function() {
        $(this).parents('.nav-third-menu').hide(0).parents('.navs').removeClass('nav-s-active')
    });

    $('.burger').click(function() {
        $(this).toggleClass('active')
        $('.nav-mobile').slideToggle('slow')
    });

    $('.show-all-cards').click(function() {
        let txt = $(this).text().trim();
        txt == 'Показать все' ? txt = 'Скрыть' : txt = 'Показать все'
        $(this).text(txt).prev().toggleClass('show-all')
    });

    $('.tabs__title').click(function() {
        if (!$(this).hasClass('active')) {
            let numTab = $(this).index();
            $(this).parent().find('.active').removeClass('active').parents('.tabs').find('.tabs__item.active').removeClass('active').parent().find('.tabs__item').eq(numTab).addClass('active');
            $(this).addClass('active');
        }
    });

    $('.footer__item h3').click(function() {
        $(this).parent().toggleClass('active');
    });


    // filter and sorts
    $('.show-all-filter a').click(function() {
        $(this).slideToggle('slow').parents('.filter__list').find('.filter__hide').slideToggle('slow');
        return false;
    });

    $('.show-filter').click(function() {
        $('.filter').slideToggle('slow');
        return false;
    });

    $('.sorting__types .active').click(function() {
        if($(window).width() < 451){
            $(this).parent().toggleClass('active');
            return false;
        }
        
    });

    $('.btn-all-tags').click(function() {
        var txt = $(this).text().trim()
        txt == 'показать еще' ? txt = 'скрыть' : txt = 'показать еще'
        $(this).text(txt).toggleClass('active').parent().toggleClass('active');
        return false;
    });

    function fillterFind(topPos){
        $('.filter__quantity').css('top', topPos+'px').show(0)
    }
    
    $('.filter__list input').change(function(e) {
        topPos = $(this).parents('.filter__label').offset().top - $(this).parents('.filter').offset().top
        fillterFind(topPos)
    });
    
    $('.filter__price input').change(function(e) {
        topPos = $(this).parents('.filter__item').offset().top - $(this).parents('.filter').offset().top
        fillterFind(topPos)
    });
    
    
    $('.filter__title').click(function() {
        if($(window).width() < 951){
            $(this).parent().toggleClass('active-item')
            $(this).next().slideToggle('active');
        }
    });
    $('.card-characteristics .btn').click(function() {
        btnTxt = $(this).text()
        btnTxt == 'Развернуть все характеристики' ? btnTxt = 'Свернуть характеристики' : btnTxt = 'Развернуть все характеристики'
        $(this).text(btnTxt).parent().toggleClass('active')
    });
    
    // filter end

    $('.counter__btn').click(function() {
        var inp = $(this).parent().find('input')
        var valInp = Number(inp.val())
        if($(this).hasClass('plus')){
            valInp++;
        }
        else {
            if (valInp > 1){
                valInp--;
            }
        }
        inp.val(valInp);
    });



    $(document).mouseup(function (e){ 
		var div = $(".filter label, .filter__price"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
			div.parents('.filter').find('.filter__quantity').hide(); 
		}
	});

    // @prepros-append sliders.js
    // @prepros-append forms.js
});



/*
    $("input[name=phone]").mask("+7 (999) 999-99-99");

    var  wheihht=96;
    $(window).scroll(function(){
        var bo = $(this).scrollTop();
        if ( bo >= wheihht) {$('nav').addClass('scr_nav')};
            if ( bo < wheihht) {$('nav').removeClass('scr_nav')};
    })
    $("nav li a").click(function(){
        var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top-20}, 1300);
            return false;
    }); 

*/