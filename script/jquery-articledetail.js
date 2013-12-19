/**
 * @author SGC Agency
 *
 */

/*//Details Page > Tab functionality
$('#MainCategory-tabs li a').click(function(){
    $('#MainCategory-tabs li a').removeClass('active');
    $(this).addClass('active');
});
//--------------//	
*/
	$('#module-buckets li').hover(function(){
	    $(this).find('.bucketArrow').stop(true, true).animate({
	        opacity: '1'
	    }, 300);
	}, function(){
	    $(this).find('.bucketArrow').stop(true, true).animate({
	        opacity: '.75'
	    }, 300);
	});




