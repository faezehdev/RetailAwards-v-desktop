let titleMain=document.querySelectorAll(".Title-main");titleMain.forEach((e=>{gsap.to(e.querySelector("h3"),{y:0,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelector(".line"),{width:"60px",scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}})}));let Faders=document.querySelectorAll(".section");Faders.forEach((e=>{gsap.to(e.querySelectorAll("h1"),{y:0,stagger:".2",scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("h2"),{y:0,stagger:".2",scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("p"),{y:0,stagger:".2",scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}})}));let SwiperEtelaei=new Swiper(".swiper-Etelaei",{slidesPerView:4.3,spaceBetween:30,effect:"slide",speed:1e3});