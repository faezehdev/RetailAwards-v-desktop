const mainPosterSlider = new Swiper('.mainPosterSlider', {
    // Optional parameters
    autoplay:{
        delay:3000,
    },
    speed:1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
        el: '.pagination1',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            if (total>9) {
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
    // If we need pagination
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextMain',
      prevEl: '.prevMain',
    },
  
  
  });


  