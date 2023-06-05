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

  function blockMobileAccess() {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    if (isMobileDevice) {
      const warningMessage = "YOU CAN'T ACCESS THIS WEBSITE ON A MOBILE PHONE. BECAUSE IT WILL LEAD TO A POOR EXPERIENCE!";
      alert(warningMessage);
      window.location.href = "mobile.html"; // Replace "mobile.html" with the URL of your mobile-specific page
    }
  }
  
  // Call the function to block mobile access
  blockMobileAccess();

  function redirectToMathPage() {
    const isMacOriPhone = /Mac|iPhone/i.test(navigator.platform);
    
    if (isMacOriPhone) {
      window.location.href = "math.html"; // Replace "math.html" with the URL of the math problem page
    }
  }
  
  // Call the function to check the device and redirect if necessary
  redirectToMathPage();
  
  
  // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Select the element with the 'reveal' class
  var revealElement = document.querySelector('.reveal');

  // Get the text content of the element
  var text = revealElement.textContent;

  // Clear the existing text content
  revealElement.textContent = '';

  // Create a variable to store the current text length
  var currentLength = 0;

  // Define a function to reveal the text gradually
  function revealText() {
    // Check if the current length is less than the total length
    if (currentLength < text.length) {
      // Append the next character to the reveal element
      revealElement.textContent += text[currentLength];

      // Increment the current length
      currentLength++;

      // Call the function again after a longer delay
      setTimeout(revealText, 200); // Adjust the delay here (in milliseconds) for a slower speed
    }
  }

  // Call the function to start the text reveal animation
  revealText();
});


// Get the navbar items
const navItems = document.querySelectorAll('.nav-bar a');

// Add event listeners to each navbar item
navItems.forEach(item => {
  item.addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the href attribute of the clicked item
    const href = item.getAttribute('href');

    // Redirect to the specified page
    window.location.href = href;
  });
});
