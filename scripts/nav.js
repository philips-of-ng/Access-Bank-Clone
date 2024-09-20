// THIS IS THE CODE THAT OPENS AND CLOSE THE MIDDLE NAV THAT WORKS ONLY ON MOBILE SCREEN

const openMiddleNav = document.getElementById('middle-nav-open');
const middleNav = document.getElementById('middle-nav');

openMiddleNav.addEventListener('click', () => {
  if (!middleNav.classList.contains('middle-nav-open')) {
    middleNav.classList.remove('animate__fadeOutRight');
    middleNav.classList.add('animate__fadeInLeft', 'middle-nav-open');
    openMiddleNav.innerHTML = `<i class='bx bx-x'></i>`;
  } else {
    middleNav.classList.add('animate__fadeOutRight');
    middleNav.addEventListener('animationend', () => {
      middleNav.classList.remove('middle-nav-open', 'animate__fadeInLeft', 'animate__fadeOutRight');
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

//THIS IS THE CODE THAT OPENS AND CLOSES THE BOTTOM NAV DROPDOWN-ACCORDION THAT ONLY WORKS ON MOVILE VIEW WHEN YOU CLICK THE HAMBURGER/MENU BUTTON


const bnm = document.getElementById('bottom-nav-mbv')
const bnmControl = document.getElementById('bottom-nav-mbv-control')
const bnmIcon = document.getElementById('bnm-icon')

// Animate the menu on click
bnmControl.addEventListener('click', () => {
  if (!bnm.classList.contains('activate-bnm')) {
    bnm.classList.add('animate__fadeInRight', 'activate-bnm')
    bnmIcon.classList.remove('bx-menu')
    bnmIcon.classList.add('bx-x')
  } else if (bnm.classList.contains('activate-bnm')) {
    bnm.classList.remove('animate__fadeInRight')
    bnm.classList.add('animate__fadeOutRight')

    bnm.addEventListener('animationend', () => {
      bnm.classList.remove('activate-bnm', 'animate__fadeOutRight')
    }, { once: true })
    bnmIcon.classList.remove('bx-x')
    bnmIcon.classList.add('bx-menu')
  }
})

//THIS IS THE CODE FOR THE MAJOR DROPDOWNS ON LAPTOP SCREEN

//Personal Banking

const bpndUnderlay = document.getElementById('nav-drops-underlay')
const pbnd = document.getElementById('personal-banking-nd')
const pbndControl = document.getElementById('personal-banking-nd-control')
let focusPbnd = false

function closePbnd() {
  pbnd.classList.remove('activate-nav-drops-in')
  bpndUnderlay.classList.remove('activate-nav-drops')
}

pbndControl.addEventListener('mouseover', () => {
  bpndUnderlay.classList.add('activate-nav-drops')
  pbnd.classList.add('activate-nav-drops-in')
})

pbndControl.addEventListener('mouseleave', () => {
  closePbnd()
})

pbnd.addEventListener('mouseover', () => {
  pbnd.classList.add('activate-nav-drops-in')
  bpndUnderlay.classList.add('activate-nav-drops')
})

pbnd.addEventListener('mouseleave', () => {
  closePbnd()
})


//Business Banking

const bbndUnderlay = document.getElementById('nav-drops-underlay-2')
const bbnd = document.getElementById('business-banking-nd')
const bbndControl = document.getElementById('business-banking-nd-control')

function closeBbnd() {
  bbnd.classList.remove('activate-nav-drops-in')
  bbndUnderlay.classList.remove('activate-nav-drops')
}

bbndControl.addEventListener('mouseover', () => {
  bbndUnderlay.classList.add('activate-nav-drops')
  bbnd.classList.add('activate-nav-drops-in')
})

bbndControl.addEventListener('mouseleave', () => {
  closeBbnd()
})

bbnd.addEventListener('mouseover', () => {
  bbnd.classList.add('activate-nav-drops-in')
  bbndUnderlay.classList.add('activate-nav-drops')
})

bbnd.addEventListener('mouseleave', () => {
  closeBbnd()
})







//Coporate Banking


const cbndUnderlay = document.getElementById('nav-drops-underlay-3');
const cbnd = document.getElementById('corporate-banking-nd');
const cbndControl = document.getElementById('corporate-banking-nd-control'); // Ensure this element exists

function closeCbnd() {
  cbnd.classList.remove('activate-nav-drops-in');
  cbndUnderlay.classList.remove('activate-nav-drops');
}

cbndControl.addEventListener('mouseover', () => {
  cbndUnderlay.classList.add('activate-nav-drops');
  cbnd.classList.add('activate-nav-drops-in');
});

cbndControl.addEventListener('mouseleave', () => {
  closeCbnd();
});

cbnd.addEventListener('mouseover', () => {
  cbnd.classList.add('activate-nav-drops-in');
  cbndUnderlay.classList.add('activate-nav-drops');
});

cbnd.addEventListener('mouseleave', () => {
  closeCbnd();
});


// Private Banking

const prbndUnderlay = document.getElementById('nav-drops-underlay-4');
const prbnd = document.getElementById('private-banking-nd');
const prbndControl = document.getElementById('private-banking-nd-control');

function closePrbnd() {
  prbnd.classList.remove('activate-nav-drops-in');
  prbndUnderlay.classList.remove('activate-nav-drops');
}

prbndControl.addEventListener('mouseover', () => {
  prbndUnderlay.classList.add('activate-nav-drops');
  prbnd.classList.add('activate-nav-drops-in');
});

prbndControl.addEventListener('mouseleave', () => {
  closePrbnd();
});

prbnd.addEventListener('mouseover', () => {
  prbnd.classList.add('activate-nav-drops-in');
  prbndUnderlay.classList.add('activate-nav-drops');
});

prbnd.addEventListener('mouseleave', () => {
  closePrbnd();
});










