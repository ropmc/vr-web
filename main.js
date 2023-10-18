document.addEventListener('DOMContentLoaded', function() {
    // Get the <html> element
    const htmlElement = document.querySelector('html');
  
    // Check if the <html> element has the 'a-fullscreen' class
    if (htmlElement.classList.contains('a-fullscreen')) {
      // Remove the 'a-fullscreen' class
      htmlElement.classList.remove('a-fullscreen');
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the specified class
    const element = document.querySelector('.a-canvas.a-grab-cursor');
  
    // Check if the element is found
    if (element) {
      // Set the CSS properties
      element.style.position = 'relative';
      element.style.width = '100vw';
      element.style.height = '100vh';
    } else {
      console.error('Element with class ".a-canvas.a-grab-cursor" not found.');
    }
  });
