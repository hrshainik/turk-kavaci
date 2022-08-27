const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".ham");
const navLinks = document.querySelector(".items");
const navItems = navLinks.querySelectorAll("li a");
const logo = document.querySelectorAll("#turk path");
const paths = Array.from(logo);

paths.map((path, i) => {
  // console.log(`Letter ${i} is ${path.getTotalLength()}`);
});

document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("burger") &&
    !e.target.classList.contains("items") &&
    !e.target.classList.contains("ham") &&
    !e.target.classList.contains("line")
  ) {
    navLinks.classList.remove("nav-active");
    burgerIcon.classList.remove("active");
  }
});

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burgerIcon.classList.toggle("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burgerIcon.classList.toggle("active");
  });
});

const interleaveOffset = 0.75;

const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  breakpoints: {
    715: {
      loop: false,
      direction: "vertical",
      on: {
        progress: function () {
          let swiper = this;

          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.height * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;

            TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
              y: innerTranslate,
            });
          }
        },
        setTransition: function (slider, speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    },
  },
  speed: 900,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
      );
    },
  },
  // autoplay: {
  //   delay: 5000,
  // },
});

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
