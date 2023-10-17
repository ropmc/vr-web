function onClick() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // Handle iOS 13+ devices.
      DeviceMotionEvent.requestPermission()
        .then((state) => {
          if (state === 'granted') {
            window.addEventListener('devicemotion', handleOrientation);
          } else {
            console.error('Request to access the orientation was rejected');
          }
        })
        .catch(console.error);
    } else {
      // Handle regular non iOS 13+ devices.
      window.addEventListener('devicemotion', handleOrientation);
      
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleOrientation, false);
        console.log('Gyroscope data will be logged.');
      
        function handleOrientation(event) {
          const gamma = event.gamma;  // Rotation around the z-axis (left to right)
          const beta = event.beta;    // Rotation around the x-axis (front back)
      
          console.log('Gamma (Z-axis rotation):', gamma);
          console.log('Beta (X-axis rotation):', beta);
          const gyroscope = document.getElementById('gyroscope');
          console.log(gyroscope);
          gyroscope.innerHTML = `Gamma: ${gamma}    Beta: ${beta} `;
        }
      } else {
        console.log('DeviceOrientationEvent is not supported on this device.');
      }
    }
  }

