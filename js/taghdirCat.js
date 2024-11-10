let titleMain = document.querySelectorAll('.Title-main')
titleMain.forEach(t=>{
    gsap.to(t.querySelector('h1'),{
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
let taghdirs = document.querySelectorAll('.Taghdir')
taghdirs.forEach(taghdir=>{
    gsap.to(taghdir,{
      opacity:1,
      y:0,
      stagger: 0.5,
        scrollTrigger:{
          trigger:taghdir,
          start:'top 80%',
          end:'bottom bottom',
         
        }
      })
})