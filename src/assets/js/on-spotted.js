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
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}

addClassOnEyeContact(document.querySelectorAll('.burger span:first-child'), 0);
addClassOnEyeContact(document.querySelectorAll('.burger span:last-child'), 300);