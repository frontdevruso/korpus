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
addClassOnEyeContact(document.querySelectorAll('.contact-form__thx'), 0);
addClassOnEyeContact(document.querySelectorAll('.contacts__content-info, .contacts__content-community, .contacts__content-form, .contact-form__thx, .contact-form__container'), 0);
addClassOnEyeContact(document.querySelectorAll('.team__content-employees'), 0);
addClassOnEyeContact(document.querySelectorAll('.history__content-table'), 0);

addClassOnEyeContactDelay(document.querySelectorAll('.fade-in-anim'), 100);
addClassOnEyeContactDelay(document.querySelectorAll('.about__content-links ul a'), 200);