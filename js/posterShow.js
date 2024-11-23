const mainPosterSlider = new Swiper(".mainPosterSlider", {
  // Optional parameters
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".pagination1",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      if (total > 9) {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        }
      } else {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        }
      }
    },
  },
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".nextMain",
    prevEl: ".prevMain",
  },
});

let titleMain = document.querySelectorAll(".Title-main");
titleMain.forEach((element) => {
  gsap.to(element.querySelector("h1,h2,h3,h4"), {
    scrollTrigger: {
      trigger: element.querySelector("h1,h2,h4"),
      start: "top 90%",
      end: "bottom bottom",
    },
    y: "0",
  });
  gsap.to(element.querySelector(".line"), {
    scrollTrigger: {
      trigger: element.querySelector(".line"),
      start: "top 90%",
      end: "bottom bottom",
    },
    width: "60px",
  });
});

let scrollTop = document.querySelectorAll(".scrollTop");
scrollTop.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom bottom",
      // markers:true
    },
    y: "20vh",
    opacity: 0,
  });
});

jQuery(".openPara").readmore({
  speed: 300,
  collapsedHeight: 103,
  moreLink: '<button class="readMoreBtn"> <span>+</span> مشاهده بیشتر</button>',
  lessLink: '<button class="readMoreBtn"> <span>-</span> مشاهده کمتر</button>',
  heightMargin: 16,
  afterToggle: function (trigger, element, expanded) {},
});

const branSlider = new Swiper(".branSlider", {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  speed: 1000,
  spaceBetween: 51,
  autoplay: {
    delay: 0,
  },
});

const commendSlider = new Swiper(".commendSlider", {
  // Optional parameters
  loop: true,
  slidesPerView: 2.8,
  speed: 1000,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".nextCommen",
    prevEl: ".prevCommen",
  },
});
const imgGallerySlider = new Swiper(".imgGallerySlider", {
  // Optional parameters
  //   loop: true,
  slidesPerView: 2,
  speed: 1000,
  centeredSlides: true,
  spaceBetween: 48,
  // Navigation arrows
  navigation: {
    nextEl: ".nextconfer",
    prevEl: ".prevconfer",
  },
  grabCursor: true,
});

const conferSlider = new Swiper(".conferSlider", {
  // Optional parameters
  //   loop: true,
  slidesPerView: 2,
  speed: 1000,
  centeredSlides: true,
  spaceBetween: 48,
  // Navigation arrows
  navigation: {
    nextEl: ".prevconfer",
    prevEl: ".nextconfer",
  },
  pagination: {
    el: ".conferSliderPagination",
    clickable: true,
  },
});

const txtSlider = new Swiper(".txtSlider", {
  // Optional parameters
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  // If we need pagination
  navigation: {
    nextEl: ".nextconfer",
    prevEl: ".prevconfer",
  },
  pagination: {
    el: ".conferSliderPagination",
    clickable: true,
  },
});

conferSlider.controller.control = txtSlider;
txtSlider.controller.control = conferSlider;

function countLines() {
  var el = document.querySelectorAll(".openParaSlide p");
  let btnOpenParaSlide = document.querySelectorAll(".btnOpenParaSlide");
  el.forEach((element,i) => {
    var divHeight = element.offsetHeight;
    var lineHeight = 22;
    var lines = divHeight / lineHeight;
    console.log(lines);
    if (lines < 4) {
      btnOpenParaSlide[i].style.display = "none";
    }
    
  });
}

countLines();

const rightSlider = new Swiper(".rightSlider", {
  // Optional parameters
  speed: 1000,
  loop: false,

  navigation: {
    nextEl: ".prevRight",
    prevEl: ".nextRight",
  },
});
const leftSlider = new Swiper(".leftSlider", {
  // Optional parameters
  speed: 1000,
  slidesPerView: 1.3,
  loop: false,
  spaceBetween: 20,

  navigation: {
    nextEl: ".prevRight",
    prevEl: ".nextRight",
  },
});

rightSlider.controller.control = leftSlider;
leftSlider.controller.control = rightSlider;

const videoGallery = new Swiper(".videoGallery", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  speed: 1000,
  centeredSlides: true,
  spaceBetween: 200,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".nextVideoGallery",
    prevEl: ".prevVideoGallery",
  },
});





function countLines6() {
  var el = document.querySelectorAll(".ShowMorePara6 p");
  let para6Btn = document.querySelectorAll(".para6Btn");
  el.forEach((element,i) => {
    var divHeight = element.offsetHeight;
    var lineHeight = 22;
    var lines = divHeight / lineHeight;
    console.log(lines);
    if (lines < 2) {
      para6Btn[i].style.display = "none";
    }
    
  });
}

