$(document).ready(function () {
  $(".prev-button").click(function () {
    $("#myCarousel").carousel("prev");
  });

  $(".next-button").click(function () {
    $("#myCarousel").carousel("next");
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$('.navigation-container').owlCarousel({
  items:4,
  loop:false,
  center:true,
  margin:10,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash',
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});



