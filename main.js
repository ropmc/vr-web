AFRAME.registerShader('barrel-distortion', {
    schema: {
      src: { type: 'map', is: 'uniform' },
    },
    vertexShader: `
      attribute vec4 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      varying vec2 vUv;
  
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * position;
        vUv = uv;
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform sampler2D src;
      varying vec2 vUv;
  
      void main() {
        float scale = 0.9; // Adjust scale as needed
        float distortion = 0.9; // Adjust distortion factor as needed
        vec2 uv = vUv * 2.0 - 1.0;
        vec2 uv2 = uv * (1.0 + scale * dot(uv, uv));
        uv2 = (uv2 + 1.0) / 2.0;
  
        // Apply barrel distortion
        uv2 = uv2 * (1.0 + distortion * pow(length(uv2), 2.0));
  
        gl_FragColor = texture2D(src, uv2);
      }
    `
  });
  