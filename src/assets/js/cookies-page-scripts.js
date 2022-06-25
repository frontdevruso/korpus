if (document.querySelector('.cookies')) {
    function validateCookiesDesc() {
        const allSettingsItems = document.querySelectorAll('.cookies__settings-item');
        allSettingsItems.forEach(function(item) {
            item.querySelector('header main button').addEventListener('click', function() {
                item.classList.toggle('show');
                let contentContainerHeight = Number((parseFloat((item.querySelector('.cookies__settings-item-content main').clientHeight) / window.innerWidth) * 100).toFixed(4));
                let contentContaineritem = item.querySelector('.cookies__settings-item-content');
    
                if(!item.classList.contains('show')) {
                    contentContaineritem.style.height = ``;
                } else {
                    contentContaineritem.style.height = `${contentContainerHeight}vw`;
                }
                
                window.addEventListener("resize", () => {    
                    contentContaineritem.style.height = ``;
                    item.classList.remove('show');
                });
            });
        }); 
    }

    validateCookiesDesc();
}