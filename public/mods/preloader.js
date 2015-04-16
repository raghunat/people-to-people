      $(document).ready(function(){
        $('ul.tabs').tabs();
        $('select').material_select();
        $('.parallax').parallax();  
          
          $('.tabs').pushpin({ top: $('.tabs').offset().top });
       //   $('.panel').pushpin({ top: $('.panel').offset().top,
        //                      bottom: $('.panel').offset().bottom});
        // calculate height
          
        var screen_ht = $(window).height();
        var preloader_ht = 5;
        var padding =(screen_ht/2)-preloader_ht;

        $("#preloader").css("padding-top",padding+"px");  
          
          // loading animation using script 

	function anim() {
		$("#preloader_image").animate({left:'-1400px'}, 5000,
		function(){ $("#preloader_image"),animate({left:'0px'}, 5000 );
			if (rotate==1){
				anim();
			}
		}
		);
	}

          
	anim();

      });
        
        rotate = 1;

function hide_preloader() {
	// To stop the preloader 
	rotate = 0; 
	// To apply Fade Out Effect to the Preloader 
	$("#preloader").fadeOut(2000);
	}

function resizePanel() {
    //get the browser width and height
    width = $(window).width();
    height = $(window).height();
    //get the mask height: height * total of items
    mask_height = height * $('.item').length;
        
    //set the dimension        
    $('#wrapper, .item').css({width: width, height: height});
    $('#mask').css({width: width, height: mask_height});
    //if the item is displayed incorrectly, set it to the corrent pos
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);
        
}