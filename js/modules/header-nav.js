let navMain = document.querySelector('.page-header');
let navToggle = document.querySelector('.page-header__toggle');
let navItems =  document.querySelectorAll('.page-header__item');
let navLinks = document.querySelectorAll('.page-header__link');

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

//Изменение активного состояния элемента меню при скроле до раздела

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

module.export (initHeaderNav,scrollNav);
