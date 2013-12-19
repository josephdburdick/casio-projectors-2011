/**
 * @author SGC Agency
 *
 */
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

presentationCycle.doBeforeEvent = function(){
    $('#presentation_pager li a').removeClass('active');
    $('li#goto' + presentationCycle.currentItem + ' a').addClass('active');
    
}

presentationCycle.init();




