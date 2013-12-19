/**
 * @author SGC Agency
 *
 */
$(window).load(function(){
	var currentdropdown = $('ul#MainFeatures-Menu > li').find('a.active').parent('li').attr('id').replace('menu', 'dd');;
	$('#' + currentdropdown).fadeIn(300).show();
	
	/*if ($('ul#MainMainFeatures-Menu li a').hasClass('active')){
		alert('hello');
	}*/
	
	});
	
	//------------//
	
	//Features Page > Menu Dropdown .active class functionality
	$('#MainFeatures-Menu li a').click(function(){
	    $('#MainFeatures-Menu li').children('a').removeClass('active');
	    $(this).addClass('active');
	});
	
	$('ul.features-dropdown a').click(function(){
	    $('ul.features-dropdown a').removeClass('active');
	    $(this).addClass('active');
	});
	//--------------//	
	
	//Features Page > Menu Dropdown hover activation
	$('#MainFeatures-Menu li a').click(function(){
		var dropdownId = $(this).parent('li').attr('id').replace('menu', 'dd');
		$('ul.features-dropdown').stop(true, true).fadeOut(100).hide();
		$('#' + dropdownId).delay(100).stop(true, true).fadeIn(300).show();
	});
	
	
	//--------------//	


	


