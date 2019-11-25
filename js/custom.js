// Preloader code

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').fadeOut('slow');
});

// Owl carousal code
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});


// Progress Bar

$(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy(); 
    }, { 
        offset: 'bottom-in-view'
    });
});

// responsive tabs
$(function() {
    $("#services-tab").responsiveTabs({
        animation:'slide'
    });
});

//portfolio
//we are using window on load method instead of document method because we want to load first all image asset then
//after that we are performing some functionality
$(window).on('load', function(){
    // init isotope
    $(".isotope-container").isotope({

    });
    //filter item on button click
    $("#isotope-filter").on('click', 'button', function() {
        //  alert("you click");
        // get filter value
        var filterValue = $(this).attr('data-filter');
        // alert("you clck" + filterValue);
        $(".isotope-container").isotope({
            filter: filterValue
        }); 
        $("#isotope-filter").find('.active').removeClass('active')
        //active button
        $(this).addClass('active');
    });
});


// Magnifier
$(function() {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// testimonial
// Owl carousal code
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        // responsive: {
        //     // breakpoint from 0 up
        //     0: {
        //         items: 1
        //     },
        //     // breakpoint from 480 up
        //     480: {
        //         items: 2
        //     }
        // }
    });
});


// Stat Section
$(function(){
    $('.counter').counterUp({
        beginAt: 1,
        delay: 10,
        time:1000,
        // formatter: function (n) {
        //     return n.replace(/,/g, '0');
        //   }
    });
});



























