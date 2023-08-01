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
    const questions = document.querySelectorAll(".question");
    const answer = document.querySelectorAll(".answer");
    const angleQuestion = document.querySelectorAll(".question i")
    questions.forEach((question, index) => {
      question.onclick = function () {
        answer[index].classList.toggle("active");
        angleQuestion[index].classList.toggle("active")
      };
    });
  };
  var slideAchivements = function () {
    const sl_achievements_mains = document.querySelector(".sl-achievements_mains");
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
