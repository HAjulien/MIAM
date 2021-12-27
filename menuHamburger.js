function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.hamburger');
    burger.addEventListener('click', (e) => {
    navbar.classList.toggle('open-nav');
    })
}
toggleMenu();