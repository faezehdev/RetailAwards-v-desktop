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