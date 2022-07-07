if (document.querySelector('.cookies')) {
    function validateCookiesDesc() {
        const allSettingsItems = document.querySelectorAll('.cookies__settings-item');
        allSettingsItems.forEach(function(item) {
            item.querySelector('header .switcher-checkbox').addEventListener('change', function() {
                item.classList.toggle('show');
                let contentContainerHeight = Number((parseFloat((item.querySelector('.cookies__settings-item-content main').clientHeight) / window.innerWidth) * 100).toFixed(4));
                let contentContainerItem = item.querySelector('.cookies__settings-item-content');
    
                if(!item.classList.contains('show')) {
                    contentContainerItem.style.height = ``;
                } else {
                    contentContainerItem.style.height = `${contentContainerHeight}vw`;
                }
                
                window.addEventListener("resize", () => {    
                    contentContainerItem.style.height = ``;
                    item.classList.remove('show');
                });
            });

            if(item.querySelector('header .switcher-checkbox input').checked) {
                let contentContainerItem = item.querySelector('.cookies__settings-item-content');
                let contentContainerHeight = Number((parseFloat((item.querySelector('.cookies__settings-item-content main').clientHeight) / window.innerWidth) * 100).toFixed(4));
                contentContainerItem.style.height = `${contentContainerHeight}vw`;
            }
        }); 
    }

    validateCookiesDesc();
}