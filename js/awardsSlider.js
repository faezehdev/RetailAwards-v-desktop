const awardsSlider = new Swiper('.awardsSlider', {
    // Optional parameters
    speed:1000,
    // loop: true,
    slidesPerView: 5,
    slidesPerGroup : 5,

    grid: {
        fill: 'row',
        rows: 3,
    },
    // slidesPerGroup : 5,

    // // If we need pagination
    pagination: {
      el: '.awardsSliderpagination',
      clickable:true,
    },
  
  
  });