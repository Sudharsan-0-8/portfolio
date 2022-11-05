
$(document).ready(function(){
    var height = $('#name').offset().top-10;
    var below = 200;
    
    $(window).resize(() => {
        if ($(window).scrollTop() > height) {
            $('#name').addClass('fixed_header');
            $('#name').removeClass('name');

            let half_of_name = $('#actual_name').width()/2;
            let win = $(window).width()/2;
            let marLft = win-half_of_name;
            
            $(window).resize(() => {
                win = $(window).width()/2;
                // console.log($('#actual_name').width());
                $('#actual_name').css("margin-left",(win-half_of_name));
            })

            let diff = ($(window).scrollTop() - height);

            let percent = ( diff / below ) * 100;

            if(diff > below)percent = 100;

            $('#actual_name').css("margin-left",(win-half_of_name)*((100-percent)/100));

            // console.log((win-half_of_name)*(percent/100));
              
          }
          else {
              $('#name').removeClass('fixed_header');
              $('#actual_name').css("margin-left",0);
          }
    })

    $(window).bind('scroll', function() {
          if ($(window).scrollTop() > height) {
            $('#name').addClass('fixed_header');
            $('#name').removeClass('name');

            let half_of_name = $('#actual_name').width()/2;
            let win = $(window).width()/2;
            let marLft = win-half_of_name;
            
            $(window).resize(() => {
                win = $(window).width()/2;
                // console.log($('#actual_name').width());
                $('#actual_name').css("margin-left",(win-half_of_name));
            })

            let diff = ($(window).scrollTop() - height);

            let percent = ( diff / below ) * 100;

            if(diff > below)percent = 100;

            $('#actual_name').css("margin-left",(win-half_of_name)*((100-percent)/100));

            // console.log((win-half_of_name)*(percent/100));
              
          }
          else {
              $('#name').removeClass('fixed_header');
              $('#actual_name').css("margin-left",0);
          }
          const scrollPercent =  100 * (($(window).scrollTop() + $(window).height()) / $(document).height());
          $('#bottom_line').width( scrollPercent +'%');
     });
 });


var jump=function(e){  
    // console.log('in jump');
    e.preventDefault();                        //prevent "hard" jump
      var target = $(this).attr("href");       //get the target
        console.log($(target).offset())
          //perform animated scrolling
        $('html,body').animate(
            {
              scrollTop: $(target).offset().top - 30 //get top-position of target-element and set it as scroll target
            },10,function()                  //scrolldelay: 1 seconds
            {
              location.hash = target;          //attach the hash (#jumptarget) to the pageurl
            }
        );
}
    
$(document).ready(function() {
    $('a[href*="#"]').bind("click", jump); //get all hrefs
    const scrollPercent =  100 * (($(window).scrollTop() + $(window).height()) / $(document).height());
    $('#bottom_line').width( scrollPercent +'%' );
    return false;
});