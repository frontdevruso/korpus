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

switchingTabs(document.querySelectorAll('.contacts [data-tab-btn]'), document.querySelectorAll('.contacts [data-tab]'), document.querySelector('.contacts__content'))
switchingTabs(document.querySelectorAll('.team [data-tab-btn]'), document.querySelectorAll('.team [data-tab]'), document.querySelector('.team__content'));