let navMain = document.querySelector('.page-header');
let navToggle = document.querySelector('.page-header__toggle');
let navItems =  document.querySelectorAll('.page-header__item');
let navLinks = document.querySelectorAll('.page-header__link');
    
const initVh = () => {
    let vh = window.innerHeight / 100;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const smoothScroll = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
        });
    }
};

const closeMenu = () => {
    navMain.classList.add('page-header--closed');
    navMain.classList.remove('page-header--opened');
    document.body.classList.remove('lock');

    navLinks.forEach((el) => {
        if (el.href !== '') {
            el.removeEventListener('click', closeMenu);
        }
    })
}

const openMenu = () => {
    navMain.classList.remove('page-header--closed');
    navMain.classList.add('page-header--opened');
    document.body.classList.add('lock');
}

const initHeaderNav = () => {
    navMain.classList.add('page-header--closed');

    navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('page-header--closed')) {
            openMenu();

            navLinks.forEach((el) => {
                if (el.href !== '') {
                    el.addEventListener('click', closeMenu);
                }
            })

        } else {
            closeMenu();
        }
    });
}

const scrollNav = () => {
    if (window.innerWidth > 768) {
        let heightMenu = document.querySelector('.page-header__nav').clientHeight;
        let positionSelects = [];
        let currentActive = null;

        document.querySelectorAll('[data-nav]').forEach((el) => {
            positionSelects.push({
                pos: el.offsetTop,
                id: el.getAttribute('data-nav')
            })
        });

        positionSelects=positionSelects.reverse();

        window.addEventListener('scroll', () => {
            let scrollDistance = window.scrollY;

            for(var i = 0 ; i < positionSelects.length; i++) {
                if(positionSelects[i].pos - heightMenu <= scrollDistance) {
                    if(currentActive !==i) {
                        currentActive = i;
                        navLinks.forEach((el) => {
                            if (el.classList.contains('active')) {
                                el.classList.remove('active');
                            }
                        })
                        navItems[positionSelects[i].id].querySelector('a').classList.add('active');
                    }
                    break;
                }
                if((currentActive = positionSelects.length) && (positionSelects[i].pos > scrollDistance)) {
                    navItems[positionSelects[i].id].querySelector('a').classList.remove('active');
                }
            }
        });
    }
};

window.addEventListener('DOMContentLoaded', () => {
    initVh();
    smoothScroll();
    initHeaderNav();
    scrollNav();

    window.addEventListener('load', () => { 
        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                center: [56.840646, 60.612180],
                zoom: 15,
                controls: [
                    'zoomControl',
                ]
            });

            var myPlacemark = new ymaps.Placemark([56.840646, 60.612180], {
            hintContent: 'Офис 315, PXL PRO'
            },{
            iconLayout: 'default#image',

            iconImageHref: 'img/mobile/map-pin.png',
            iconImageSize: [133, 87],
            iconImageOffset: [-66, -87],
            });

            myMap.geoObjects.add(myPlacemark);
        });
    });
});
        