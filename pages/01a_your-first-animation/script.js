gsap.to(".card", { 
    duration: 1, 
    x: 80, 
    scale: 1,
    onComplete: () => {
       gsap.to(".card", { 
           y:-200,
           repeat: -1,
           yoyo: true,
           duration: 0.5,
       });
    }
});