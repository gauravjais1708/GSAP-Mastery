import gsap from "gsap";

gsap.to(".box", {
    duration: 1,
    opacity: 1,
    rotateX: 180,
    rotateY: 180,
    rotateZ: 180,
    x: 100,
    y: 100,
    z: 100,
    scale: 0.5,
    borderRadius: "10%",
    ease: "power2.out",
    delay:1,
    yoyo:true,
    repeatDelay:1,
    repeat:-1,
    
});