// var scroll_top = $(window).scrollTop();

// if ($(window).scrollTop() > 100) {
//     $("#scrolled").addClass("scrolled");
// }


// $("#scrolled").addClass("scrolled");


// $(function () {Z
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('#scroll-top').addClass('active-btn-down');
//             $('#scroll-top').removeClass('d-none');
//             $('#scroll-top').removeClass('active-btn-up');
//         }
//     });

// $(document).ready(function() {
//     var lastScrollTop = 0;
//     var scrollRate = 0;
  
//     $(window).scroll(function(event) {
//       var st = $(this).scrollTop();
//       if (st > lastScrollTop){
//           scrollRate = st - lastScrollTop;
//       } else {
//           scrollRate = lastScrollTop - st;
//       }
//       lastScrollTop = st;
//       $("#scroll-indicator").text("Scroll Rate: " + scrollRate + "px");
//     });
//   });

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