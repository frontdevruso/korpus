if (document.querySelector('.switchbar')) {
    const firstTab = document.querySelector('.first-tab');
    const secondTab = document.querySelector('.second-tab');
    const switchbar = document.querySelector('.switchbar');

    switchbar.addEventListener('click', function() {
      switchbar.classList.toggle('active');
      firstTab.classList.toggle('hide');
      secondTab.classList.toggle('show');
    });
}