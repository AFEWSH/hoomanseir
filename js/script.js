
$(document).ready(function() {
    $(window).scroll(function() {
      // Set the number you want to trigger the function at
      var scrollNumber = 100;
      
      // Check if the scroll position has reached the specified number
      if ($(this).scrollTop() >= scrollNumber) {
        // Call your special function here
        specialFunction();
      } else {
        $("#scrolled").removeClass("scrolled");
      }
    });
  
    // Define your special function
    function specialFunction() {
      // Do something special when the scroll position reaches the specified number
      $("#scrolled").addClass("scrolled");
    }
  });

  $(document).ready(function() {
    $(".my_select").select2({
      placeholder: "نام شهر مبدا",
  });
    $(".my_select1").select2({
      placeholder: "نام شهر مقصد",
  });
    $(".my_select2").select2({
      placeholder: "تاریخ مسافرت",
      allowClear: true,
  });
    $(".my_select3").select2({
      placeholder: "کشور مبدا : ایران",
  });
    $(".my_select4").select2({
      placeholder: " شهر مبدا",
  });
    $(".my_select5").select2({
      placeholder: "کشور مقصد",
  });
    $(".my_select6").select2({
      placeholder: " شهر مقصد",
  });
    $(".my_select7").select2({
      placeholder: "تاریخ مسافرت",
      allowClear: true,
  });
    $(".my_select8").select2({
      placeholder: "قاره",
  });
    $(".my_select9").select2({
      placeholder: "مقصد",
  });
    $(".my_select10").select2({
      placeholder: "نوع ویزا",
  });
    $(".my_select11").select2({
      placeholder: "تاریخ مسافرت",
      allowClear: true,
  });

	});

  jQuery(document).ready(function($){
    var offset = 100;
    var speed = 250;
    var duration = 500;
	   $(window).scroll(function(){
            if ($(this).scrollTop() < offset) {
			     $('.topbutton') .fadeOut(duration);
            } else {
			     $('.topbutton') .fadeIn(duration);
            }
        });
	$('.topbutton').on('click', function(){
		$('html, body').animate({scrollTop:0}, speed);
		return false;
		});
});



$(document).ready(function() {

var My_Width = screen.width;
 
if( My_Width <= 576 ){
  var owl = $('.owl-carousel');
owl.owlCarousel({
    rtl:true,
    items:1,
    loop:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

  $("#hotel-van-carousel").removeClass("d-none");
  $("#hotel-van").addClass("d-none");
} else if (My_Width <= 992) {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      rtl:true,
      items:2,
      loop:false,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
  
    $("#hotel-van-carousel").removeClass("d-none");
    $("#hotel-van").addClass("d-none");
}

});

$(document).ready(function() {

  var My_Width = screen.width;
   
  if( My_Width <= 576 ){
    var owl = $('.owl-carousel');
  owl.owlCarousel({
      rtl:true,
      items:1,
      loop:false,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
  
    $("#tours-carousel").removeClass("d-none");
    $("#tours").addClass("d-none");
  } else if (My_Width <= 992) {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        rtl:true,
        items:2,
        loop:false,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    
      $("#tours-carousel").removeClass("d-none");
      $("#tours").addClass("d-none");
  }
  
  });
  