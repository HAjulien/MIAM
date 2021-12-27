function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', (e) => {
    navbar.classList.toggle('open-nav');
    })
}
toggleMenu();