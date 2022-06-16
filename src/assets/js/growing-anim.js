function growingAnim(elements) {
    let allElements = Array.from(elements);
    document.addEventListener('DOMContentLoaded', function() {
        allElements.forEach(function(item, index) {
            item.style.transitionDuration = `${allElements.length - index}s`;
            item.style.height = `${14.652 * (index + 1)}vw`;
            item.style.zIndex = `${10 * (allElements.length - index)}`;
            setTimeout(function() {
                item.style.transition = `initial`;
                item.classList.add('services__item--cirlce-item');
            }, 1000 * allElements.length);
            setTimeout(function() {
                item.querySelector('main').classList.remove('none');
            }, 500);
        })
    })
}

growingAnim(document.querySelectorAll('.services__item'));