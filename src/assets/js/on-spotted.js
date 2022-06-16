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
        }
    }
}

function addClassOnEyeContactDelay(elements, timeout) {
    if (elements) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('show');
                    }, timeout * (index + 1));
                }
            });
        });
        
        if (elements.length) {
            elements.forEach(element => {
                observer.observe(element);
            });
        }
    }
}

addClassOnEyeContact(document.querySelectorAll('.burger span:first-child'), 0);
addClassOnEyeContact(document.querySelectorAll('.burger span:last-child'), 300);
addClassOnEyeContact(document.querySelectorAll('.services__item-paragraph'), 0);

addClassOnEyeContactDelay(document.querySelectorAll('.fade-in-anim'), 100);
addClassOnEyeContactDelay(document.querySelectorAll('.about__content-links ul a'), 200);