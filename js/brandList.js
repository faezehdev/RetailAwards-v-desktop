
setTimeout(() => {
    const filterSlider = new Swiper('.filterSlider', {
        // Optional parameters
        spaceBetween: 45,
        freeMode: true,
  
        loop: false,
        slidesPerView: 'auto',
        // And if we need scrollbar
        scrollbar: {
            draggable:true,
          el: '.swiper-scrollbar',
        },
      });
    
}, 20);

let filterBtn = document.querySelectorAll(".filterBtn");

filterBtn[0].classList.add("activeBrandFilter")
filterBtn.forEach(element => {
    element.addEventListener("click",function(params) {
        $(".filterBtn").removeClass("activeBrandFilter")
        element.classList.add("activeBrandFilter")
    })
});


function scrollTop(params) {
    let brandBoxes = document.querySelectorAll(".brandBox")
   brandBoxes.forEach(element => {
    gsap.to(element,{
        scrollTrigger:{
            trigger:element,
            start:"top 90%",
            end:"bottom bottom",
            // markers:true
        },
        y:"0",
        opacity:1,
    })
   });

}

scrollTop()