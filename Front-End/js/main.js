(function ($, window, document, undefined) {

    var layoutRender = {
        init: function () {
            layoutRender.backToTop();
            layoutRender.TabNavi();
            layoutRender.Wishlist();
            layoutRender.PopUp();
        },

        // ====== backToTop
        backToTop: function () {
            //Check to see if the window is top if not then display button
            $('.backtotop').fadeOut();
            $(window).scroll(function () {
              ($(this).scrollTop() > 100) ? $('.backtotop').fadeIn() : $('.backtotop').fadeOut(); 
            });

            $(".backtotop").click(function () {
                $("html, body").animate({ scrollTop: 0 }, '100');
                return false;
            });
        },

        // ======= Tab Navi
        TabNavi: function() {
            $('.productGroup .containerPro:not(:first)').hide();
            $('.buttonProduct li').click(function () {
                var indexbutton = $(this).index();
                $('.productGroup .containerPro').hide();
                $('.productGroup .containerPro:eq(' + indexbutton + ')').fadeIn();
            });
        },

        // ======= wishlist 
        Wishlist: function() {
            $('.wishlist').click(function(){
                $(this).find('a').children('.d-hide').remove();
                $(this).find('a').children('.d-show').css({'display': 'block'});
            });
        },

        // ======= PopUp
        PopUp: function() {
            $('.wishlist').click(function(){
                $('.popUp').css({
                    'transform' : 'scale(1)',
                    'opacity' : '1'
                })

                $('.content').css({
                    'transform' : 'scale(1)'
                });
                return false;
            });
           
            $('.popUp button').click(function(){
                $('.content').css({
                    'transition': 'all .4s ease 0s',
                    'transform' : 'scale(0)'
                });
                setTimeout(function(){
                    $('.popUp').css({
                        'opacity' : '1',
                        'transform' : 'scale(0)'
                    });
                  
                }, 400)
                
    
            });
        }

    }

    $(document).ready(function () {
        layoutRender.init();
    });
})(jQuery, window, document);