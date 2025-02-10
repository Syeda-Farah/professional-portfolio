const navMenu = document.getElementById('nav-menu'),  
navToggle = document.getElementById('nav-toggle') ;
// ==========menu show-hide=============
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle')

})