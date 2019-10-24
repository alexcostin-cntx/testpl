const slider = document.querySelector('.slides');
let asd = document.querySelector('.main-title');

const slideLeft = (e) => {
    let playerUnit = document.querySelector('.player-unit');
    let playerUnitWidth = playerUnit.clientWidth;
    
    // Get current slide
    let currentSlide = document.querySelector('.slide-active');
    let currentTitle = document.querySelector('.title-active');

    // Find the previous slide
    let previousSlide = currentSlide.previousElementSibling;
    let previousTitle = currentTitle.previousElementSibling;

    if (previousSlide !== null) {
      // If we are not on the first slide
      currentSlide.classList.add('slide-hidden');
      currentSlide.classList.remove('slide-active');
        currentTitle.classList.add('display-none');
        currentTitle.classList.remove('title-active');
        previousTitle.classList.remove('display-none');
        previousTitle.classList.add('title-active');
      previousSlide.classList.remove('slide-hidden');
      previousSlide.classList.add('slide-active');
      previousSlide.childNodes[1].style.transform = `translateX( -${(previousSlide.childNodes[1].clientWidth - playerUnitWidth)/2}px )`;
    } else {
      // If we are on the first slide
      currentSlide.classList.add('slide-hidden');
        currentTitle.classList.add('display-none');
        currentTitle.classList.remove('title-active');
        asd.lastElementChild.classList.remove('display-none');
        asd.lastElementChild.classList.add('title-active');
      currentSlide.classList.remove('slide-active');
      slider.lastElementChild.classList.remove('slide-hidden');
      slider.lastElementChild.classList.add('slide-active');
      slider.lastElementChild.childNodes[1].style.transform = `translateX( -${(slider.lastElementChild.childNodes[1].clientWidth - playerUnitWidth)/2}px )`;
    }
};

const refreshTitle = () => {
    let mainTitle = document.querySelector('.main-title');
    mainTitle.style.display='none';
    mainTitle.offsetHeight; // no need to store this anywhere, the reference is enough
    mainTitle.style.display='block';
}

// const goAway = () => {
//     let h1 = document.querySelector('.title-active');

//     setInterval(function() {
//         h1.classList.add('goaway');
//     }, 4900);
// }

const growPic = () => {
    let currentImg = document.querySelector('.slide-active img');
    currentImg.style.transform = 'scale(1.2)';
}
const shrinkPic = () => {
    let currentImg = document.querySelector('.slide-active img');
    currentImg.style.transform = 'scale(1.0)';
}

setInterval(function() {
    slideLeft();
    refreshTitle();
}, 5000);

// change logo (top bar)
// ---------------------
const topBarV1 = document.querySelector('.top-bar-v1');
const topBarV2 = document.querySelector('.top-bar-v2');

showTopbarv1 = () => {
    topBarV1.classList.add('display-none');
    topBarV2.classList.remove('display-none');
}
showTopbarv2 = () => {
    topBarV2.classList.add('display-none');
    topBarV1.classList.remove('display-none');
}
  
// change button
// ---------------------

const button = document.querySelector('.button');
buttonOne = () => {
    button.classList.remove('v2', 'v3');
    button.classList.add('v1')
}

buttonTwo = () => {
    button.classList.remove('v1', 'v3');
    button.classList.add('v2')
}

buttonThree = () => {
    button.classList.remove('v2', 'v1');
    button.classList.add('v3')
}

// cycle logos 
// ---------------------
document.addEventListener('click', function (event) {

	if (!event.target.matches('.logobtn')) return;
	event.preventDefault();
    let _asd = event.target.dataset.logo;
    
    let logoasset = document.querySelector('.logoasset');
    logoasset.src=`assets/logo/${_asd}.png`
}, false);


// change title 
// ---------------------
 const mainTitle = document.querySelector('.main-title');
