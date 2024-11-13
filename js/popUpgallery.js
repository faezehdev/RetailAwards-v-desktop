let closePop = document.querySelector(".closePop")
let popUpGalleryContainer = document.querySelector(".popUpGalleryContainer")
let openGallery = document.querySelectorAll(".openGallery")
let sGallery = document.querySelector(".sGallery")
let closeSlider = document.querySelector(".closeSlider")
let fThumb = document.querySelector(".fThumb")
let body = document.querySelector("body")
let galleryFlag=true;

let sGalleryFlag = true;
let thumbBox = document.querySelectorAll(".thumbBox")
let openVideoGallery = document.querySelectorAll(".openVideoGallery")
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
        }
        
    })
});

closePop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
    }
})


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


    openVideoGallery.forEach((element,i) => {
        element.addEventListener("click",function(params) {
            if (galleryFlag && sGalleryFlag) {
                
                fThumb.classList.add("popOpen")
                popUpGalleryContainer.classList.add("popOpen")
                sGallery.classList.add("popOpen")
                galleryFlag=!galleryFlag
                body.style.overflow="hidden"
                console.log(i);
                
                    popSlider.slideTo(i+1,0)
                    sGalleryFlag=!sGalleryFlag
                    popUpGalleryContainer.scrollTo(0,0)
                    popUpGalleryContainer.style.overflow="hidden"
                
            }
            
        })
    });