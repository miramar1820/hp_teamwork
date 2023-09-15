const mobileBtn = document.getElementById("mobile-btn"),
  menu = document.querySelector(".nav__menu");

if (mobileBtn) {
  mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("active");
    menu.classList.toggle("show");
  });
}

function scrollHeader() {
  const header = document.querySelector(".header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 20) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



const toggleSwitch = document.querySelector('.nav__theme .checkbox');
const toggleLabel = document.querySelector('.nav__theme');

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add("dark");
    toggleLabel.classList.add('enabled');
    // localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove("dark");
    toggleLabel.classList.remove('enabled');
    // localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
