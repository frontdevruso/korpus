function manangeActiveBtns(allBtns) {
    if (allBtns) {
        allBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                allBtns.forEach(function(b) {b.classList.remove('active')});
                btn.classList.add('active');
            });
        });
    }
}

manangeActiveBtns(document.querySelectorAll('.team__heading ul button'));
manangeActiveBtns(document.querySelectorAll('.history__heading ul button'));
manangeActiveBtns(document.querySelectorAll('.cookies__panel-btns button'));
manangeActiveBtns(document.querySelectorAll('.cookies__panel-btns button'));

document.querySelectorAll('.services__item-content-products-items-tags').forEach(function(btns) {
    manangeActiveBtns(btns.querySelectorAll('button'));
})