 /* Модальное окно */
 (function(){

  document.addEventListener('DOMContentLoaded', function() {

    var modalButtons = document.querySelectorAll('.btn-modal'),
        overlay      = document.querySelector('.modal-js-overlay'),
        closeButtons = document.querySelectorAll('.modal-js-close');

    modalButtons.forEach(function(item){

       item.addEventListener('click', function(e) {

          e.preventDefault();

          var modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
              modalElem.classList.add('modal--active');
              overlay.classList.add('modal--active');
       });
    });


    closeButtons.forEach(function(item){

       item.addEventListener('click', function(e) {
          var parentModal = this.closest('.modal');

          parentModal.classList.remove('modal--active');
          overlay.classList.remove('modal--active');
       });

    });

     document.body.addEventListener('keyup', function (e) {
         var key = e.keyCode;

         if (key == 27) {

             document.querySelector('.modal.modal--active').classList.remove('modal--active');
             document.querySelector('.modal-overlay').classList.remove('modal--active');
         };
     }, false);

     overlay.addEventListener('click', function() {
          document.querySelector('.modal.modal--active').classList.remove('modal--active');
         this.classList.remove('modal--active');
     });
     /* отыкрытие модального окна по счетчику */

/*      function modalTimesUp(){
      var modalTime = document.querySelector('.modal[data-modal="timeModal"]');
      modalTime.classList.add('modal--active');
            overlay.classList.add('modal--active');
    };
    setTimeout(modalTimesUp, 30); */

    /* ---------- */
  });

  })();



/* кнопка связи в соц сетях */

(function(){
  let toggle = document.getElementById('nav-toggle')
  let content = document.getElementById('nav-content')

  let show = () => {
    toggle.setAttribute('aria-expanded', true)
    content.setAttribute('aria-hidden', false)
  }

  let hide = () => {
    toggle.setAttribute('aria-expanded', false)
    content.setAttribute('aria-hidden', true)
  }

  toggle.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(toggle.getAttribute('aria-expanded')) ? hide() : show()
  })

  let handleClosure = event => !content.contains(event.target) && hide()

  window.addEventListener('click', handleClosure)
  window.addEventListener('focusin', handleClosure)
})();
console.log('hello');
(function(){
  let askToggle = document.getElementById('ask-toggle')
  let askContent = document.getElementById('ask-content')

  let show = () => {
    askToggle.setAttribute('aria-expanded', true)
    askContent.setAttribute('aria-hidden', false)
    askToggle.querySelector("use").setAttribute("href", "#close_message");
  }

  let hide = () => {
    askToggle.setAttribute('aria-expanded', false)
    askContent.setAttribute('aria-hidden', true)
    askToggle.querySelector("use").setAttribute("href", "#message");
  }

  askToggle.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(askToggle.getAttribute('aria-expanded')) ? hide() : show()
  })

  let handleClosure = event => !askContent.contains(event.target) && hide()

  window.addEventListener('click', handleClosure)
  window.addEventListener('focusin', handleClosure)
})();
(function(){
  function initAcc(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .accordion__btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('accordion__container--active')){
                if(option==true){
                    var elementList = document.querySelectorAll(elem+' .accordion__container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('accordion__container--active');
                    });
                }
                e.target.parentElement.classList.add('accordion__container--active');
            }else{
                e.target.parentElement.classList.remove('accordion__container--active');
            }
        }
    });
}

initAcc('.accordion__box', true);
})();
//




document.addEventListener("DOMContentLoaded", function(event) {
  var lazyImages =[].slice.call(
   document.querySelectorAll(".lazy > source")
  )

  if ("IntersectionObserver" in window && 'IntersectionObserverEntry' in window) {
     let lazyImageObserver =
      new IntersectionObserver(function(entries, observer) {
         entries.forEach(function(entry) {
          if (entry.isIntersecting) {
             let lazyImage = entry.target;
             lazyImage.srcset = lazyImage.dataset.srcset;
             lazyImage.nextElementSibling.srcset = lazyImage.dataset.srcset;
             lazyImage.nextElementSibling.classList.add('fade-in');
             lazyImage.parentElement.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
           }
        });
       });

     lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
     });
  } else {

    // Not supported, load all images immediately
    let active = false;

    const lazyLoad = function() {
      if (active === false) {
        active = true;
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.nextElementSibling.src = lazyImage.dataset.srcset;
              lazyImage.nextElementSibling.classList.add('fade-in');
              lazyImage.parentElement.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
   }

 });


/* подключение RELLAX JS */
var rellax = new Rellax('.rellax', {
  // wrapper:'.custom-element'
});

/* Настройки слайдера */
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
  // lazy: true,
});

Sticksy.initializeAll('.js-sticky-widget', { listen: true })
