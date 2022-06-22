function growingAnim(elements) {
    if (elements) {
        let allElements = Array.from(elements);
        document.addEventListener('DOMContentLoaded', function() {
            allElements.forEach(function(item, index) {
                item.classList.add('disabled');
        
                item.style.transitionDuration = `${allElements.length - index}s`;
                item.style.height = `${14.652 * (index + 1)}vw`;
                item.style.zIndex = `${10 * (allElements.length - index)}`;
                setTimeout(function() {
                    item.style.removeProperty('transition');
                    // item.style.height = `${14.583}vw`;
                    // item.style.position = 'initial';
                    // item.style.top = 'initial';
                    item.classList.add('services__item--cirlce-item');
                    item.classList.remove('disabled');
                }, 1000 * allElements.length);
                setTimeout(function() {
                    item.querySelector('main').classList.remove('none');
                }, 500);
            })
        })
    }
}

function openServiceItem(allItems) {
    if (allItems) {
        allItems.forEach(function(item) {
            item.querySelector('main header').addEventListener('click', function() {
                if (!item.classList.contains('disabled')) {
                    if(item.classList.contains('active')) {
                        item.classList.remove('active');
                    } else {
                        allItems.forEach(function(i) {
                            i.style.height = ``;
                            i.style.transitionDuration = `4s`;
                            i.querySelector('.services__item-content').style.removeProperty('height');
                            i.classList.add('services__item--ready');
                            i.classList.remove('active');
                        })
        
                        item.style.height = 'fit-content';
                        setTimeout(function() {
                            item.classList.add('active');
                        }, 200)
                    }
                }
            });
        });
    }
}

openServiceItem(document.querySelectorAll('.services__item'));
growingAnim(document.querySelectorAll('.services__item'));
// let itemContent = item.querySelector('.services__item-content');
// let itemHeight = item.clientHeight;
// let itemContentHeight = itemContent.clientHeight;
// let itemActiveHeight = (parseFloat((itemHeight + itemContentHeight) / window.innerWidth) * 100).toFixed(4);

// item.style.height = `${Number(itemActiveHeight) + 0.1388}vw`;