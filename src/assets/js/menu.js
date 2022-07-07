if (document.querySelector('.burger')) {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const switchbar = document.querySelector('.switchbar');
    const body = document.querySelector('body');

    burger.addEventListener('click', function() {
        burger.classList.toggle('isOpen');

        if (burger.classList.contains('burger--menu')) {
            burger.disabled = true;
            switchbar.querySelector('.switchbar__btn').disabled = true;
            switchbar.classList.toggle('disabled');
            if (switchbar.querySelector('.switchbar__btn').disabled === true) {
                switchbar.querySelector('.switchbar__btn').disabled = false;
            }
    
            menu.classList.toggle('t-anim');
            body.classList.remove('purple-mood');
                
            menu.classList.toggle('open');
            // menu.querySelector('.menu__footer').classList.add('hide');
    
            if (document.querySelector('.second-tab').classList.contains('show')) {
                if (!menu.classList.contains('open')) {
                    setTimeout(function() {
                        body.classList.add('purple-mood');
                    }, 500);
                }
            }
    
            setTimeout(function() {
                burger.disabled = false;
                menu.classList.toggle('t-anim');
                // menu.querySelector('.menu__footer').classList.remove('hide');
            }, 1500);
        }
    });
}

function resizeMenuItem() {
    if (document.querySelectorAll('.menu__list-item')) {
        document.querySelectorAll('.menu__list-item').forEach(function(item) {
            let itemHeight = Number((parseFloat((item.clientHeight) / window.innerWidth) * 100).toFixed(4));
            
            item.addEventListener('click', function() {
                let itemActiveHeight = item.querySelector('main').clientHeight;
                let itemActiveVwHeight = (parseFloat((itemActiveHeight) / window.innerWidth) * 100).toFixed(4);

                if(item.classList.contains('active')) {
                    item.classList.toggle('active');
                    item.style.height = `${itemHeight}vw`;
                } else {
                    item.classList.toggle('active');
                    item.style.height = `${Number(itemActiveVwHeight) +  0.1388}vw`;
                }
            });
        });
    }
}

resizeMenuItem();