function switchingTabs(allTabsBtns, allTabs, tabsContent) {
    if (tabsContent) {
        allTabsBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                let serialNumber = this.getAttribute('data-tab-btn');
                let currentActiveTab = tabsContent.querySelector('.active');
                
                if (currentActiveTab.getAttribute('data-tab') === serialNumber) {
                    return
                } else {
                    allTabs.forEach(function(tab) {
                        tab.classList.remove('active');
                        tab.classList.remove('show');
                        tab.classList.add('none');
                        if(tab.getAttribute('data-tab') === serialNumber) {
                            tab.classList.add('active');
                            tab.classList.remove('none');
                        }
                    });
                }
            }); 
        });
    }
} 

function switchingSecondTabs(allTabsBtns, allTabs, tabsContent) {
    if (tabsContent) {
        allTabsBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                let serialNumber = this.getAttribute('data-second-tab-btn');
                let currentActiveTab = tabsContent.querySelector('.open');

                if (currentActiveTab ? currentActiveTab.getAttribute('data-second-tab') === serialNumber : false) {
                    return
                } else {
                    allTabs.forEach(function(tab) {
                        tab.classList.remove('open');
                        tab.classList.remove('show');
                        tab.classList.add('none');
                        if(tab.getAttribute('data-second-tab') === serialNumber) {
                            tab.classList.add('open');
                            tab.classList.remove('none');
                        }
                    });
                }
            }); 
        });
    }
} 

switchingTabs(document.querySelectorAll('.contacts [data-tab-btn]'), document.querySelectorAll('.contacts [data-tab]'), document.querySelector('.contacts__content'))
switchingTabs(document.querySelectorAll('.team [data-tab-btn]'), document.querySelectorAll('.team [data-tab]'), document.querySelector('.team__content'));
switchingTabs(document.querySelectorAll('.history [data-tab-btn]'), document.querySelectorAll('.history [data-tab]'), document.querySelector('.history__content'));

document.querySelectorAll('.services__item-content-products-items').forEach(function(tab) {
    switchingSecondTabs(tab.querySelectorAll('.services__item-content-products-items-tags [data-second-tab-btn]'), tab.querySelectorAll('.services__item-content-products-items-scope [data-second-tab]'), tab);
});


// SERVICE ITEMS
document.querySelectorAll('.services__item-content').forEach(function(item) {
    if (item) {
        item.querySelectorAll('.services__item-content-links .arrow-link').forEach(function(btn) {
            btn.addEventListener('click', function() {
                let serialNumber = this.getAttribute('data-tab-btn');
                let currentActiveTab = this.parentElement.parentElement.querySelector('.services__item-content-products .active');

                console.log(this.parentElement.parentElement)

                if (currentActiveTab.getAttribute('data-tab') === serialNumber) {
                    return
                } else {
                    this.parentElement.parentElement.querySelectorAll('.services__item-content-products-items').forEach(function(tab) {
                        tab.classList.remove('active');
                        tab.classList.remove('show');
                        tab.classList.add('none');
                        if(tab.getAttribute('data-tab') === serialNumber) {
                            tab.classList.add('active');
                            tab.classList.remove('none');
                        }
                    });
                }
            });
        });
    }
});