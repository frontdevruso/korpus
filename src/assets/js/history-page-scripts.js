function yearExtended(items) {
    if (items) {
        items.forEach(function(item, index) {
            item.addEventListener('click', function() {
                items.forEach(function(i) {
                    i.style.height = '';
                    i.classList.remove('active');
                });
      
                const itemHeight = item.querySelector('main').clientHeight;
                const itemHeightVW = Number((parseFloat(itemHeight / window.innerWidth) * 100).toFixed(4));
                item.style.height = `${itemHeightVW}vw`;
                item.classList.add('active');
            });
        });
    }
}

function limitingArrowSize() {
    const allItems = document.querySelectorAll('.history__content-table-item');
    if (window.innerWidth <= 500) {
        allItems.forEach(function(item) {
            let yearSize = Number((parseFloat((item.querySelector('main time').clientWidth) / window.innerWidth) * 100).toFixed(4));
            let arrowMove = item.querySelector('main .history__content-table-item-arrow');
    
            arrowMove.style.maxWidth = `calc(100% - ${yearSize + 5.3333}vw)`;
        });
    } else { 
        allItems.forEach(function(item) {
            item.querySelector('main .history__content-table-item-arrow').style.removeProperty('max-width');
            item.style.removeProperty('height');
            item.classList.remove('active');
        });
    }
}

yearExtended(document.querySelectorAll('.history__content-table-item'));
limitingArrowSize();

window.addEventListener("resize", () => {    
    limitingArrowSize();
});