if (document.querySelectorAll('[data-language-switcher]')) {
    const allLangSwitchers = document.querySelectorAll('[data-language-switcher]');
    allLangSwitchers.forEach(function(switcher) {
        switcher.querySelectorAll('button').forEach(function(btn) {
            btn.addEventListener('click', function() {
                let currentLanguage = btn.getAttribute('data-language');
                switcher.setAttribute('data-language-switcher', currentLanguage);
            });
        });
    });
}