if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation, false);
    console.log('Gyroscope data will be logged.');
  
    function handleOrientation(event) {
      const gamma = event.gamma;  // Rotation around the z-axis (left to right)
      const beta = event.beta;    // Rotation around the x-axis (front back)
  
      console.log('Gamma (Z-axis rotation):', gamma);
      console.log('Beta (X-axis rotation):', beta);
    }
  } else {
    console.log('DeviceOrientationEvent is not supported on this device.');
  }