countLines6();
// POP UP
let popUpVideo = document.querySelector(".popUpVideo");
let closepopUpVideo = document.querySelector(".closepopUpVideo");
let playVideoOpen = document.querySelectorAll(".playVideoOpen");
playVideoOpen.forEach((element) => {
  element.addEventListener("click", function (params) {
    popUpVideo.classList.add("popOpen");
    let vodUrl = element.getAttribute("data-videoUrl");

    let videoPop = document.querySelector(".popUpVideo iframe");
    console.log("vodUrl", vodUrl);
    console.log("videoPop", videoPop);
    videoPop.setAttribute("src", vodUrl);
  });
});

closepopUpVideo.addEventListener("click", function (params) {
  popUpVideo.classList.remove("popOpen");
});

let popUpVideoGalleryContainer = document.querySelector(
  ".popUpVideoGalleryContainer"
);
let openGalleryPop = document.querySelectorAll(".openGalleryPop");
let galleryFlag = true;
let body = document.querySelector("body");
let fThumb = document.querySelector(".fThumb");
let thumbBox = document.querySelectorAll(".thumbBox");
let sGalleryFlag = true;
let sGallery = document.querySelector(".sGallery");
let closeSlider = document.querySelector(".closeSlider");
let closePop = document.querySelector(".closePop");
let openVideoGallery = document.querySelectorAll(".openVideoGallery");

openGalleryPop.forEach((element) => {
  element.addEventListener("click", function (params) {
    if (galleryFlag) {
      fThumb.classList.add("popOpen");
      popUpVideoGalleryContainer.classList.add("popOpen");
      galleryFlag = !galleryFlag;
      body.style.overflow = "hidden";
      // lenis.stop()
    }
  });
});

const popSlider = new Swiper(".popSlider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  speed: 1000,

  centeredSlides: true,
  navigation: {
    nextEl: ".nextPop",
    prevEl: ".prevPop",
  },

  pagination: {
    el: ".popSliderFraction",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      if (total > 10) {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        }
      } else {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        }
      }
    },
  },
});

for (let i = 0; i < thumbBox.length; i++) {
  const element = thumbBox[i];

  element.addEventListener("click", function (params) {
    if (sGalleryFlag) {
      popSlider.slideTo(i + 1, 0);
      sGallery.classList.add("popOpen");
      sGalleryFlag = false;
      popUpVideoGalleryContainer.scrollTo(0, 0);
      popUpVideoGalleryContainer.style.overflow = "hidden";
    }
  });
}

closeSlider.addEventListener("click", function (params) {
  sGallery.classList.remove("popOpen");
  sGalleryFlag = true;
  popUpVideoGalleryContainer.style.overflow = "auto";
});

closePop.addEventListener("click", function (params) {
  if (!galleryFlag) {
    popUpVideoGalleryContainer.classList.remove("popOpen");
    galleryFlag = !galleryFlag;
    body.style.overflow = "auto";
    //  lenis.start()
  }
});

openVideoGallery.forEach((element, i) => {
  element.addEventListener("click", function (params) {
    console.log(element);

    if (galleryFlag && sGalleryFlag) {
      fThumb.classList.add("popOpen");
      popUpVideoGalleryContainer.classList.add("popOpen");
      sGallery.classList.add("popOpen");
      galleryFlag = !galleryFlag;
      body.style.overflow = "hidden";
      //  lenis.stop()

      popSlider.slideTo(i + 1, 0);
      sGalleryFlag = !sGalleryFlag;
      popUpVideoGalleryContainer.scrollTo(0, 0);
      popUpVideoGalleryContainer.style.overflow = "hidden";
    }
  });
});



const thmbPopSlider = new Swiper(".thmbPopSlider", {
  slidesPerView: 6,
  spaceBetween: 15,
  speed: 1000,
});

const popUpSlider = new Swiper(".popUpSlider", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 1000,
  loop:true,
  autoplay:{
    delay:2000,
  },
  thumbs: {
    swiper: thmbPopSlider,
  },
  navigation: {
    nextEl: '.nextpopUpSlider',
    prevEl: '.prevpopUpSlider',
  },
  pagination: {
    el: ".popImgGalleryFractio",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      if (total > 9) {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        }
      } else {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        }
      }
    },
  },
});
popUpSlider.autoplay.stop();


let playBtns = document.querySelector(".playBtns")
let scrollBarpopUpImgGallery  = document.querySelector(".scrollBarpopUpImgGallery ")

function pausePop(params) {
  playBtns.classList.remove("pauseFlag")
  playBtns.classList.add("playFlag")
  scrollSpan.classList.remove("scrollSpanAnimation")
  scrollBarpopUpImgGallery.classList.add("hidden")
  
  popUpSlider.autoplay.stop();
  
}

