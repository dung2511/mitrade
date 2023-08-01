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
      var iconAngleQ = item.querySelector(".question i")
      titleQuestion.addEventListener("click", function () {
        if (window.getComputedStyle(contentQuestion).display === "none") {
          contentQuestion.classList.add("active");
          var height = contentQuestion.scrollHeight;
          contentQuestion.style.height = height + "px";
          iconAngleQ.classList.add("active")
        } else {
          contentQuestion.style.height = "0";
          iconAngleQ.classList.remove("active")
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
  var slideAchivements = function () {
    const sl_achievements_mains = document.querySelector(
      ".sl-achievements_mains"
    );
    if (sl_achievements_mains.length === 0) return;
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
  return {
    _: function () {
      menuMobile();
      showAns();
      slideAchivements();
    },
  };
})();
PROGRAM._();
