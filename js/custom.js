/*====================================
            SERVICES
====================================== */

// $(document).ready(function(){
// 	//this document.ready method
// 	//is used to make function available
// 	// after the page is ready
// })

// short form
$(function(){
	//animate on scroll
	new WOW().init();
});

/*====================================
            WORK
======================================*/

$(function(){
	$("#work").magnificPopup({
		delegate: 'a', 
		//child items selector, by clicking on it popup will open
		type: 'image',
		//other options
		gallery: {
			enabled: true
		}

	});
});

/*====================================
            TEAM
====================================== */

$(function(){
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		// responsive breakpoints
		// breakpoint from 0 up
		responsive: {
			0: {
			items: 1
		},
		//breakpoint from 480 up
		480: {
			items: 2
		},
		// breakpoint from 768 up
         768: {
                items: 3
          }
       
		}
	});
});



/*====================================
            TESTIMONIALS
====================================== */
$(function(){
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});

/*====================================
            STATS
====================================== */
$(function(){
	$('.counter').counterUp({
		// delay: 5,
		time: 5000
	});
});
/*====================================
           CLIENTS
====================================== */

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 6
            }
        }
    });
});


