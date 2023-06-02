window.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
    function applyDarkTheme() {
      document.body.classList.add("dark-mode");
      darkModeToggle.checked = true;
    }
  
    function removeDarkTheme() {
      document.body.classList.remove("dark-mode");
      darkModeToggle.checked = false;
    }
  
    function toggleDarkTheme() {
      if (darkModeToggle.checked) {
        applyDarkTheme();
      } else {
        removeDarkTheme();
      }
    }
  
    darkModeToggle.addEventListener("change", toggleDarkTheme);
  
    if (darkModeMediaQuery.matches) {
      applyDarkTheme();
    }
  });

window.addEventListener("DOMContentLoaded", function () {
    const headerTitle = document.getElementById("header-title");
    const profilePhoto = document.querySelector(".profile-photo");
  
    const centerHeader = function () {
      const containerWidth = profilePhoto.offsetWidth;
      const headerWidth = headerTitle.offsetWidth;
      const marginLeft = (containerWidth - headerWidth) / 2;
      headerTitle.style.marginLeft = `${marginLeft}px`;
    };
  
    centerHeader();
    window.addEventListener("resize", centerHeader);
  
    const revealText = function () {
      const revealSpan = document.querySelector(".reveal");
      const text = revealSpan.textContent;
      const characters = text.split("");
      revealSpan.textContent = "";
  
      characters.forEach(function (char, index) {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.animationDelay = `${index * 100}ms`;
        revealSpan.appendChild(charSpan);
      });
    };
  
    revealText();
  });
  

  function autoRefresh(refreshInterval) {
    setTimeout(function() {
      location.reload();
    }, refreshInterval);
  }
  
  // Usage: autoRefresh(10000); // Refresh every 10 seconds

