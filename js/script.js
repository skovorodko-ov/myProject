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


// слайдер блока fantazy
   
    let container = document.querySelector('.fantasy__container');
    let slide = document.querySelector('.fantasy__containerImg');
    let i;
    let y = document.querySelectorAll('.container__content');
    // let x = event.target;
    y = Array.prototype.slice.call(y);
    

    container.addEventListener('click', function(event){
        for(i = 0; i<container.children.length; i++){
            container.children[i].classList.remove('highlight');

            slide.children[i].classList.remove('slideActive');
        };

            event.target.classList.add('highlight');
            let x = event.target;
            console.log(x);
            // console.log(.indexOf(3));
            console.log(y.indexOf(x));
            slide.children[y.indexOf(x)].classList.add('slideActive');
        }
        
    );

})
