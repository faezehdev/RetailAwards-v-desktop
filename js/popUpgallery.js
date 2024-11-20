let closePop = document.querySelector(".closePop")
let closeShowPop = document.querySelector(".closeShowPop")
let closeTimePop = document.querySelector(".closeTimePop")
let closeImgPop = document.querySelector(".closeImgPop")
let popUpVideoGalleryContainer = document.querySelector(".popUpVideoGalleryContainer")
let popUpVideoShowGalleryContainer = document.querySelector(".popUpVideoShowGalleryContainer")
let popUpTimeLineGalleryContainer = document.querySelector(".popUpTimeLineGalleryContainer")
let popUpImgGalleryContainer = document.querySelector(".popUpImgGalleryContainer")
let openGallery = document.querySelectorAll(".openGallery")
let thumbShowBox = document.querySelectorAll(".thumbShowBox")
let openPopGallery = document.querySelectorAll(".openPopGallery")
let openGalleryPop = document.querySelectorAll(".openGalleryPop")
let openImgGallery = document.querySelectorAll(".openImgGallery")
let sGallery = document.querySelector(".sGallery")
let closeShowSlider = document.querySelector(".closeShowSlider")
let closeTimeSlider = document.querySelector(".closeTimeSlider")
let sShowGallery = document.querySelector(".sShowGallery")
let sTimeGallery = document.querySelector(".sTimeGallery")
let popUpVideo = document.querySelector(".popUpVideo")
let closepopUpVideo = document.querySelector(".closepopUpVideo")
let popUpimg = document.querySelector(".popUpimg")
let closeSlider = document.querySelector(".closeSlider")
let closeImgSlider = document.querySelector(".closeImgSlider")
let fThumb = document.querySelector(".fThumb")
let fShowThumb = document.querySelector(".fShowThumb")
let fTimeThumb = document.querySelector(".fTimeThumb")
let sImgGallery = document.querySelector(".sImgGallery")
let fImgThumb = document.querySelector(".fImgThumb")
let closepopUpImg = document.querySelector(".closepopUpImg")
let playVideoOpen = document.querySelectorAll(".playVideoOpen")
let thumbTimeBox = document.querySelectorAll(".thumbTimeBox")
let planSlides = document.querySelectorAll(".planSlider .swiper-slide")
let body = document.querySelector("body")
let galleryFlag=true;
let zoomMin =0.5;
let zoomMax =1.7;
let currZoom = 1;
let curRotate = 0;
let zoomIn = document.querySelector(".popUpImgGalleryContainer .zoomIn")
let rotateRight = document.querySelector(".popUpImgGalleryContainer .rotateRight")
let rotateLeft = document.querySelector(".popUpImgGalleryContainer .rotateLeft")
let zoomOut = document.querySelector(".popUpImgGalleryContainer .zoomOut")
let popUpimgzoomIn = document.querySelector(".popUpimg .zoomIn")
let popUpimgrotateRight = document.querySelector(".popUpimg .rotateRight")
let popUpimgrotateLeft = document.querySelector(".popUpimg .rotateLeft")
let popUpimgzoomOut = document.querySelector(".popUpimg .zoomOut")
let sGalleryFlag = true;
let thumbBox = document.querySelectorAll(".thumbBox")
let thumbImgBox = document.querySelectorAll(".thumbImgBox")
let openVideoGallery = document.querySelectorAll(".openVideoGallery")
let openShowVideoGallery = document.querySelectorAll(".openShowVideoGallery")
let openTimeVideoGallery = document.querySelectorAll(".openTimeVideoGallery")
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
const popImgSlider = new Swiper('.popImgSlider', {
    // Optional parameters

    loop: true,
    slidesPerView:1,
    speed:1000,

    centeredSlides:true,
    navigation: {
        nextEl: '.nextImgPop',
        prevEl: '.prevImgPop',
      },

    pagination: {
        el: '.popImgSliderFraction',
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
const popShowSlider = new Swiper('.popShowSlider', {
    // Optional parameters

    loop: true,
    slidesPerView:1,
    speed:1000,

    centeredSlides:true,
    navigation: {
        nextEl: '.nextShowPop',
        prevEl: '.prevShowPop',
      },

    pagination: {
        el: '.popSlideShowFraction',
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
const popTimeSlider = new Swiper('.popTimeSlider', {
    // Optional parameters

    loop: true,
    slidesPerView:1,
    speed:1000,

    centeredSlides:true,
    navigation: {
        nextEl: '.nextTimePop',
        prevEl: '.prevTimePop',
      },

    pagination: {
        el: '.popSlideTimeFraction',
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



  popImgSlider.on('slideChange', function () {
    let imgs = document.querySelectorAll(".popSlider img")
    imgs.forEach(element => {
        element.style.scale="1";
        element.style.rotate="0";
         zoomMin =0.5;
         zoomMax =1.7;
         currZoom = 1;
         curRotate = 0;
    });
  });


  openGalleryPop.forEach(element => {
    element.addEventListener("click" , function (params) {
        if (galleryFlag) {
            
            fThumb.classList.add("popOpen")
            popUpVideoGalleryContainer.classList.add("popOpen")
            galleryFlag=!galleryFlag
            body.style.overflow="hidden"
            lenis.stop()
        }
        
    })
});

openPopGallery.forEach(element => {
    element.addEventListener("click" , function (params) {
        if (galleryFlag) {
            
            fImgThumb.classList.add("popOpen")
            popUpImgGalleryContainer.classList.add("popOpen")
            galleryFlag=!galleryFlag
            body.style.overflow="hidden";
            lenis.stop()

        }
        
    })
});

closePop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpVideoGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
                    body.style.overflow="auto"
                   lenis.start()


    }
})
closeShowPop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpVideoShowGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
                    body.style.overflow="auto";
                    lenis.start()


    }
})
closeImgPop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpImgGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
                    body.style.overflow="auto";
                    lenis.start()


    }
})
closeTimePop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpTimeLineGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
                    body.style.overflow="auto";
                    lenis.start()


    }
})


