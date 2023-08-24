const navBtn = document.getElementById('toggle-btn');
const nav = document.querySelector('.navigation');
const navBtnIcon = document.querySelector('.mobileNav-btn-icon');

navBtn.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navBtn.setAttribute('aria-expanded', true);
        navBtnIcon.src = './images/icon-close-menu.svg';
    } else {
        nav.setAttribute('data-visible', false);
        navBtn.setAttribute('aria-expanded', false);
        navBtnIcon.src = './images/icon-menu.svg';
    }
});

const dropDownFeatures = document.querySelector('.Features');
const dropDownFeaturesIcon = document.querySelector('.featuresIcon');
const dropdownBtnToggle = document.getElementById('dropDownToggle');


dropdownBtnToggle.addEventListener('click', () => {
    const down = dropDownFeatures.getAttribute('data-down')

    if (down === 'false') {
        dropDownFeatures.setAttribute('data-down', true);
        dropdownBtnToggle.setAttribute('aria-expanded', true);
        dropDownFeaturesIcon.src = './images/icon-arrow-up.svg';
    } else {
        dropDownFeatures.setAttribute('data-down', false);
        dropdownBtnToggle.setAttribute('aria-expanded', false);
        dropDownFeaturesIcon.src = './images/icon-arrow-down.svg';
    }
});

const dropDownCompany = document.querySelector('.Company')
const dropdownBtnToggleCompanyicon = document.querySelector('.companyIcon');
const dropdownBtnToggleCompany = document.getElementById('dropDownToggleCompany');

dropdownBtnToggleCompany.addEventListener('click', () => {
    const menuCompany = dropDownCompany.getAttribute('data-down2');

    if (menuCompany === 'false') {
        dropDownCompany.setAttribute('data-down2', true);
        dropdownBtnToggleCompany.setAttribute('aria-expanded', true)
        dropdownBtnToggleCompanyicon.src = './images/icon-arrow-up.svg';
    } else {
        dropDownCompany.setAttribute('data-down2', false);
        dropdownBtnToggleCompany.setAttribute('aria-expanded', false);
        dropdownBtnToggleCompanyicon.src = './images/icon-arrow-down.svg';
    }
});

function heroChangeImg() {
    const image = document.getElementById('heroImage');
    const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewPortWidth <= 425) {
        image.src = './images/image-hero-mobile.png';
    } else if (viewPortWidth > 430) {
        image.src = './images/image-hero-desktop.png';
    }
};

heroChangeImg();

window.addEventListener('resize', heroChangeImg);