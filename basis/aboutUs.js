let titleMain=document.querySelectorAll(".Titles");titleMain.forEach((e=>{gsap.to(e.querySelector("h1"),{y:0}),gsap.to(e.querySelectorAll(".line"),{width:"100%"})})),gsap.to(".aboutUs-C .Text p",{y:0,stagger:".2"});let videoC=document.querySelector(".inVideo"),overlays=document.querySelectorAll(".overlay"),is=!0;videoC.addEventListener("click",(e=>{overlays.forEach((t=>{t.classList.add("hide"),e.stopPropagation();const l=new Plyr("#player");is&&(l.play(),is=!1)}))}));