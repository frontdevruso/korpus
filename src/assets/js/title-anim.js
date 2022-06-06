function addClassOnEyeContact(elements, timeout) {
    if (elements) {        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('show');
                    }, timeout);
                }
            });
        });
        
        if (elements.length) {
            elements.forEach(element => {
                observer.observe(element);
            });
        } else { observer.observe(elements) }
    }
}

function titleAnimation(allTitles) {
    allTitles.forEach(function(title, index) {
        const template = title.getAttribute('data-title').split('').map( (l,i) => `<span class="char${i + 1}">${l == ' ' ? '&nbsp;' : l}</span>` ).join('');
        title.innerHTML = '';
        title.innerHTML += template;

        title.querySelectorAll('span').forEach(function(char, index) {
            addClassOnEyeContact(char, 200 * (index + 0.6));
        });
    });
}

if (document.querySelectorAll('.services__item h2')) {
    const titles = document.querySelectorAll('.services__item h2');
    titleAnimation(titles);
}