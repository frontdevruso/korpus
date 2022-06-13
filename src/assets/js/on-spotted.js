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

addClassOnEyeContact(document.querySelectorAll('.burger span:first-child'), 0);
addClassOnEyeContact(document.querySelectorAll('.burger span:last-child'), 300);
addClassOnEyeContact(document.querySelectorAll('.services__item-paragraph'), 0);