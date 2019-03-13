/**
 * Theme Front end main js
 *
 */

(function($) {

    $( document ).ready( function ( ) {

        $(".post-slider-v-tab").find(".ms-thumb-ol").livequery(function(){

            $(this).html( '<div class="ms-thumb-title-inner">' + $(this).parent().find( "img.ms-thumb" ).attr("alt") + '</div>' );
            $(this).addClass("ms-thumb-title");       

        });
        
      
       /** 
         *
         * Loading  
         */ 
        var removePreloader = function() {
            setTimeout(function(){$('.preloader').hide();}, 800); 
        };
      
        $(window).bind("load", function() {
            setTimeout(function(){$(window).trigger(window.tg_debounce_resize);}, 800);
            removePreloader();
        });
      

    });



})(jQuery);
