/* menu icon navbar */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* scroll section active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = set.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    /* sticky navbar */
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100)
}

/* remove menu icon navbar when click navbar link (scroll) */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

/* swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');

const darkContainerImg = document.querySelector('#dark-container .home-img img');

darkContainerImg.src = 'imgDark.png';

toggleIcons.forEach(toggle => {
    toggle.addEventListener('click', () => {

        toggle.classList.add('disabled');
        setTimeout(() => {
            toggle.classList.remove('disabled');
        }, 1500)

        icons.forEach(icon => {
            icon.classList.toggle('bx-sun')
        });

        container.classList.toggle('active');
        darkContainer.classList.toggle('active');

    })
})

