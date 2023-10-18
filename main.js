AFRAME.registerShader('barrel-distortion', {
    schema: {
      src: { type: 'map', is: 'uniform' },
    },
    vertexShader: `
      varying vec2 vUv;  // Define vUv as varying
  
      void main() {
        // Update the vertex position and uv
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );  // Update the position
  
        gl_Position = projectionMatrix * mvPosition;  // Update gl_Position
      }
    `,
    fragmentShader: `
      uniform sampler2D inputTexture;
      varying vec2 vUv;
    
      void main() {
        float scale = 0.9; // Adjust scale as needed
        float distortion = 0.9; // Adjust distortion factor as needed
        vec2 uv = vUv * 2.0 - 1.0;
        vec2 uv2 = uv * (1.0 + scale * dot(uv, uv));
        uv2 = (uv2 + 1.0) / 2.0;
    
        // Apply barrel distortion
        uv2 = uv2 * (1.0 + distortion * pow(length(uv2), 2.0));
    
        gl_FragColor = texture2D(inputTexture, uv2);
      }
    `
  });

  