if (document.querySelector('.services__cookies')) {
    const cookies = document.querySelector('.services__cookies');
    const allCookiesBtns = document.querySelectorAll('.cookies-btn');

    allCookiesBtns.forEach(function(cookieBtn) {
        cookieBtn.addEventListener('click', function() {
            cookieBtn.classList.add('active');
            cookies.classList.remove('show');
        })
    });
}