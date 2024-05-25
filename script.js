

alert('Important: Iam Eyad Ashraf the owner of this website, most of the content of this website is FAKE I made this website as a template for my portfolio in future.')





// =============== START Header ===============
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');
navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// =============== END Header ===============

// START Scroll to top button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #181717 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
// END Scroll to top button


