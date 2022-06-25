function initializeMobileTabs(links) {
    if (links) {
        links.forEach(function(link) {
            const allMobileTabs = document.querySelectorAll('.mobile-tab');
            allMobileTabs.forEach(function(mobileTab) {
                if (mobileTab.getAttribute('data-mobile-tab-container') === link.getAttribute('data-mobile-tab-links')) {
                    const mobileTabSliderOnPage = mobileTab.querySelector('.mobile-tab__slider');
                    const mobileTabSliderArrowNext = mobileTab.querySelector('.arrows-item-mobile-tab--next');
                    const mobileTabSliderArrowPrev = mobileTab.querySelector('.arrows-item-mobile-tab--prev');
                    
                    const allTabBtns = link.querySelectorAll('[data-mobile-tab-btn]');
                    const burger = document.querySelector('.burger');
        
                    let mobileSliderTab = new Swiper(mobileTabSliderOnPage, {
                        spaceBetween: 60,
                        allowTouchMove: false,
                        slidesPerView: "auto",
                        effect: "fade",
                        // autoHeight: true,
                
                        navigation: {
                            nextEl: mobileTabSliderArrowNext,
                            prevEl: mobileTabSliderArrowPrev,
                        },
                    });
            
                    allTabBtns.forEach(function(btn) {
                        if(window.innerWidth <= 500) {
                            btn.addEventListener('click', function() {
                                let ordinalNumber = Number(btn.getAttribute('data-mobile-tab-btn'));
                                
                                burger.classList.toggle('burger--menu');
                                burger.classList.toggle('burger--mobile-tab');
                                burger.classList.toggle('isOpen');
    
                                mobileTab.classList.toggle('open');
                                
                                mobileSliderTab.slideTo(ordinalNumber - 1);
                            })
                        }
                        window.addEventListener("resize", () => {
                            if(window.innerWidth <= 500) {
                                btn.addEventListener('click', function() {
                                    let ordinalNumber = Number(btn.getAttribute('data-mobile-tab-btn'));
                                    
                                    burger.classList.toggle('burger--menu');
                                    burger.classList.toggle('burger--mobile-tab');
                                    burger.classList.toggle('isOpen');
        
                                    mobileTab.classList.toggle('open');
                                    
                                    mobileSliderTab.slideTo(ordinalNumber - 1);
                                })
                            }
                        });
                    });

                    burger.addEventListener('click', function() {
                        if (burger.classList.contains('burger--mobile-tab')) {
                            allMobileTabs.forEach(function(tab) {
                                if (tab.classList.contains('open')) {
                                    tab.classList.remove('open');
                                }
                            })
                            burger.classList.remove('burger--mobile-tab');
                            burger.classList.add('burger--menu');
                        }
                    });
                }
            })

        })
    }
}

initializeMobileTabs(document.querySelectorAll('[data-mobile-tab-links]'));