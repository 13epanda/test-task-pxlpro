const headerNav = () => {
    let navMain = document.querySelector('.page-header');
    let navToggle = document.querySelector('.page-header__toggle');
    let navItems =  document.querySelectorAll('.page-header__item');


    //Скрытие меню, видимое по умолчанию
    navMain.classList.add('page-header--closed');

    navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('page-header--closed')) {
        navMain.classList.remove('page-header--closed');
        navMain.classList.add('page-header--opened');
        } else {
            navMain.classList.add('page-header--closed');
            navMain.classList.remove('page-header--opened');
        }
    });

    //Изменение активного состояния элемента меню при скроле до раздела
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        if (window.innerWidth > 768) {
            document.querySelectorAll('[data-nav]').forEach((el) => {
                if (el.offsetTop - document.querySelector('.page-header__nav').clientHeight <= scrollDistance) {
                    document.querySelectorAll('.page-header__nav a').forEach((el) => {
                        if (el.classList.contains('active')) {
                            el.classList.remove('active');
                        }
                    })

                    let idNavItem = el.getAttribute('data-nav');
                    navItems[idNavItem].querySelector('a').classList.add('active');
                }
            });
        }
    });
}

export {headerNav};