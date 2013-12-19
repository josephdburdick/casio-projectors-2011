/**
 * @author SGC Agency
 *
 */
//Hover greenCircle
	$('.hover-greenCircle').fadeIn(500);

	

//Details Page > Tab functionality
$('#MainDetail-tabs li a').click(function(){
    $('#MainDetail-tabs li a').removeClass('active');
    $(this).addClass('active');
});
//--------------//	

//Landing Page > hover
$('#presentation_container a').hover(function(){
    $(this).find('span').stop(true, true).animate({
        opacity: '1'
    }, 300);
}, function(){
    $(this).find('span').stop(true, true).animate({
        opacity: '.5'
    }, 300);
});


//Details > BigSlideshow thumbs control, possibly replace with Cycle plugin
/*$('ul#MainDetail-BigSlide-thumbs li a').click(function(){
    if ($(this).hasClass('active')) {
        return false;
    }
    else {
        var bucketUrl = $(this).find('img').attr('src').replace('thumb', 'xl');
        $('ul#MainDetail-BigSlide-xl li img').stop(true, true).animate({
            opacity: '0'
        }, 300, function(){
            $('ul#MainDetail-BigSlide-xl li').find('img').attr('src', bucketUrl);
            $('ul#MainDetail-BigSlide-xl li img').delay(100).animate({
                opacity: '1'
            }, 300);
        });
        $('ul#MainDetail-BigSlide-thumbs li a').removeClass('active');
        $(this).addClass('active');
    }
});*/
$('ul#MainDetail-BigSlide-xl').before('<ul id="MainDetail-BigSlide-thumbs">').cycle({
        timeout: 0,
		activePagerClass: 'active',
        fx: 'fade',
        sync: 0,
        speed: 350,
        pager: '#MainDetail-BigSlide-thumbs',
        pagerAnchorBuilder: function(idx, slide){
        
            var src = $('img:first-child', slide).attr('src').replace('xl', 'thumb');
			//var src = $('img', slide).attr('src');
            return '<li><a href="#"><img src="' + src + '" alt="' + idx + '"></a></li>';
            
        }   
}); 

//Landing Main Feature toggle
$('#presentation_pager li a').click(function(){
    $('#presentation_pager li a').removeClass('active');
    $(this).addClass('active');
});

//Landing Main Feature toggle
$('#presentation_pager li a').hover(function(){
    $('#presentation_pager li a').removeClass('active');
    $(this).addClass('active');
});

//Add arrow to active Thumb in Product Details Page
if ($('ul#detail-FeatureSlideShow-Thumbs li').hasClass('active')) {
    thumbActive = $('ul#detail-FeatureSlideShow-Thumbs li.active');
    $(thumbActive).prepend('<span></span>');
}

//------------//

//Details Page > BigSlide Thumb functionality
$('#MainDetail-LumensSelect li a').click(function(){
    $('#MainDetail-LumensSelect li').children('a').removeClass('active');
    $(this).addClass('active');
});
//--------------//	

//--------------//	
//Details Page > add class='even'
$('.BasicSpecifications table tr:odd').addClass('even');

//--------------//	


$('li#goto1').click(function(){
    $('.pc_container').cycle(0);
    return false;
});
$('li#goto2').click(function(){
    $('.pc_container').cycle(1);
    return false;
});
$('li#goto3').click(function(){
    $('.pc_container').cycle(2);
    return false;
});
$('li#goto4').click(function(){
    $('.pc_container').cycle(3);
    return false;
});



//var isiOS = navigator.userAgent.match(((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i))) ) != null;


//Special thanks to Craig Thompson @ http://craigsworks.com for qTip
			if((navigator.userAgent.match(/iPhone/i)) || 
		                (navigator.userAgent.match(/Android/i)) ||
		                (navigator.userAgent.match(/iPad/i)) ||
		                (navigator.userAgent.match(/iPod/i))) 
		        { 
				   $('.hover-greenCircle').hover(function() {
				   $(this).qtip({
					  content: $(this).html(),
					  style: 'ui-tooltip-green ui-tooltip-rounded',
					    position: {
					        my: 'top center',
					        target: $(this), //'mouse',
					        viewport: $('#MainDetail-BigSlide-xl'), // Keep it on-screen at all times if possible
					        adjust: {
					            x: -20,  y: 5
					        }
					    },
				
				      overwrite: false, // Make sure another tooltip can't override this one without it being explicitly destroyed
				      show: { ready: true } // Required so the tooltip shows on first mouseover
				   })
				});
		    }
			else {
				$('.hover-greenCircle').live('mouseover', function() {
				   $(this).qtip({
					  content: $(this).html(),
					  style: 'ui-tooltip-green ui-tooltip-rounded',
					    position: {
					        my: 'top center',
					        target: $(this), //'mouse',
					        viewport: $('#MainDetail-BigSlide-xl'), // Keep it on-screen at all times if possible
					        adjust: {
					            x: -20,  y: 5
					        }
					    },
				
				      overwrite: false, // Make sure another tooltip can't override this one without it being explicitly destroyed
				      show: { ready: true } // Required so the tooltip shows on first mouseover
				   })
				});
			}






