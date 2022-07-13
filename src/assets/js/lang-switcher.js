if (document.querySelectorAll('[data-language-switcher]')) {
    const allLangSwitchers = document.querySelectorAll('[data-language-switcher]');
    allLangSwitchers.forEach(function(switcher) {
        let currentLang = switcher.querySelector('.lang-switcher__btn--current');
        switcher.querySelectorAll('.lang-switcher__btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                let langType = btn.getAttribute('data-language');
                let switchedLanguage = currentLang.getAttribute('data-language');

                currentLang.setAttribute('data-language', langType)
                currentLang.innerHTML = langType;
                btn.setAttribute('data-language', switchedLanguage)
                btn.innerHTML = switchedLanguage;

                currentLang.classList.add('zoom');
                btn.classList.add('hide');
                
                setTimeout(function() {
                    currentLang.classList.remove('zoom');
                    btn.classList.remove('hide');
                }, 300);
            });
        });
    });
}