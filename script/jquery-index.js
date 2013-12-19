/**
 * @author SGC Agency
 *
 */

function ticker(container, delay){
			    if ($(container).length){
			        container = $(container)
			        var slides = container.length,
			            slide = 0
			        
			            setInterval(function(){
			                if (slide == slides -1) {
			                   container.slideDown()
			                   slide = 0
			            }else{
			                container.eq(slide).slideUp()
			                slide++
			            }
			
			            }, delay)
			                
			    }else{
			            return false;
			    }
			};

function interfaces(){
	//Landing Page > hover
	if ((navigator.userAgent.match(/msie/i)) || 
		        (navigator.userAgent.match(/ie/i))){
				//RUNNING IE
					
				}
				else {
					
					$('a.arrowFade').hover(function(){
					    $(this).stop(true, true).animate({
					        opacity: '1'
					    }, 300);
					}, function(){
					    $(this).stop(true, true).animate({
					        opacity: '.75'
					    }, 300);
					});
				}
	
	
	
	$('#index-buckets li').hover(function(){
	    $(this).find('.bucketArrow').stop(true, true).animate({
	        opacity: '1'
	    }, 300);
	}, function(){
	    $(this).find('.bucketArrow').stop(true, true).animate({
	        opacity: '.75'
	    }, 300);
	});
	$('ul#index-home-slideshow').before('<ul id="index-home_slideshow-nav">').cycle({
    
        startingSlide: 0,
        timeout: 6000,
        fx: 'fade',
        sync: 1,
        speed: 800,
        pager: '#index-home_slideshow-nav',
        pagerAnchorBuilder: function(idx, slide){
        
            var src = $('a img:first-child', slide).attr('src').replace('bg', 'sm');
            return '<li><a href="#"><img src="' + src + '" alt="' + idx + '"></a></li>';
            
        }
       
      });  
	  /*$('ul#index-home-slideshow').before('<ul id="index-home_slideshow-nav"></ul>').cycle({
    
        startingSlide: 0,
        timeout: 2000,
        fx: 'fade',
        sync: 1,
        speed: 800
        pager: '#index-home_slideshow-nav',
        pagerAnchorBuilder: function(idx, slide){
        
            var src = $('img', slide).attr('src');
            return '<li><a href="#"><img src="' + src + '" alt="' + idx + '"></a></li>';
            
        }
        onPagerEvent: function(id) {
         
         console.log('centerid: ' + id);
         
         }
    });*/
}


$(window).load(function(){
	interfaces();
	ticker('#MainNewsTicker-Ticks ul li', 5000);
	
});	


