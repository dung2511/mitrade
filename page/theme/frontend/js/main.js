var PROGRAM = (function () {
  var menuMobile = function () {
    const hamburger = document.getElementById("hamburger");
    const languageMoblie = document.getElementById("language-mobile");
    const closeLanguage = document.getElementById("close-language");
    const closelanguage = document.querySelector(".close-language");
    hamburger.onclick = function () {
      languageMoblie.classList.add("active");
      closeLanguage.classList.toggle("hidden");
    };
    closeLanguage.onclick = function () {
      languageMoblie.classList.remove("active");
      closeLanguage.classList.toggle("hidden");
    };
    closelanguage.onclick = function () {
      languageMoblie.classList.remove("active");
      closeLanguage.classList.toggle("hidden");
    };
  };
  var showAns = function () {
    var itemQuestions = document.querySelectorAll(".item-question");
    itemQuestions.forEach(function (item) {
      var titleQuestion = item.querySelector(".question");
      var contentQuestion = item.querySelector(".answer");
      var iconAngleQ = item.querySelector(".question i");
      titleQuestion.addEventListener("click", function () {
        if (window.getComputedStyle(contentQuestion).display === "none") {
          contentQuestion.classList.add("active");
          var height = contentQuestion.scrollHeight;
          contentQuestion.style.height = height + "px";
          iconAngleQ.classList.add("active");
        } else {
          contentQuestion.style.height = "0";
          iconAngleQ.classList.remove("active");
          contentQuestion.addEventListener(
            "transitionend",
            function () {
              contentQuestion.classList.remove("active");
            },
            { once: true }
          );
        }
      });
    });
  };
  var showReplyComment = function () {
    var itemComment = document.querySelectorAll(".items-comment");
    itemComment.forEach(function (item) {
      var btnReply = item.querySelector(".btn-showreply");
      var btnCancelReply = item.querySelector(".btn-cancel-reply");
      var replyComment = item.querySelector(".reply_comment");
      btnReply.addEventListener("click", function () {
        if (window.getComputedStyle(replyComment).display === "none") {
          replyComment.classList.add("active");
        }
      });
      btnCancelReply.addEventListener("click", function () {
        if (window.getComputedStyle(replyComment).display === "block") {
          replyComment.classList.remove("active");
        }
      });
    });
  };
  var showModalRegister = function () {
    const openModalRegister = document.getElementById("btn-register");
    const closeModalRegister = document.querySelector(".box-close-modal");
    const modalRegister = document.querySelector(".modal-register");
    openModalRegister.addEventListener("click", function () {
      if (window.getComputedStyle(modalRegister).display === "none") {
        modalRegister.classList.add("active");
      }
    });
    closeModalRegister.addEventListener("click", function () {
      if (window.getComputedStyle(modalRegister).display === "block") {
        modalRegister.classList.remove("active");
      }
    });
  };
  var slideBannerHome = function () {
    const sl_Banner_Home = document.querySelector(".sl-banner_home");
    if (sl_Banner_Home === "undefined") return;
    var swiperBannerHome = new Swiper(sl_Banner_Home, {
      slidesPerView: 1,
    });
  };
  var slideAchivements = function () {
    const sl_achievements_mains = document.querySelector(
      ".sl-achievements_mains"
    );
    if (sl_achievements_mains === "undefined") return;
    var swiperAchivements = new Swiper(sl_achievements_mains, {
      slidesPerView: 2,
      pagination: {
        el: ".pagination-achievements",
      },
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  };
  var slideFeedback = function () {
    const sl_Feedback_mains = document.querySelector(".sl-feedback_mains");
    if (sl_Feedback_mains === "undefined") return;
    var swiperFeedback = new Swiper(sl_Feedback_mains, {
      slidesPerView: 2,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      spaceBetween: 16,
    });
  };
  var slideNews = function () {
    const sl_News_mains = document.querySelector(".sl-news_mains");
    if (sl_News_mains === "undefined") return;
    var swiperNews = new Swiper(sl_News_mains, {
      slidesPerView: 2,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      spaceBetween: 16,
    });
  };
  var activeLanguage = function () {
    var hash = window.location.hash.substring(1);
    if (hash == "") {
      document
        .querySelector(".nav-language-desktop li:first-child")
        .classList.add("active");
    }
  };

  return {
    _: function () {
      menuMobile();
      slideBannerHome();
      showAns();
      slideAchivements();
      showReplyComment();
      activeLanguage();
      slideFeedback();
      slideNews();
      showModalRegister();
    },
  };
})();
PROGRAM._();