for (let i = 0; i < thumbBox.length; i++) {
    const element = thumbBox[i];
  
        element.addEventListener("click" ,function (params) {
            if (sGalleryFlag) {
                
                popSlider.slideTo(i+1,0)
                sGallery.classList.add("popOpen")
                sGalleryFlag=!sGalleryFlag
                popUpVideoGalleryContainer.scrollTo(0,0)
                popUpVideoGalleryContainer.style.overflow="hidden"
                
            }
        } )
        
    }
for (let i = 0; i < thumbShowBox.length; i++) {
    const element = thumbShowBox[i];
  
        element.addEventListener("click" ,function (params) {
            if (sGalleryFlag) {
                
                popShowSlider.slideTo(i+1,0)
                sShowGallery.classList.add("popOpen")
                sGalleryFlag=!sGalleryFlag
                popUpVideoShowGalleryContainer.scrollTo(0,0)
                popUpVideoShowGalleryContainer.style.overflow="hidden"
                
            }
        } )
        
    }
for (let i = 0; i < thumbImgBox.length; i++) {
    const element = thumbImgBox[i];
  
        element.addEventListener("click" ,function (params) {
            if (sGalleryFlag) {
                
                popImgSlider.slideTo(i+1,0)
                sImgGallery.classList.add("popOpen")
                sGalleryFlag=!sGalleryFlag
                popUpImgGalleryContainer.scrollTo(0,0)
                popUpImgGalleryContainer.style.overflow="hidden"
                
            }
        } )
        
    }
