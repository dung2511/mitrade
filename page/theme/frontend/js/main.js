var PROGRAM = (function () {
  var win = $(window);
  var html = $("html,body");
  var menuMobile = function () {
    $("#hamburger").on("click", function () {
      $("#language-mobile").addClass("active");
      $("#close-language").toggleClass("hidden");
    });
    $("#close-language").on("click", function () {
      $("#language-mobile").removeClass("active");
      $("#close-language").toggleClass("hidden");
    });
    $(".close-language").on("click", function () {
      $("#language-mobile").removeClass("active");
      $("#close-language").toggleClass("hidden");
    });
  };
  var showAns = function () {
    $('.question').on("click" ,function () {
      $(this).next(".answer").slideToggle();
    })
  }
  var slideAchivements = function () {
    if($('.sl-achievements_mains').length === 0) return;
    var swiperAchivements = new Swiper(".sl-achievements_mains", {
      slidesPerView: 1,
      pagination : {
        el:".pagination-achievements"
      }
    })
  }
  return {
    _: function () {
      // gọi lại các function ở đây
      menuMobile();
      showAns();
      slideAchivements();
    },
  };
})();
$(document).ready(function () {
  PROGRAM._();
});