function playPop(params) {
  playBtns.classList.remove("playFlag")
  playBtns.classList.add("pauseFlag")
  scrollSpan.classList.add("scrollSpanAnimation")
  scrollBarpopUpImgGallery.classList.remove("hidden")
  setTimeout(() => {
    
    popUpSlider.autoplay.start();
  }, 800);
}


$('.pausePopUp').click(function(){
pausePop()
})



$('.playPopUp').click(function(){
playPop()

})


let overZoom = document.querySelectorAll(".overZoom")
let thmbPopSliders = document.querySelectorAll(".thmbPopSlider .swiper-slide")

let scrollSpan = document.querySelector(".scrollSpan")
let nextpopUpSlider = document.querySelector(".nextpopUpSlider")
let prevpopUpSlider = document.querySelector(".prevpopUpSlider")
let closePopUpImgGallery = document.querySelector(".closePopUpImgGallery");
let popUpImgGallery = document.querySelector(".popUpImgGallery");
overZoom.forEach((element) => {
  element.addEventListener("click", function (params) {
    popUpImgGallery.classList.add("popOpen");
    setTimeout(() => {
      
      popUpSlider.autoplay.start();
    }, 800);
      
      scrollSpan.classList.add("scrollSpanAnimation")
  });
});

closePopUpImgGallery.addEventListener("click", function (params) {
  popUpImgGallery.classList.remove("popOpen");
  console.log("cls");
  popUpSlider.autoplay.stop();
  scrollSpan.classList.remove("scrollSpanAnimation")
});

nextpopUpSlider.addEventListener("click" , pausePop)
prevpopUpSlider.addEventListener("click" , pausePop)
thmbPopSliders.forEach(element => {
  element.addEventListener("click" , pausePop)
  
});

























let openVideoGallery6 = document.querySelectorAll(".openVideoGallery6");
let fThumb6 = document.querySelector(".fThumb6");
let thumbBox6 = document.querySelectorAll(".thumbBox6");

let popUpVideoGalleryContainer6 = document.querySelector(".popUpVideoGalleryContainer6");
let sGallery6 = document.querySelector(".sGallery6");
let closeSlider6 = document.querySelector(".closeSlider6");
let closePop6 = document.querySelector(".closePop6");

// openVideoGallery6.forEach((element) => {
//   element.addEventListener("click", function (params) {
//     if (galleryFlag) {
//       fThumb6.classList.add("popOpen");
//       popUpVideoGalleryContainer6.classList.add("popOpen");
//       galleryFlag = !galleryFlag;
//       body.style.overflow = "hidden";
//       // lenis.stop()
//     }
//   });
// });

const popSlider6 = new Swiper(".popSlider6", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  speed: 1000,

  centeredSlides: true,
  navigation: {
    nextEl: ".nextPop6",
    prevEl: ".prevPop6",
  },

  pagination: {
    el: ".popSliderFraction6",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      if (total > 10) {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">${total}</span>`
          );
        }
      } else {
        if (current > 9) {
          return (
            `<span class="current">${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        } else {
          return (
            `<span class="current">0${current}</span>` +
            "<i>/</i>" +
            `<span class="total">0${total}</span>`
          );
        }
      }
    },
  },
});

for (let i = 0; i < thumbBox6.length; i++) {
  const element = thumbBox6[i];

  element.addEventListener("click", function (params) {
    console.log(sGalleryFlag);
    
    
      popSlider6.slideTo(i + 1, 0);
      sGallery6.classList.add("popOpen");
      sGalleryFlag = !sGalleryFlag;
      popUpVideoGalleryContainer6.scrollTo(0, 0);
      popUpVideoGalleryContainer6.style.overflow = "hidden";
    
  });
}

closeSlider6.addEventListener("click", function (params) {
  sGallery6.classList.remove("popOpen");
  sGalleryFlag = !sGalleryFlag;
  popUpVideoGalleryContainer6.style.overflow = "auto";
});

closePop6.addEventListener("click", function (params) {
  if (!galleryFlag) {
    popUpVideoGalleryContainer6.classList.remove("popOpen");
    galleryFlag = !galleryFlag;
    body.style.overflow = "auto";
    //  lenis.start()
  }
});

openVideoGallery6.forEach((element, i) => {
  element.addEventListener("click", function (params) {
    console.log(element);

    if (galleryFlag) {
      fThumb6.classList.add("popOpen");
      popUpVideoGalleryContainer6.classList.add("popOpen");
      sGallery6.classList.add("popOpen");
      galleryFlag = !galleryFlag;
      body.style.overflow = "hidden";
      //  lenis.stop()

      popSlider6.slideTo(i + 1, 0);
      sGalleryFlag = !sGalleryFlag;
      popUpVideoGalleryContainer6.scrollTo(0, 0);
      popUpVideoGalleryContainer6.style.overflow = "hidden";
    }
  });
});

