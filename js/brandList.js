

function loadBrand(url) {
        
    $.ajax({
      url: url,
      method: 'GET',
      success: function(response) {
          // مخفی کردن لودینگ بعد از دریافت پاسخ
          $(".gridContainer").html(response);
          setTimeout(() => {
              
            scrollTop();
          }, 500);
      },
     
  });
}


let filterBtn = document.querySelectorAll(".filterBtn");

filterBtn[0].classList.add("activeBrandFilter")
filterBtn.forEach(element => {
    element.addEventListener("click",function(params) {
        $(".filterBtn").removeClass("activeBrandFilter")
        element.classList.add("activeBrandFilter")

        let url = element.getAttribute("data-url")
        console.log(url);
        
        loadBrand(url);
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
      let url = filterBtn[0].getAttribute("data-url")
     console.log(url);
     
     loadBrand(url);
}, 20);

