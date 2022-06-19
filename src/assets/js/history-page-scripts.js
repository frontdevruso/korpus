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
                console.log(itemHeightVW);
                item.style.height = `${itemHeightVW}vw`;
                item.classList.add('active');
            });
        });
    }
}

yearExtended(document.querySelectorAll('.history__content-table-item'));