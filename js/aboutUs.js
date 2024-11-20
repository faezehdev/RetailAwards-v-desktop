
let titleMain = document.querySelectorAll('.Titles')
titleMain.forEach(t=>{
    gsap.to(t.querySelector('h1'),{
        y:0,
      })
    gsap.to(t.querySelectorAll('.line'),{
      width:'100%',

    })
})
gsap.to('.aboutUs-C .Text p',{
    y:0,
    stagger:'.2',
  })
let videoC = document.querySelector('.inVideo')
let overlays = document.querySelectorAll('.overlay')
videoC.addEventListener('click',(e)=>{
overlays.forEach(o=>{
    o.classList.add('hide')
    e.stopPropagation()
    const player = new Plyr('#player');
})
})