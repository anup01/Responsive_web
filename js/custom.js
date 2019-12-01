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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            575: {
                items: 1
            },
            768: {
                items: 2
            }
        }
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


//CLients
$(function() {
    $("#client-list").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive : {
            480 : { items : 3  }, // from zero to 480 screen width 4 items
            768 : { items : 6  }, // from 480 screen widthto 768 6 items
            1024 : { items : 6   // from 768 screen width to 1024 8 items
            }
        }
    });
});

// Google Map
// $(window).on('load', function() {
//     //map veriables
//     var addressString = '230 Broadway, NY, New York 10007, USA';
//     var myLatlng = {lat: 40.712742, lng: -74.005966};
//     // Render google map
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 11,
//         center: myLatlng
//     });
//     // add marker
//     var marker = new google.maps.Marker({
//         position: myLatlng,
//         map: map,
//         title: "Click to See address"
//     });
//     //add info window
//         var infoWindow = new google.maps.infoWindow({
//             content: addressString
//         });
//         // show info window when user click marker
//         marker.addListener('click', function() {
//             infoWindow.open(map, marker);
//         });
// });

// navigation bar show and hide white navbar
$(function() {
    showHideNav(); // show hide nav on page load
    $(window).scroll(function() {
        showHideNav(); // show hide nav on window's scroll
    });

    function showHideNav(){
        // alert('you just scrolled');
        if($(window).scrollTop() > 50 ){
            //show white navbar
            $("nav").addClass("white-nav-top");
            // show dark logo
            $(".navbar-brand img").attr("src", "img/logo-dark.png");
            //show back to top button
            $("#back-to-top").fadeIn();
        }
        else{
            // hide white navbar
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo.png");
            // hide back to top button
            $("#back-to-top").fadeOut();

        }
    }
});

// Smooth Scrolling
$(function() {
    $("a.smooth-scroll").click(function(ev){
         ev.preventDefault();
         //get section id #about, #services etc..
         var section_id = $(this).attr("href");
         $("html, body").animate({
             scrollTop: $(section_id).offset().top - 65
         }, 1250, "easeOutQuad");
    })
    
    
});




















