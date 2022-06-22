if (document.querySelector('.cookies')) {
    const allSettingsItems = document.querySelectorAll('.cookies__settings-item');
    allSettingsItems.forEach(function(item) {
        item.querySelector('header main button').addEventListener('click', function() {
            item.classList.toggle('show');
        });
    }); 
}