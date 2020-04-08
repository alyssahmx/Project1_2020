$(function () {
  $(window).scroll(function(){   
    if ($(window).scrollTop()>100){ 
        $(".box1").fadeIn(700); 
        }
    else                           
        {
        $(".box1").fadeOut(700); 
        }
        });
        
        $(".box1").click(function(){   
            $('body,html').animate({ 
                scrollTop:0 
            },700);
        });
    });


