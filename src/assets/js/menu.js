if (document.querySelector('.burger')) {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const switchbar = document.querySelector('.switchbar');
    const body = document.querySelector('body');

    burger.addEventListener('click', function() {
        burger.disabled = true;
        switchbar.querySelector('.switchbar__btn').disabled = true;
        switchbar.classList.toggle('disabled');
        if (switchbar.querySelector('.switchbar__btn').disabled === true) {
            switchbar.querySelector('.switchbar__btn').disabled = false;
        }

        menu.classList.toggle('t-anim');
        burger.classList.toggle('isOpen');
        body.classList.remove('purple-mood');
            
        menu.classList.toggle('open');
        menu.querySelector('.menu__footer').classList.add('hide');

        if (document.querySelector('.second-tab').classList.contains('show')) {
            if (!menu.classList.contains('open')) {
                setTimeout(function() {
                    body.classList.add('purple-mood');
                }, 500);
            }
        }

        setTimeout(function() {
            burger.disabled = false;
            menu.classList.toggle('t-anim');
            menu.querySelector('.menu__footer').classList.remove('hide');
        }, 1500);
    });
}