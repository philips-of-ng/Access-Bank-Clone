// THIS IS THE CODE THAT OPENS AND CLOSE THE MIDDLE NAV THAT WORKS ONLY ON MOBILE SCREEN

const openMiddleNav = document.getElementById('middle-nav-open');
const middleNav = document.getElementById('middle-nav');

openMiddleNav.addEventListener('click', () => {
  if (!middleNav.classList.contains('middle-nav-open')) {
    middleNav.classList.remove('animate__backOutRight');
    middleNav.classList.add('animate__backInLeft', 'middle-nav-open');
    openMiddleNav.innerHTML = `<i class='bx bx-x'></i>`;
  } else {
    middleNav.classList.add('animate__backOutRight');
    middleNav.addEventListener('animationend', () => {
      middleNav.classList.remove('middle-nav-open', 'animate__backInLeft', 'animate__backOutRight');
    }, { once: true });
    openMiddleNav.innerHTML = `<div></div><div></div><div></div><div></div>`;
  }
});

// THIS IS THE CODE THAT OPENS AND CLOSES THE INTERNET BANKING OFFCANVAS
const ibdControl = document.getElementById('internet-banking-dsv-control');
const ibdOffcanvas = document.getElementById('internet-banking-dsv');
let focusOffcanvas = false;

function closeOffcanvas() {
  ibdOffcanvas.classList.add('animate__fadeOutRight');

  ibdOffcanvas.addEventListener('animationend', () => {
    ibdOffcanvas.classList.remove('ibd-open', 'animate__fadeInRight', 'animate__fadeOutRight');
  }, { once: true });
}

ibdControl.addEventListener('mouseover', () => {
  ibdOffcanvas.classList.remove('ibd-close', 'animate__fadeOutRight'); 
  ibdOffcanvas.classList.add('animate__fadeInRight', 'ibd-open');
});

ibdControl.addEventListener('mouseleave', () => {
  if (!focusOffcanvas) {
    closeOffcanvas();
  }
});

ibdOffcanvas.addEventListener('mouseover', () => {
  focusOffcanvas = true;
  ibdOffcanvas.classList.remove('animate__fadeOutRight');
});

ibdOffcanvas.addEventListener('mouseleave', () => {
  focusOffcanvas = false;
  closeOffcanvas();
});





