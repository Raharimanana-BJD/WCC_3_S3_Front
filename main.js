import './src/scss/styles.scss';

const links = document.querySelectorAll('.primary-navigation a');
const primaryNavigation = document.querySelector('.primary-navigation');
const navMobileToggler = document.querySelector('.nav-mobile-toggler');
const [top, middle, bottom] = document.querySelectorAll('.nav-mobile-toggler > *')

const activeLink = (e) => {
    e.preventDefault();
    const link = e.target;
    if(link.classList.contains('active')) {
        return;
    } else {
        link.parentElement.querySelector('.active').classList.remove('active');
        link.classList.add('active');
    }
}

const showAndHideMobileMenu = () => {
    primaryNavigation.classList.toggle('active');
top.classList.toggle('active')
middle.classList.toggle('active')
bottom.classList.toggle('active')
}

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        activeLink(e);
        primaryNavigation.classList.remove('active');
    });
})

navMobileToggler.addEventListener('click', showAndHideMobileMenu);