// Apply Shery.js image effect to the #back element
Shery.imageEffect("#back", {
  style: 5, // Visual effect style
  config: {
    // Effect configuration values
    a: { value: 1.49, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    aspect: { value: 1.8822947576656774 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.33, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { value: 1, range: [1, 64] },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.59, range: [0, 10] },
    metaball: { value: 0.21, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.47, range: [0, 2] },
    noise_scale: { value: 12.15, range: [0, 100] },
  },
  gooey: true, // Enable gooey blending
});

// Select all elements with class .elem
var elms = document.querySelectorAll(".elem");

// Loop through each .elem
elms.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1"); // Grab all h1s inside .elem
  var index = 0; // Track current h1 index
  var animating = false; // Prevent overlapping animations

  // Add click listener on the #main container
  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;

      // Animate current h1 out of view
      gsap.to(h1s[index], {
        top: "-=100%", // Move upward
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          // Reset position to bottom for re-entry later
          gsap.set(this._targets[0], { top: "100%" });
          animating = false; // Allow new animations
        },
      });

      // Move to next h1 (loop back if last one reached)
      index === h1s.length - 1 ? (index = 0) : index++;

      // Animate next h1 into view
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
