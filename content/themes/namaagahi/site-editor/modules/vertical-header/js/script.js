jQuery( document ).ready( function ( $ ) {

    //$('body').livequery(function(){
        var $element = $("body"),
            pageContainer =  $element,
            verticalHeaderFixed   =  $element.find(".vertical-header-default .vertical-header-fixed") ,
            navbarverticalHeader  =  $element.find(".sed-navbar-vertical-header"),
            navbarToggle  =  $element.find(".sed-navbar-toggle");

        //$element.find(".vertical-header-default").parents(".sed-row-pb:first").css("z-index","10");     
        navbarToggle.addClass("navbar-inactive");
        $(window).resize();

        var _navbarToggleAction = function(){


            if(pageContainer.hasClass("site-menu-open")){
                pageContainer.removeClass("site-menu-open");
            }else{
                pageContainer.addClass("site-menu-open");
                
            }

            if(verticalHeaderFixed.hasClass("vertical-header-fixed-menu-open")){
                verticalHeaderFixed.removeClass("vertical-header-fixed-menu-open");
            }else{
                verticalHeaderFixed.addClass("vertical-header-fixed-menu-open");
            }


            if(navbarToggle.hasClass("navbar-inactive")){

                navbarToggle.removeClass("navbar-inactive");
                navbarToggle.addClass("navbar-active");

            }else if(navbarToggle.hasClass("navbar-active")){

                navbarToggle.removeClass("navbar-active");
                navbarToggle.addClass("navbar-inactive"); 

            }

        };

        navbarverticalHeader.click(function(){ //alert("test");
            _navbarToggleAction(); 
            $element.on('transitionend webkitTransitionEnd oTransitionEnd', function () { 

                $(window).trigger(window.tg_debounce_resize);

            });
        });

        /*$(window).resize( function() {
            //_navbarToggleAction(); 
        });

        $(window).load( function() {
            if(!$('body').hasClass("landing")){
                __fixedsite(); 
            }
            //_navbarToggleAction(); 
        });*/

        /*$element.on('click', function (e) {
            $(".vertical-header-fixed , .sed-navbar-vertical-header").each(function () {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 ) {
                    _navbarToggleAction();
                }
            });
        });*/

        $(document).click(function (event) {
            var clickover = $(event.target);   //_opened === true &&
            if ( clickover.parents(".vertical-header-fixed").length == 0 && !clickover.hasClass("vertical-header-fixed") &&  clickover.parents(".sed-navbar-vertical-header").length == 0 &&  !clickover.hasClass("sed-navbar-vertical-header") ) {

                if(pageContainer.hasClass("site-menu-open")){
                    $(window).resize();
                    pageContainer.removeClass("site-menu-open");
                }

                if(verticalHeaderFixed.hasClass("vertical-header-fixed-menu-open")){
                    verticalHeaderFixed.removeClass("vertical-header-fixed-menu-open");
                }


                if(navbarToggle.hasClass("navbar-active")){

                    navbarToggle.removeClass("navbar-active");
                    navbarToggle.addClass("navbar-inactive"); 

                }

            }
        });


        /*$( window ).scroll(function() {
            var _h = $( window ).height();
            _h = ( _h < 600 ) ? _h : _h - 250;
            if( $( window ).scrollTop() > _h && pageContainer.hasClass("site-menu-open") ){
                _navbarToggleAction();
            }
        });*/

        var scrollbarContainer =  $element.find(".vertical-header-fixed .sed-container-scrollbar"),
            scrollbarHeightWindow =  $( window ).height() - 240,
            scrollbarHeight =  scrollbarHeightWindow; 
        scrollbarContainer.css({
            height : scrollbarHeight + 'px', 
        });
        /*$( ".vertical-header-fixed" ).css({
            height : scrollbarHeight + 'px', 
        });*/
        

        scrollbarContainer.mCustomScrollbar({
            //theme:"dark" ,
            autoHideScrollbar:true ,
            advanced:{
                updateOnBrowserResize:true, /*update scrollbars on browser resize (for layouts based on percentages): boolean*/
                updateOnContentResize:true,
            },
            scrollButtons:{
                enable:true
            },
        });

    //});

});

