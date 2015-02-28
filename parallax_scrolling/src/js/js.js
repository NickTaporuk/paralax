jQuery(document).ready(function ($) {


    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        //console.log('dataslide:',dataslide,'  direction:',direction);
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link
        console.log('dataslide:',dataslide);
        if(direction == 'down'){
            dataslide = parseInt(dataslide)+1;
            //console.log('dataslide down :',dataslide);
            if(dataslide == 2) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');
                var dot_green =$('.navigation li[data-slide="2"]');
                dot_green.find('img').attr('src','images/menu/Ellipse_green.png');
            }
            else if(dataslide == 3) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');

                var dot_green =$('.navigation li[data-slide="3"]');
                dot_green.find('img').attr('src','images/menu/elips_red.png');
            }
            else if(dataslide == 1) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');

                var dot_green =$('.navigation li[data-slide="1"]');
                dot_green.find('img').attr('src','images/menu/elips_red.png');
            }
            else if(dataslide == 4) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');

                var dot_green =$('.navigation li[data-slide="4"]');
                dot_green.find('img').attr('src','images/menu/elips_red.png');
            }
        }
        else{
            if(dataslide == 2) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');
                var dot_green =$('.navigation li[data-slide="2"]');
                dot_green.find('img').attr('src','images/menu/Ellipse_green.png');
            }
            else if(dataslide == 3) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');

                var dot_green =$('.navigation li[data-slide="3"]');
                dot_green.find('img').attr('src','images/menu/elips_red.png');
            }
            else if(dataslide == 1) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');

                var dot_green =$('.navigation li[data-slide="1"]');
                dot_green.find('img').attr('src','images/menu/elips_red.png');
            }
            else if(dataslide == 4) {
                $('.navigation li img').attr('src','images/menu/blackpoint.png.jpg');

                var dot_green =$('.navigation li[data-slide="4"]');
                dot_green.find('img').attr('src','images/menu/elips_red.png');
            }
        }
        //goToByScroll(dataslide);
        //}

    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 70
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });



});