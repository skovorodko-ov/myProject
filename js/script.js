window.addEventListener('DOMContentLoaded', function() {

    const headerButton = document.querySelector('.header__button');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const modalFon = document.querySelector('.modal__fon');
    const contentButtonsGold = document.querySelector('.content__buttons_gold');
    const contentButtonsGlass = document.querySelector('.content__buttons_glass');


    headerButton.addEventListener('click', function() {
        modal.classList.add('modal--visible');
    });
    contentButtonsGold.addEventListener('click', function() {
        modal.classList.add('modal--visible');
    });
    contentButtonsGlass.addEventListener('click', function() {
        modal.classList.add('modal--visible');
    });
    modalClose.addEventListener('click', function() {
        modal.classList.remove('modal--visible');
    });
    modalFon.addEventListener('click', function() {
        modal.classList.remove('modal--visible');
    });
    window.addEventListener('keyup', function(event) {
        if (event.keyCode === 27) {
            // console.log(e.keyCode);
            modal.classList.remove('modal--visible')
        }
    });

// свиппер blockProject

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
})
