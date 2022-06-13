function growingAnim(elements) {
    let allElements = Array.from(elements);
    document.addEventListener('DOMContentLoaded', function() {
        allElements.forEach(function(item, index) {
            item.style.transitionDuration = `${allElements.length - index}s`
            item.style.height = `${14.652 * (index + 1)}vw`
            setTimeout(function() {
                item.style.transition = `initial`;
            }, 1000 * allElements.length);
            setTimeout(function() {
                item.querySelector('main').classList.remove('none');
            }, 500);
        })
    })
}

growingAnim(document.querySelectorAll('.services__item'))
// reverseArray.forEach(function(item, index) {
//     item.style.height = `${(reverseArray.length - index) * 14.652}vw`
//     item.style.transitionDuration = `${reverseArray.length - (index)}s`
// })
// document.querySelectorAll('.services__item');