$(document).ready(function(){
    'use strict'
   /*when click in this botton show the menu holder which include the list menu and change the shap of botton*/
    $('.toggle-holder').click(function() {
        $('.menu-holder').toggleClass('open');
        if($('.menu-holder').hasClass('open')){
            $('.toggle-holder .menu-line-before').css({
                'width': '30px',
                'transform': 'rotate(45deg)',
                'margin-top': '10px'
            });
            $('.toggle-holder .menu-line').hide(200);
            $('.toggle-holder .menu-line-after').css({
                'width': '30px',
                'transform': 'rotate(-45deg)',
                'margin-top': '-7px'
            });
        }
        else{
            $('.toggle-holder .menu-line-before').css({
                'width': '21px',
                'transform': 'rotate(0)',
                'margin-top': 0
            });
            $('.toggle-holder .menu-line').show(200);
            $('.toggle-holder .menu-line-after').css({
                'width': '30px',
                'transform': 'rotate(0)',
                'margin-top': 0
            });
        }
    })
    /* when scrolling add a class to the link that links to the current section*/
    $(window).scroll(function(){
		$('.block').each(function(){
			var sro = $(window).scrollTop();
			var off= $(this).offset().top -=50;		
			if(sro > off){
				var blockId = '.' + $(this).attr('id');
				$('.main-menu li a').removeClass('link-active');
                $('.main-menu li a[data-scroll="'+blockId+'"]').addClass('link-active');
			}
		})
        /*change the nubmer of section when scrolling*/
        if ($('.main-menu li:first-of-type a').hasClass('link-active')) { 
            $('.current-num span').text('01');  
        }
        if ($('.main-menu li:nth-of-type(2) a').hasClass('link-active')) { 
            $('.current-num span').text('02');  
        }
        if ($('.main-menu li:nth-of-type(3) a').hasClass('link-active')) { 
            $('.current-num span').text('03');  
        }
        if ($('.main-menu li:nth-of-type(4) a').hasClass('link-active')) { 
            $('.current-num span').text('04');  
        }
        if ($('.main-menu li:nth-of-type(5) a').hasClass('link-active')) { 
            $('.current-num span').text('05');  
        }
        if ($('.main-menu li:nth-of-type(6) a').hasClass('link-active')) { 
            $('.current-num span').text('06');  
        }
	})
    /*when click on the link (a) close the menu list and scroll to the required section*/
    $('.main-menu li a').click(function(){
        $('.menu-holder').removeClass('open');
            $('.toggle-holder .menu-line-before').css({
                'width': '21px',
                'transform': 'rotate(0)',
                'margin-top': 0
            });
            $('.toggle-holder .menu-line').show(200);
            $('.toggle-holder .menu-line-after').css({
                'width': '30px',
                'transform': 'rotate(0)',
                'margin-top': 0
            });
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000)
    })
    /* when click on this botton (check my portfolio) scroll to portfolio section*/
    $('.button-group a:last-of-type').click(function(){
        $('html, body').animate({
            scrollTop: $('.portfolio').offset().top
        }, 1000)
    })
    /* The properties of skill circle */
    $('.skill-circle').circleProgress({
        value: 0.82,
        startAngle: 4.7,
        reverse: true,
        thickness: 20,
        emptyFill: "#362b2e",
        size: 150,
        fill: {
          color: "#f37b83"
        }
    });
    $('.photoshop').circleProgress({
        value: 0.82
    });
    $('.marketing').circleProgress({
        value: 0.60
    });
    $('.php').circleProgress({
        value: 0.75
    });
    $('.3d').circleProgress({
        value: 0.31
    });


    /* Hide the section for text-type objects */ 
    $('.prot-items').hide();
    /* when click this class (which text items have it) hide all items and show private section for the selected item*/
    $('.fade-itmes').click(function(){
        $('html, body').animate({
            scrollTop: $('.portfolio').offset().top
        }, 1500)
        $('.portfolio-items').slideUp(1000);
        $($(this).data('fade')).slideDown(800);
        
    })
    /* when click this class hide the selected item section and show all items*/
    $('.back-botton').click(function(){
        $('.prot-items').slideUp(800);
        $('.portfolio-items').slideDown(800);
    })


    /* Hide the section which include */ 
    $('.category-filter-list').hide();
    /*when click on this class will show or hide the list*/
    $('.category-filter').click(function(){
        $('.category-filter-list').slideToggle(500);
    })
    /*when click on this class will hide all items and show the items who has the selected class*/
    $('.category-filter-list li').click(function(){
        $('.item').hide();
        $($(this).data('filter')).show(500);
    })


    /* The properties of owl carousel */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoplay : true,
        slideTransition: 'linear',
        duration: 1500,
        responsive:{
            0:{
                items:1
            }
        }
    })
})