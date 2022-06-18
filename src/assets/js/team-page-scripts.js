if(document.querySelector('.team__heading ul button')) {
    const tabButtons = document.querySelectorAll('.team__heading ul button');

    tabButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            tabButtons.forEach(function(b) {b.classList.remove('active')});
            btn.classList.add('active');
        });
    });
}