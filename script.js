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

  function checkMobileDevice() {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobileDevice) {
      const warningMessage = "YOU CAN'T ACCESS THIS WEBSITE ON A MOBILE PHONE. BECAUSE IT WILL LEAD TO A POOR EXPERIENCE!";
      alert(warningMessage);
    }
  }
  
  // Call the function to check if the website is being accessed on a mobile device
  checkMobileDevice();
  