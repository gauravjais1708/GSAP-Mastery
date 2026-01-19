import gsap from "gsap"; 

const button = document.querySelector('.scroll-to-top');
let floatingButton = gsap.to(button, {
    duration: 1.5,
    y: -10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.out',
});
button.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        button.classList.add('show');
    } 
    if(!isFloating){
        floatingButton.play();
        isFloating = true;
    }else
    {
        button.classList.remove('show');
    }
    
});