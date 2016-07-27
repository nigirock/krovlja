$(document).ready(function () {
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

    var src = $('.img_main_src');
    var c8 = $('.c8');
    var mp20 = $('.mp20');
    var ht = $('.ht');
    var blue = $('.color_blue');
    var brown = $('.color_brown');
    var gray = $('.color_gray');
    var green = $('.color_green');
    var red = $('.color_red');

    c8.on("click",function(){
        src.attr('src','img/c8-blue.jpg');
        $(this).addClass('active_btn');
        mp20.removeClass('active_btn');
        ht.removeClass('active_btn');
        if(c8.hasClass('active_btn')){
            blue.on('click mouseover',function(){
                src.attr('src','img/c8-blue.jpg');
                src.addClass('animated fadeInDown')
            });
            blue.on('mouseout',function(){
                src.removeClass('animated fadeInDown');
            });
            brown.on('click mouseover',function(){
                src.attr('src','img/c8-brown.jpg');
                src.addClass('animated fadeInDown')
            });
            brown.on('mouseout',function(){
                src.removeClass('animated fadeInDown');
            });
            gray.on('click mouseover',function(){
                src.attr('src','img/c8-gray.jpg');
                src.addClass('animated fadeInDown')
            });
            gray.on('mouseout',function(){
                src.removeClass('animated fadeInDown');
            });
            green.on('click mouseover',function(){
                src.attr('src','img/c8-green.jpg');
                src.addClass('animated fadeInDown')
            });
            green.on('mouseout',function(){
                src.removeClass('animated fadeInDown');
            });
            red.on('click mouseover',function(){
                src.attr('src','img/c8-red.jpg');
                src.addClass('animated fadeInDown')
            });
            red.on('mouseout',function(){
                src.removeClass('animated fadeInDown');
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
            });
            brown.on('click mouseover',function(){
                src.attr('src','img/c20a-brown.jpg');
            });
            gray.on('click mouseover',function(){
                src.attr('src','img/c20a-gray.jpg');
            });
            green.on('click mouseover',function(){
                src.attr('src','img/c20a-green.jpg');
            });
            red.on('click mouseover',function(){
                src.attr('src','img/c20a-red.jpg');
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
            });
            brown.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-8017-ral.jpg');
            });
            gray.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-7024-ral.jpg');
            });
            green.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-6005-ral.jpg');
            });
            red.on('click mouseover',function(){
                src.attr('src','img/color-shtaket-3005-ral.jpg');
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
     $.ajax({
     type: "POST",
     url: "mail.php",
     data: $(this).serialize()
     }).done(function() {
     alert("Спасибо за заявку!");
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
