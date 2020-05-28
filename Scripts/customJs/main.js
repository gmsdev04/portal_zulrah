//Slicker configuration
$(document).ready(function () {
    $('.customer-logos').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

// Máscara do formulário
$(function () {
    $("#ddd").mask('00');

    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 9 ? '00000-0000' : '0000-00009';
    },
        options = {
            onKeyPress: function (val, e, field, options) {
                field.mask(behavior.apply({}, arguments), options);
            }
        };

    $('#telefone').mask(behavior, options);
});

$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});

//SUAVIZA IDA PARA O SOBRE
$("#goToSobre").click(function () {
    $('html, body').animate({
        scrollTop: $("#sobre").offset().top
    }, 600);
});


//SUAVIZA IDA PARA O SERVICOS
$("#goToServicos").click(function () {
    $('html, body').animate({
        scrollTop: $("#servicos").offset().top
    }, 600);
});


//SUAVIZA IDA PARA O HOME
$("#goToHome").click(function () {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 600);
});

//SUAVIZA IDA PARA OS CLIENTES
$("#goToClientes").click(function () {
    $('html, body').animate({
        scrollTop: $("#clientes").offset().top
    }, 600);
});

//SUAVIZA IDA PARA A SOLICITAÇÃO DE CONTATO
$("#goToContato").click(function () {
    $('html, body').animate({
        scrollTop: $("#contato").offset().top
    }, 600);
});

//$(window).scroll(function () {
//    for (var i = 0; i < 2; i++) {
//        $(".PulseEffect")
//            .animate({ fontSize: "18px" }, 1000)
//            .animate({ fontSize: "19px" }, 1000);
//    }
//});
