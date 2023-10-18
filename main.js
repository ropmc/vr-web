function detectMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };


document.addEventListener('DOMContentLoaded', (event) => {
    const isMobile = detectMobileDevice();
    const fullscreenButton = document.getElementById('fullscreen-btn');
  
    if (isMobile) {
      fullscreenButton.style.display = 'block';  // This shows the button if the user is on a mobile device
    } else {
      fullscreenButton.style.display = 'none';  // This ensures the button is hidden on desktops
    }
  
    // ... [The rest of your DOMContentLoaded listener code, if you have any]
  });