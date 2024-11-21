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
let taghdirs = document.querySelectorAll('.TaghdirItem')
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

// SELECTBOX
let defOP = document.querySelectorAll('.default_option')
defOP.forEach((d)=>{
    d.addEventListener('click',(e)=>{
   e.currentTarget.parentElement.classList.toggle("active")
   let lis =e.currentTarget.nextElementSibling.querySelectorAll('.select_ul li')
   lis.forEach(l=>{
    l.addEventListener('click',(e1)=>{
        let currentele = e1.currentTarget.querySelector('p').innerHTML
        console.log(e1.currentTarget);
        e1.currentTarget.parentElement.previousElementSibling.querySelector('p').innerHTML = currentele;
        $('.select_ul li').removeClass( 'active' )
        e1.currentTarget.classList.add("active")
        let id = e1.currentTarget.getAttribute('id')
        console.log(id);
        if(id=='sortASC'){
                 
                console.log('sortASC');
                var url = `/load-poster.inc?type=1`;
                $(".posterLists").load(url);
                setTimeout(() => {
                  gsap.to('.Poster',{
                    opacity:1,
                    y:0,
                   stagger:.1
                   })
                }, 1000);
             
         }
         else if(id=='sortDESC')
            {
                 console.log('sortDESC');
                 var url = `/load-poster.inc?type=2`;
                 $(".posterLists").load(url);
                 setTimeout(() => {
                  gsap.to('.Poster',{
                    opacity:1,
                    y:0,
                   stagger:.1
                   })
                }, 1000);
                 
         }
        e1.currentTarget.parentElement.parentElement.classList.remove("active")
       })
   })
})
})
gsap.to('.Poster',{
  opacity:1,
  y:0,
 stagger:.1
 })