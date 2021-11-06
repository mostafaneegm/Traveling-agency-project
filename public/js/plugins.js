// $(".header").animate({ //be sure to change the class of your element to "header"
//   left:'250px',
//   opacity:'0.5',
//   height:'150px',
//   width:'150px'
// });

var navbar = $(".welcome_home__view .navbar_menu_container");
var sticky = navbar[0].offsetTop;
$(window).on('scroll', () => {
  myFunction();
});

function myFunction() {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > sticky) {
    navbar.addClass("sticky")
  } else {
    navbar.removeClass("sticky");
  }
}