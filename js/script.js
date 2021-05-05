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


    // свиппер howWeWork
    const swiper1 = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
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

    // слайдер блок howWeWork

    let clideActiv;
    let slides = document.getElementsByClassName('control');
    let conteinerImg = document.querySelector('.right__images');
    let aim = document.querySelector('.howWeWork__slider');
    let conteinerNum = document.querySelector('.right__numbers');

    aim.addEventListener('click', function(){

        console.log(slides);
        let n = document.querySelectorAll('.swiper-slide-active')[2];
        // console.log(n);
        slides = Array.prototype.slice.call(slides);
        // console.log(slides.indexOf(n));
        if (slides.indexOf(n) === 0){
            clideActiv = slides.length - 3;
        } else if (slides.indexOf(n) === (slides.length-1)) {
            clideActiv = 0;
        } else {
            clideActiv = slides.indexOf(n) - 1;
        };
        console.log(clideActiv);
        for (i=0; i<conteinerImg.children.length; i++) {
            conteinerImg.children[i].classList.remove('right__active');
            conteinerNum.children[i].classList.remove('numbers__active');
        };
        conteinerImg.children[clideActiv].classList.add('right__active');
        conteinerNum.children[clideActiv].classList.add('numbers__active');
    });

    // анимация иконок

    const animIcons = document.querySelectorAll('.icon__image');

    if (animIcons.length > 0) {
        window.addEventListener('scroll', animOnScrol);
        function animOnScrol(){
            for (let index = 0; index < animIcons.length; index++) {
                const animIcon = animIcons[index];
                const animIconHeight = animIcon.offsetHeight;
                const animIconOffset = offset(animIcon).top;
                const animStart = 1;

                // let animIconPoint = window.innerHeight - animIconHeight / animStart;
                let animIconPoint = window.innerHeight / 2;

                if (animIconHeight > window.innerHeight){
                    animIconPoint = window.innerHeight - window.innerHeight / animStart;
                };

                if ((pageYOffset > animIconOffset - animIconPoint) && pageYOffset < (animIconOffset + animIconHeight)){
                    animIcon.classList.add('iconImg__activ');
                } else {animIcon.classList.remove('iconImg__activ')};
            };
        };
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft };
        };
        animOnScrol();
    }
    

})
