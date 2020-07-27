$(function() {

    // Custom JS

});

// SmartMenus init
$(function() {
    $('#main-menu').smartmenus({
        mainMenuSubOffsetX: -1,
        mainMenuSubOffsetY: 4,
        subMenusSubOffsetX: 6,
        subMenusSubOffsetY: -6
    });
});

// SmartMenus mobile menu toggle button
$(function() {
    var $mainMenuState = $('#main-menu-state');
    if ($mainMenuState.length) {
        // animate mobile menu
        $mainMenuState.change(function(e) {
            var $menu = $('#main-menu');
            if (this.checked) {
                $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
            } else {
                $menu.show().slideUp(250, function() { $menu.css('display', ''); });
            }
        });
        // hide mobile menu beforeunload
        $(window).bind('beforeunload unload', function() {
            if ($mainMenuState[0].checked) {
                $mainMenuState[0].click();
            }
        });
    }
});

$(".js-buy").on( "click", function() {
    var newtitle = $(this).attr("data-title");
    var newinput = $(this).attr("data-input");
    $(".js-title").html(newtitle);
    $(".js-zakaz").val(newinput);
});



$("#answer-form").submit(function(){
    $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $.fancybox.open({
            src: '#fancyalert',
        });
        $("#answer-form").trigger("reset");
    });
    return false;
});

$("#popup-form").submit(function(){
    $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        parent.jQuery.fancybox.getInstance().close();
        $.fancybox.open({
            src: '#fancyalert',
        });
        $("#popup-form").trigger("reset");
    });
    return false;
});

$(document).ready(function() {

    // $('.cmn-btn').click(function(){

    //     var findId = $(this).parent();
    //     if(findId.hasClass('main-frame__wrap-info')){
    //         $('#popup-form .form-btn').attr("onclick","gtag('event', 'formcena', { 'event_category': 'formcena', 'event_action': 'clickpt', });yaCounter60924889.reachGoal('uznatcenu1');");
    //     }

    //      if(findId.hasClass('one')){
    //         $('#popup-form .form-btn').attr("onclick","gtag('event', 'fcenadva', { 'event_category': 'fcenadva', 'event_action': 'clicksh', });yaCounter60924889.reachGoal('uznatcenu2');");
    //     }

    //       if(findId.hasClass('two')){
    //        $('#popup-form .form-btn').attr("onclick","gtag('event', 'fcenatr', { 'event_category': 'fcenatr', 'event_action': 'clicksm', });yaCounter60924889.reachGoal('uznatcenu3');");
    //     }

    //       if(findId.hasClass('three')){
    //         $('#popup-form .form-btn').attr("onclick","gtag('event', 'formstoimostdva', { 'event_category': 'formstoimostdva', 'event_action': 'clickdva', });yaCounter60924889.reachGoal('uznatcenu4');");
    //     }

    //       if(findId.hasClass('calc')){
    //         $('#popup-form .form-btn').attr("onclick","gtag('event', 'formcenapt', { 'event_category': 'formcenapt', 'event_action': 'clickvm', });yaCounter60924889.reachGoal('fposchitatcenu');");
    //     }


    //      if(findId.hasClass('stock_one')){
    //         $('#popup-form .form-btn').attr("onclick","gtag('event', 'formpodrobnee', { 'event_category': 'formpodrobnee', 'event_action': 'clicktri', });yaCounter60924889.reachGoal('fpodrobnee');");
    //     }


    //      if(findId.hasClass('stock')){
    //         $('#popup-form .form-btn').attr("onclick","gtag('event', 'formporobdva', { 'event_category': 'formporobdva', 'event_action': 'clickchet', });yaCounter60924889.reachGoal('fpodrobnee2');");
    //     }


    //     if(findId.hasClass('club__content')){
    //         $('#popup-form .form-btn').attr("onclick","gtag('event', 'formuslovia', { 'event_category': 'formuslovia', 'event_action': 'clickdv', });yaCounter60924889.reachGoal('uznatusloviya');");
    //     }

    // });

    // $('.cmn-btn').click(function(){

    //      var findId = $(this).parent();

    //      $('#popup-form').attr("onsubmit","yaCounter60924889.reachGoal('fposchitatcenu'); ga('send', 'event', 'uznatcenu6', 'poschitatcenu')");




    // });


    var length = "Не указано"; //Длина вашего участка
    var width = "Не указано"; //Ширина вашего участка
    var height = "Не указано"; //Высота слоя
    var dal = "Не указано"; //Удаленность от города Владимир
    var final_input = "";


    $("#main-form").submit(function(e){
        e.preventDefault();

        if ($('input[name=gazon-input-length-check]').prop('checked')) {
            length = "Не знаю";
        } else {
            if ($('input[name=gazon-input-length]').val() != "") {
                length = $('input[name=gazon-input-length]').val();
            } else {
                length = "Не указано";
            };
        };

        if ($('input[name=gazon-input-width-check]').prop('checked')) {
            width = "Не знаю";
        } else {
            if ($('input[name=gazon-input-width]').val() != "") {
                width = $('input[name=gazon-input-width]').val();
            } else {
                width = "Не указано";
            };
        };

        if ($('input[name=gazon-input-height-check').prop('checked')) {
            height = "Не знаю";
        } else {
            if ($('input[name=gazon-input-height]').val() != "") {
                height = $('input[name=gazon-input-height]').val();
            } else {
                height = "Не указано";
            };
        };

        if ($('input[name=input-dal]').val() != "") {
            dal = $('input[name=input-dal]').val();
        } else {
            dal = "Не указано";
        };
        $(".js-title").html("Узнать стоимость проекта");
        $(".js-zakaz").val("Длина вашего участка: " + length + "; Ширина вашего участка: " + width + "; Высота слоя: " + height + "; Удаленность от города Владимир: " + dal);
        $.fancybox.open({
            src: '#popup-form',
        });
        $("#main-form").trigger("reset");

    });
});

$(document).ready(function() {
// для плавного перехода по якорям
    $(".yakor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -80;
        $('body,html').animate({scrollTop: top}, 500);
    });
// для формы расчета
    $( "#select-first" ).trigger( "click" );
    var removeAllActive = function (event) {
        $('.select-btn').removeClass('select-btn-active');
    }
    $('.select-btn').on('click', function() {
        removeAllActive();
        $(this).addClass('select-btn-active');
        var formDepth = $(this).attr("data-depth");
        $(".js-depth").val(formDepth);
    });

});

$(window).ready(closeMenu);
$(window).resize(closeMenu);
function closeMenu()
{
    if ( $(window).width() < 992 ) {
        $(".yakor").on("click", function (event) {
            setTimeout(function(){
                $("#main-menu-state").prop('checked', false).change();
            }, 600);
        });
    }
}
//Reviews Slider
var reviewsSlider = new Swiper ('.reviews__slider_container', {
    slideClass: 'reviews__slide',
    wrapperClass: 'reviews__slider_wrapper',
    slidesPerView: 2,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});