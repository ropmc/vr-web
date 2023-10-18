/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
    init: function () {
      this.onClick = this.onClick.bind(this);
    },
    play: function () {
      document.body.addEventListener('click', this.onClick);
    },
    pause: function () {
      document.body.removeEventListener('click', this.onClick);
    },
    onClick: function (evt) {
      var videoEl = this.el.getAttribute('material').src;
      if (!videoEl) { return; }
      this.el.object3D.visible = true;
      videoEl.play();
    }
  });