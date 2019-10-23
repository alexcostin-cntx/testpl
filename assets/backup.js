const slider = document.querySelector('.slides');

const slideLeft = () => {

    // Get current slide
    let currentSlide = document.querySelector('.slide-active');

    // Find the previous slide
    let previousSlide = currentSlide.previousElementSibling;

    if (previousSlide !== null) {
      // If we are not on the first slide
        currentSlide.classList.remove('slide-left', 'slide-from-right');
        currentSlide.classList.add('slide-left');
        setTimeout(function(){ 
            currentSlide.classList.add('slide-hidden');
            currentSlide.classList.remove('slide-active');  
        }, 500);
        previousSlide.classList.add('slide-from-left');
        setTimeout(function(){ 
            previousSlide.classList.remove('slide-hidden');
            previousSlide.classList.add('slide-active');
        }, 500);
    } else {
      // If we are on the first slide
      currentSlide.classList.remove('slide-left', 'slide-from-right');
      currentSlide.classList.add('slide-left');
        setTimeout(function(){ 
            currentSlide.classList.add('slide-hidden');
            currentSlide.classList.remove('slide-active');  
        }, 500);
        slider.lastElementChild.classList.add('slide-from-right');
        setTimeout(function(){ 
            slider.lastElementChild.classList.remove('slide-hidden');
            slider.lastElementChild.classList.add('slide-active');
        }, 500);
    }
  };


    setInterval(function() {
        slideLeft();
      }, 5000);
  


