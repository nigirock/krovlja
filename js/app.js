$(document).ready(function () {
    $(".popup").magnificPopup();

    var circle = $(".circle");
     circle.waypoint(function(dir) {
      $(".circle").each(function() {
        var ths = $(this);
        ths.addClass("animated fadeInUp");
      });
     }, {
      offset : "50%"
     });

    var form = $(".form_animate");
    form.waypoint(function(dir){
        if(dir == 'down'){
            form.addClass('animate_visible');
            form.addClass('animated fadeInLeft')
        }
    },{
       offset:'80%'
    });

    var form2 = $(".block_form2");
    form2.waypoint(function(dir) {
        $(".block_form2").each(function() {
            var ths = $(this);
            ths.removeClass('animate_hidden');
            ths.addClass('animate_visible');
            ths.addClass("animated bounceInUp");
        });
    }, {
        offset : "50%"
    });
    var form3 = $(".block_form3");
    form3.waypoint(function(dir) {
        $(".block_form3").each(function() {
            var ths = $(this);
            ths.removeClass('animate_hidden');
            ths.addClass('animate_visible');
            ths.addClass("animated bounceInLeft");
        });
    }, {
        offset : "60%"
    });


    var leftBlock = $('.little_block');
    leftBlock.waypoint(function(dir){
        if(dir == 'down') {
            leftBlock.removeClass('animate_hidden');
            leftBlock.addClass('animate_visible');
            leftBlock.addClass('animated bounceInLeft')
            }
    },{
        offset: '50%'
    });

    var kac = $(".kac_little_block");
    kac.waypoint(function(dir) {
        $(".kac_little_block").each(function() {
            var ths = $(this);
            ths.removeClass('animate_hidden');
            ths.addClass('animate_visible');
            ths.addClass("animated fadeInUp");
        });
    }, {
        offset : "50%"
    });
    var pricinaNum = $(".pricina_number");
    pricinaNum.waypoint(function(dir) {
        $(".pricina_number").each(function() {
            var ths = $(this);
            ths.removeClass('animate_hidden');
            ths.addClass('animate_visible');
            ths.addClass("animated fadeInLeft");
        });
    }, {
        offset : "50%"
    });
    var pricinaTxt = $(".pricina_text");
    pricinaTxt.waypoint(function(dir) {
        $(".pricina_text").each(function() {
            var ths = $(this);
            ths.removeClass('animate_hidden');
            ths.addClass('animate_visible');
            ths.addClass("animated fadeInRight");
        });
    }, {
        offset : "50%"
    });

    var steps = $(".block_height");
    steps.waypoint(function(dir) {
        $(".block_height").each(function() {
            var ths = $(this);
            ths.removeClass('animate_hidden');
            ths.addClass('animate_visible');
            ths.addClass("animated fadeInLeft");
        });
    }, {
        offset : "70%"
    });

    var src = $('.img_main_src');
    var c8 = $('.c8');
    var mp20 = $('.mp20');
    var ht = $('.ht');
    var blue = $('.color_blue');
    var brown = $('.color_brown');
    var gray = $('.color_gray');
    var green = $('.color_green');
    var red = $('.color_red');

    if(c8.hasClass('active_btn')){
        blue.on('click mouseover',function(){
            src.attr('src','img/c8-blue.jpg');
            src.addClass('animated fadeIn')
        });
        blue.on('mouseout',function(){
            src.removeClass('animated fadeIn');
        });
        brown.on('click mouseover',function(){
            src.attr('src','img/c8-brown.jpg');
            src.addClass('animated fadeIn')
        });
        brown.on('mouseout',function(){
            src.removeClass('animated fadeIn');
        });
        gray.on('click mouseover',function(){
            src.attr('src','img/c8-gray.jpg');
            src.addClass('animated fadeIn')
        });
        gray.on('mouseout',function(){
            src.removeClass('animated fadeIn');
        });
        green.on('click mouseover',function(){
            src.attr('src','img/c8-green.jpg');
            src.addClass('animated fadeIn')
        });
        green.on('mouseout',function(){
            src.removeClass('animated fadeIn');
        });
        red.on('click mouseover',function(){
            src.attr('src','img/c8-red.jpg');
            src.addClass('animated fadeIn')
        });
        red.on('mouseout',function(){
            src.removeClass('animated fadeIn');
        });
    }

    c8.on("click",function(){
        src.attr('src','img/c8-blue.jpg');
        $(this).addClass('active_btn');
        mp20.removeClass('active_btn');
        ht.removeClass('active_btn');
        if(c8.hasClass('active_btn')){
            blue.on('click mouseover',function(){
                src.attr('src','img/c8-blue.jpg');
                src.addClass('animated fadeIn')
            });
            blue.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            brown.on('click mouseover',function(){
                src.attr('src','img/c8-brown.jpg');
                src.addClass('animated fadeIn')
            });
            brown.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            gray.on('click mouseover',function(){
                src.attr('src','img/c8-gray.jpg');
                src.addClass('animated fadeIn')
            });
            gray.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            green.on('click mouseover',function(){
                src.attr('src','img/c8-green.jpg');
                src.addClass('animated fadeIn')
            });
            green.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            red.on('click mouseover',function(){
                src.attr('src','img/c8-red.jpg');
                src.addClass('animated fadeIn')
            });
            red.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });

        }
    });
    mp20.on("click",function(){
        src.attr('src','img/c20a-blue.jpg');
        $(this).addClass('active_btn');
        c8.removeClass('active_btn');
        ht.removeClass('active_btn');
        if(mp20.hasClass('active_btn')){
            blue.on('click mouseover',function(){
                src.attr('src','img/c20a-blue.jpg');
                src.addClass('animated fadeIn')
            });
            blue.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            brown.on('click mouseover',function(){
                src.attr('src','img/c20a-brown.jpg');
                src.addClass('animated fadeIn')
            });
             brown.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            gray.on('click mouseover',function(){
                src.attr('src','img/c20a-gray.jpg');
                src.addClass('animated fadeIn')
            });
            gray.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            green.on('click mouseover',function(){
                src.attr('src','img/c20a-green.jpg');
                src.addClass('animated fadeIn')
            });
             green.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            red.on('click mouseover',function(){
                src.attr('src','img/c20a-red.jpg');
                src.addClass('animated fadeIn')
            });
             red.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });

        }
    });
    ht.on("click",function(){
        src.attr('src','img/color-shtaket-5005-ral.jpg');
        $(this).addClass('active_btn');
        c8.removeClass('active_btn');
        mp20.removeClass('active_btn');
        if(ht.hasClass('active_btn')){
            blue.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-5005-ral.jpg');
                src.addClass('animated fadeIn')
            });
            blue.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            brown.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-8017-ral.jpg');
                src.addClass('animated fadeIn')
            });
            brown.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            gray.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-7024-ral.jpg');
                src.addClass('animated fadeIn')
            });
            gray.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            green.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-6005-ral.jpg');
                src.addClass('animated fadeIn')
            });
            green.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });
            red.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-3005-ral.jpg');
                src.addClass('animated fadeIn')
            });
            red.on('mouseout',function(){
                src.removeClass('animated fadeIn');
            });

        }
    });




    //Цели для Яндекс.Метрики и Google Analytics
     $(".count_element").on("click", (function() {
     ga("send", "event", "goal", "goal");
     yaCounterXXXXXXXX.reachGoal("goal");
     return true;
     }));

     //Аякс отправка форм
     //Документация: http://api.jquery.com/jquery.ajax/
     $(".forms").submit(function() {
         var formID = $(this).attr('id'); // Получение ID формы
         var formNm = $('#' + formID);
     $.ajax({
         type: "POST",
         url: "mail.php",
         data: formNm.serialize()
     }).done(function() {
         $('.bs-example-modal-sm').modal();
        setTimeout(function() {
        $.magnificPopup.close();
        $(".forms").trigger("reset");
     }, 1000);
     });
     return false;
     });

     //Chrome Smooth Scroll
     try {
     $.browserSelector();
     if($("html").hasClass("chrome")) {
     $.smoothScroll();
     }
     } catch(err) {

     };

});
