$(document).ready(
    function(){
        //nav
        $('.about-section').waypoint(
            function(direction)
            {
                if(direction == "down"){
                    $('nav').addClass('sticky')
                }
                else
                {
                    $('nav').removeClass('sticky')
                }
            },
            {
                offset: '100px'

            }

        )
            //scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 600);
            event.preventDefault();
        });


        //mobile navication
        $('.mobile-nav-icon').click(
            function(){

                $('.main-nav').slideToggle(200);
                if($('.mobile-nav-icon').hasClass('fa-bars'))
                {
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                }
                else
                {
                    $('.mobile-nav-icon').removeClass('fa-times');
                    $('.mobile-nav-icon').addClass('fa-bars');
                }
              
            }

        )

       

    }
)


//test
$(document).ready(
    function(){
        $('h1').click(
            function(){
                $(this).css('color','red');
            }
        )
    }
)