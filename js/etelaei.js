let titleMain = document.querySelectorAll('.Title-main')
titleMain.forEach(t=>{
    gsap.to(t.querySelector('h3'),{
        y:0,
        scrollTrigger:{
          trigger:t,
          start:'top 60%',
          end:'bottom bottom'
        }
      })
    gsap.to(t.querySelector('.line'),{
      width:'60px',
      scrollTrigger:{
        trigger:t,
        start:'top 60%',
        end:'bottom bottom'
      }
    })
})
let Faders = document.querySelectorAll('.section')
Faders.forEach(t=>{
    gsap.to(t.querySelectorAll('h1'),{
        y:0,
        stagger:'.2',
        scrollTrigger:{
          trigger:t,
          start:'top 60%',
          end:'bottom bottom'
        }
      })
      gsap.to(t.querySelectorAll('h2'),{
        y:0,
        stagger:'.2',
        scrollTrigger:{
          trigger:t,
          start:'top 60%',
          end:'bottom bottom'
        }
      })
      gsap.to(t.querySelectorAll('p'),{
        y:0,
        stagger:'.2',
        scrollTrigger:{
          trigger:t,
          start:'top 60%',
          end:'bottom bottom'
        }
      })
})
let SwiperEtelaei= new Swiper ('.swiper-Etelaei', {
    slidesPerView: 4.3,
    spaceBetween: 30,
    effect:'slide' ,
   speed:1000,
    }) 