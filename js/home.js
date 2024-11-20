const slider = document.getElementById("js-cta-slider");
const sliderCounter = document.getElementById("js-cta-slider-counter");
const sliderNext = document.getElementById("js-cta-slider-next");
const sliderPrevious = document.getElementById("js-cta-slider-previous");

const interleaveOffset = 0.75;

const swiper = new Swiper(slider, {
  loop: false,
  // direction: "vertical",
  autoplay:true,
  speed: 1000,
  allowTouchMove:false,
  watchSlidesProgress: true,
  mousewheelControl: false,
  mousewheel: false,
    pagination: {
        el: '.pagination1',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            if (total>10) {
                if (current>9) {
                    
                    return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 
                }
                else{

                    return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 

                }
            }
            else{
                if (current>9) {

                    return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
                }
                else{

                    return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
    
                }

            }
          
        }
      },
    scrollbar: {
		el: ".swiper-progressbar",
      },
      navigation: {
        nextEl: '.nextSlide',
        prevEl: '.prevSlide',
      },
  on: {
    progress: function() {
      let swiper = this;

      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress;
        let innerOffset = swiper.width * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        //TweenMax.set(swiper.slides[i], {
          //skewY: `${innerTranslate*0.025}deg`,
        //});
        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
          x: innerTranslate,
        });
      }
    },
    touchStart: function() {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
});




let titleMain = document.querySelectorAll(".Title-main")
titleMain.forEach(element => {
 gsap.to(element.querySelector("h1,h2,h4"),{
     scrollTrigger:{
         trigger:element.querySelector("h1,h2,h4"),
         start:"top 90%",
         end:"bottom bottom",
     },
     y:"0",
 })
 gsap.to(element.querySelector(".line"),{
     scrollTrigger:{
         trigger:element.querySelector(".line"),
         start:"top 90%",
         end:"bottom bottom",
     },
     width:'60px',
 })
});

let scrollTop = document.querySelectorAll(".scrollTop")
scrollTop.forEach(element => {
 gsap.from(element,{
     scrollTrigger:{
         trigger:element,
         start:"top 90%",
         end:"bottom bottom",
         // markers:true
     },
     y:"20vh",
     opacity:0,
 })
});





const videoSlider = new Swiper('.videoSlider', {
    // Optional parameters
    speed:1000,
    loop: true,
    centeredSlides:true,
    spaceBetween: 20,
    slidesPerView:1.2,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  const paraSlider = new Swiper('.paraSlider', {
    speed:1000,
    loop: true,
  
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextPara',
      prevEl: '.prevPara',
    },
  

  });

  const imgSlider = new Swiper('.imgSlider', {
    speed:1000,
    loop: true,
  
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextPara',
      prevEl: '.prevPara',
    },
  

  });


  let sGallery = document.querySelector(".sGallery")

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

let popUpGalleryContainer = document.querySelector(
  ".popUpGalleryContainer"
);

let closeSlider = document.querySelector(".closeSlider")
let closePop = document.querySelector(".closePop")

let openGallery = document.querySelectorAll(".openGallery")
let galleryFlag=true;
let body = document.querySelector("body")
let fThumb = document.querySelector(".fThumb")
let thumbBox = document.querySelectorAll(".thumbBox")
let sGalleryFlag = true;
const popSlider = new Swiper('.popSlider', {
  // Optional parameters

  loop: true,
  slidesPerView:1,
  speed:1000,

  centeredSlides:true,
  navigation: {
      nextEl: '.nextPop',
      prevEl: '.prevPop',
    },

  pagination: {
      el: '.popSliderFraction',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          if (total>10) {
              if (current>9) {
                  
                  return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 
              }
              else{

                  return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 

              }
          }
          else{
              if (current>9) {

                  return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
              }
              else{

                  return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
  
              }

          }
        
      }
    },
});
openGallery.forEach(element => {
  element.addEventListener("click" , function (params) {
      if (galleryFlag) {
          
          fThumb.classList.add("popOpen")
          popUpGalleryContainer.classList.add("popOpen")
          galleryFlag=!galleryFlag
          body.style.overflow="hidden"
          lenis.stop()
      }
      
  })
});

for (let i = 0; i < thumbBox.length; i++) {
  const element = thumbBox[i];

      element.addEventListener("click" ,function (params) {
          if (sGalleryFlag) {
              
              popSlider.slideTo(i+1,0)
              sGallery.classList.add("popOpen")
              sGalleryFlag=!sGalleryFlag
              popUpGalleryContainer.scrollTo(0,0)
              popUpGalleryContainer.style.overflow="hidden"
              
          }
      } )
      
  }

  closeSlider.addEventListener("click",function(params) {
    sGallery.classList.remove("popOpen")
    sGalleryFlag=!sGalleryFlag
    popUpGalleryContainer.style.overflow="auto"
})

closePop.addEventListener("click",function (params) {
  if (!galleryFlag) {
    popUpGalleryContainer.classList.remove("popOpen")
                  galleryFlag=!galleryFlag
                  body.style.overflow="auto"
                 lenis.start()


  }
})