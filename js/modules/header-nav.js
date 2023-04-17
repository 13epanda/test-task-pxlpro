const headerNav = () => {
    var navMain = document.querySelector('.page-header');
    var navToggle = document.querySelector('.page-header__toggle');

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
}

export {headerNav};