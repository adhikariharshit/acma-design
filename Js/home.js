const button_click = document.querySelector('.ham-menu-cont');
const responsive = document.querySelector('.responsive-head-nav');
let menuOpen = false;

button_click.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
        responsive.style.display = 'block';
    } else {
        responsive.style.display = 'none';
    }

});
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        responsive.style.display = 'none';
        menuOpen = false; 
    }
});