function createCircleText(texts) {
    texts.forEach(function(text, index) {
        text.innerHTML += text.getAttribute('data-text').split('').map( (l,i) => `${i == 0 ? '&nbsp;&nbsp;' + l + '&nbsp;&nbsp;' : l + '&nbsp;&nbsp;'}` ).join('');
        new CircleType(text);
    });
}

createCircleText(document.querySelectorAll('.services__item-circle-title'));