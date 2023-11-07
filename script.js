const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-theme');
});

window.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    
    function toggleFooterVisibility() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.add("show-footer");
      } else {
        footer.classList.remove("show-footer");
      }
    }
    
    toggleFooterVisibility();
    window.addEventListener("scroll", toggleFooterVisibility);
  });
  
  function redirectToMobile() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    if (isMobile) {
      window.location.href = "portable device/mobile.html";
    }
  }
  
  window.onload = redirectToMobile;
  