for (let i = 0; i < thumbTimeBox.length; i++) {
    const element = thumbTimeBox[i];
  
        element.addEventListener("click" ,function (params) {
            if (sGalleryFlag) {
                
                popTimeSlider.slideTo(i+1,0)
                sTimeGallery.classList.add("popOpen")
                sGalleryFlag=!sGalleryFlag
                popUpTimeLineGalleryContainer.scrollTo(0,0)
                popUpTimeLineGalleryContainer.style.overflow="hidden"
                
            }
        } )
        
    }
    closeSlider.addEventListener("click",function(params) {
        sGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpVideoGalleryContainer.style.overflow="auto"
    })
    closeShowPop.addEventListener("click",function(params) {
        sGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpVideoShowGalleryContainer.style.overflow="auto"
    })
    closeShowSlider.addEventListener("click",function(params) {
        sShowGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpVideoShowGalleryContainer.style.overflow="auto"
    })
    closeTimeSlider.addEventListener("click",function(params) {
        sTimeGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpTimeLineGalleryContainer.style.overflow="auto"
    })
    closeImgSlider.addEventListener("click",function(params) {
        sImgGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpImgGalleryContainer.style.overflow="auto"
    })


    openVideoGallery.forEach((element,i) => {

        let newElem =  element.querySelector(".playbtn");
        
        
       newElem.addEventListener("click",function(params) {
        let newI = element.getAttribute("data-swiper-slide-index")
        console.log(newI);
        
            if (galleryFlag && sGalleryFlag) {
                
                fThumb.classList.add("popOpen")
                popUpVideoGalleryContainer.classList.add("popOpen")
                sGallery.classList.add("popOpen")
                galleryFlag=!galleryFlag
                body.style.overflow="hidden"
                lenis.stop()

                    popSlider.slideTo(newI+1,0)
                    sGalleryFlag=!sGalleryFlag
                    popUpVideoGalleryContainer.scrollTo(0,0)
                    popUpVideoGalleryContainer.style.overflow="hidden"
                
            }
            
        })
    });
    openShowVideoGallery.forEach((element,i) => {

        let newElem =  element.querySelector(".playbtn");
        
        
       newElem.addEventListener("click",function(params) {
        // let newI = element.getAttribute("data-swiper-slide-index")
        // console.log(newI);
        
            if (galleryFlag && sGalleryFlag) {
                
                fShowThumb.classList.add("popOpen")
                popUpVideoShowGalleryContainer.classList.add("popOpen")
                sShowGallery.classList.add("popOpen")
                galleryFlag=!galleryFlag
                body.style.overflow="hidden"
                lenis.stop()

                
                popShowSlider.slideTo(i+1,0)
                    sGalleryFlag=!sGalleryFlag
                    popUpVideoShowGalleryContainer.scrollTo(0,0)
                    popUpVideoShowGalleryContainer.style.overflow="hidden"
                
            }
            
        })
    });
    openTimeVideoGallery.forEach((element,i) => {

        // let newElem =  element.querySelector(".playbtn");
        
        
       element.addEventListener("click",function(params) {
        // let newI = element.getAttribute("data-swiper-slide-index")
        // console.log(newI);
        
            if (galleryFlag && sGalleryFlag) {
                
                fTimeThumb.classList.add("popOpen")
                popUpTimeLineGalleryContainer.classList.add("popOpen")
                sTimeGallery.classList.add("popOpen")
                galleryFlag=!galleryFlag
                body.style.overflow="hidden"
                lenis.stop()

                
                popTimeSlider.slideTo(i+1,0)
                    sGalleryFlag=!sGalleryFlag
                    popUpTimeLineGalleryContainer.scrollTo(0,0)
                    popUpTimeLineGalleryContainer.style.overflow="hidden"
                
            }
            
        })
    });

    openImgGallery.forEach((element,i) => {

        
        
       element.addEventListener("click",function(params) {
       
        console.log(element);
        
            if (galleryFlag && sGalleryFlag) {
                
                fImgThumb.classList.add("popOpen")
                popUpImgGalleryContainer.classList.add("popOpen")
                sImgGallery.classList.add("popOpen")
                galleryFlag=!galleryFlag
                body.style.overflow="hidden";
                lenis.stop()

                
                    popSlider.slideTo(i+1,0)
                    sGalleryFlag=!sGalleryFlag
                    popUpImgGalleryContainer.scrollTo(0,0)
                    popUpImgGalleryContainer.style.overflow="hidden"
                
            }
            
        })
    });





    playVideoOpen.forEach(element => {
        element.addEventListener("click" , function (params) {
            popUpVideo.classList.add("popOpen")
            let vodUrl = element.getAttribute("data-videoUrl")
            
            let videoPop = document.querySelector(".popUpVideo iframe")
            console.log("vodUrl" , vodUrl);
            console.log("videoPop" , videoPop);
            videoPop.setAttribute("src" , vodUrl)
        })
        
    });
    closepopUpVideo.addEventListener("click" , function (params) {
        popUpVideo.classList.remove("popOpen")

    })


    planSlides.forEach(element => {
        element.addEventListener("click" , function (params) {
            popUpimg.classList.add("popOpen")
            
            let vodUrl = element.querySelector("img").getAttribute("src")
            let videoPop = document.querySelector(".popUpimg img")
            videoPop.setAttribute("src" , vodUrl)
            let popUpimgNAme = document.querySelector(".popUpimg .name span")
            popUpimgNAme.innerHTML = element.getAttribute("data-name")
        })
        
    });
    closepopUpImg.addEventListener("click" , function (params) {
        popUpimg.classList.remove("popOpen")

    })







    
zoomIn.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    console.log("zoomin");
    if (currZoom<zoomMax) {
        currZoom+=0.1
        currImg.style.scale = currZoom
    }
})
zoomOut.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    console.log("zoomout");
    if (currZoom>zoomMin) {
        currZoom-=0.1;
        currImg.style.scale = currZoom
    }
})
rotateLeft.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    curRotate+=90
    currImg.style.rotate = `${-curRotate}deg`
})
rotateRight.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    curRotate+=90
    currImg.style.rotate = `${curRotate}deg`
})
    
popUpimgzoomIn.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpimg img");
    console.log("zoomin");
    if (currZoom<zoomMax) {
        currZoom+=0.1
        currImg.style.scale = currZoom
    }
})
popUpimgzoomOut.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpimg img");
    console.log("zoomout");
    if (currZoom>zoomMin) {
        currZoom-=0.1;
        currImg.style.scale = currZoom
    }
})
popUpimgrotateLeft.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpimg img");
    curRotate+=90
    currImg.style.rotate = `${-curRotate}deg`
})
popUpimgrotateRight.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpimg img");
    curRotate+=90
    currImg.style.rotate = `${curRotate}deg`
})
