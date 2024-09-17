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


