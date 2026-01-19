import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (tab) => {

    const tabBounds = tab.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();
    
    const width = tabBounds.width;
    const offsetLeft = tabBounds.left-rowBounds.left;

    gsap.to(indicator,{
        x: offsetLeft,
        width: width,
        duration: 0.4,
        ease: 'back.out(3)',
    })
    
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        updateIndicator(tab);
    })
})

updateIndicator(document.querySelector('.tab.active'));
