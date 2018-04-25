SmoothScroll({                
    // Scrolling Core
    frameRate        : 300, // [Hz]
    animationTime    : 1500, // [ms]
    stepSize         : 120, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 8,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 20,  // 50
    accelerationMax   : 1,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    fixedBackground   : true, 
    excluded          : ''
});