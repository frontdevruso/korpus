function initScrollbar(scrollContainer) {
    if (scrollContainer) {
        Scrollbar.init(scrollContainer, { damping: .8 });
    }
}

initScrollbar(document.querySelector('.first-tab'));
initScrollbar(document.querySelector('.menu__container'));
initScrollbar(document.querySelector('.second-tab__wrapper'));
document.querySelectorAll('.mobile-tab').forEach(function(certainTab) {
    initScrollbar(certainTab);
});