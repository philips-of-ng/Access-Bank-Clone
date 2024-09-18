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

// THIS IS THE CODE THAT OPENS AND CLOSE THE INTERNET BANKING DROPDOWN THAT ONLY WORKS ON MOBILE SCREEN WHEN YOU CLICK THE INTERNET BANKING BUTTON //

const internetMobileControl = document.getElementById('internet-banking-mbv-control')

const internetMobile = document.getElementById('internet-banking-mbv')

const xOrLock = document.getElementById('x-or-lock')

internetMobileControl.addEventListener('click', () => {
  if (!internetMobile.classList.contains('activate')) {
    internetMobile.classList.add('animate__flipInX', 'activate')

    internetMobileControl.style.color = 'white'
    internetMobileControl.style.backgroundColor = `rgb(238, 126, 1)`

    xOrLock.classList.remove('bx-lock-alt')
    xOrLock.classList.add('bx-x')
  } else if (internetMobile.classList.contains('activate')) {
    internetMobile.classList.add('animate__flipOutX')

    internetMobile.addEventListener('animationend', () => {
      internetMobile.classList.remove('activate', 'animate__flipOutX')
      xOrLock.classList.add('bx-lock-alt')
      xOrLock.classList.remove('bx-x')

      internetMobileControl.style.color = `rgb(238, 126, 1)`
      internetMobileControl.style.backgroundColor = `white`
    }, { once: true })
  }
})







