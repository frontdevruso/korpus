function growingAnim(elements) {
    if (elements) {
        let allElements = Array.from(elements);
        document.addEventListener('DOMContentLoaded', function() {
            function mainAnim() {
                allElements.forEach(function(item, index) {
                    let fullHd = 12.76041;     // DESKTOP SIZE OF ITEM IN VW
                    let mediumHd = 14.50972;     // DESKTOP SIZE OF ITEM IN VW
                    let mbHeight = 44.266;         // MOBILE SIZE OF ITEM IN VW
                    let pcHeight = window.innerWidth > 1440 ? fullHd : mediumHd;
                    let currentHeight = window.innerWidth <= 500 ? mbHeight : pcHeight;
    
                    item.classList.add('disabled');
                    item.style.transitionDuration = `${allElements.length - index}s`;
                    item.style.height = `${currentHeight * (index + 1)}vw`;
                    item.style.zIndex = `${10 * (allElements.length - index)}`;
                    setTimeout(function() {
                        item.style.removeProperty('transition');
                        item.classList.add('services__item--cirlce-item');
                        item.classList.remove('disabled');

                        allElements.forEach(function(i) {
                            i.style.height = ``;
                            i.style.transitionDuration = `4s`;
                            i.querySelector('.services__item-content').style.removeProperty('height');
                            i.classList.add('services__item--ready');
                            i.classList.remove('active');
                        });

                        document.querySelector('.services__cookies').classList.remove('none');
                        setTimeout(function() {
                            document.querySelector('.services__cookies').classList.add('show');
                        }, 200);
                        
                    }, 1000 * allElements.length);
                    setTimeout(function() {
                        item.querySelector('main').classList.remove('none');
                    }, 500);
                })
            }
            mainAnim();
        })
    }
}

function openServiceItemPc(allItems) {
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

function openServiceItemMb(allItems) {
    if (allItems) {
        allItems.forEach(function(item) {
            item.querySelector('main header').addEventListener('click', function() {
                let contentHeight = Number((parseFloat((item.querySelector('.services__item-content-links').clientHeight) / window.innerWidth) * 100).toFixed(4));

                if (!item.classList.contains('disabled')) {
                    if(item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.querySelector('.services__item-content').style.height = ``;
                    } else {
                        allItems.forEach(function(i) {
                            i.style.height = ``;
                            i.style.transitionDuration = `4s`;
                            i.querySelector('.services__item-content').style.removeProperty('height');
                            i.classList.add('services__item--ready');
                            i.classList.remove('active');
                        });

                        item.querySelector('.services__item-content').style.height = `${contentHeight}vw`;

                        setTimeout(function() {
                            item.classList.add('active');
                        }, 200)
                    }
                }
            });
        });
    }
}

if (window.innerWidth <= 500) {
    openServiceItemMb(document.querySelectorAll('.services__item'));
} else {
    openServiceItemPc(document.querySelectorAll('.services__item'));
}

growingAnim(document.querySelectorAll('.services__item'));