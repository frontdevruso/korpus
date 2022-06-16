if (document.querySelector('.burger')) {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const switchbar = document.querySelector('.switchbar');

    burger.addEventListener('click', function() {
        burger.disabled = true;
        switchbar.querySelector('.switchbar__btn').disabled = true;
        switchbar.classList.toggle('disabled');
        if (switchbar.querySelector('.switchbar__btn').disabled === true) {
            switchbar.querySelector('.switchbar__btn').disabled = false;
        }

        menu.classList.toggle('t-anim');
        burger.classList.toggle('isOpen');
            
        menu.classList.toggle('open');
        menu.querySelector('.menu__footer').classList.add('hide');

        setTimeout(function() {
            burger.disabled = false;
            menu.classList.toggle('t-anim');
            menu.querySelector('.menu__footer').classList.remove('hide');
        }, 1500);
    });
}