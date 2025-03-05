const navMenu = document.getElementById('nav-menu'),  
navToggle = document.getElementById('nav-toggle') ;
// ==========menu show-hide=============
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle')

})


// =================style-switcher start====================
const styleSwitcher = document.getElementById('style-switcher')
switcherToggle = document.getElementById('switcher-toggle')
switcherClose = document.getElementById('switcher-close')
// switcher-show===================
switcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.add('show-switcher')
})
switcherClose.addEventListener('click', () => {
    styleSwitcher.classList.remove('show-switcher')
})
// theme colors============================
const colors = document.querySelectorAll('.style-switcher-color')
colors.forEach((color)=> {
    color.onclick = () =>{
        const activeColor = color.style.getPropertyValue('--hue');
        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color');
        document.documentElement.style.setProperty('--hue', activeColor);
    }
})

// light dark mood==============
 let currentTheme = 'light';
 document.body.className =  currentTheme;

 document.querySelectorAll('input[name="body-theme"]').forEach((input) =>{ input.addEventListener('change', () =>{
    currentTheme= input.value;
     document.body.className = currentTheme;
 })
})
// =================style-switcher ends====================
// // ================================services swiper starts
// var ServicesSwiper = new Swiper(".services-swiper", {
//     spacebetween: 32;
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true, 
//     },

//     breakpoints: {
     
//         768: {
//           slidesPerView: 2,
       
//         },
//         1024: {
//           slidesPerView: 3,
       
//         },
//       },
//   });