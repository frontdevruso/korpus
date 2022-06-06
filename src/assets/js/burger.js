if (document.querySelector('.burger')) {
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', function() {
        burger.classList.toggle('isOpen');
    });
}