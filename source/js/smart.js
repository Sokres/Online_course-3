(function () {

  // Get the navigation element
  var navBar = document.querySelector('.three-day')
  // var obj = navBar.getBoundingClientRect().top;
  var offset = navBar.offsetTop - navBar.offsetTop;
  var virtualElement = document.createElement('div')

  var stick = function () {

    var scroll = window.scrollY;

    var isSticked = navBar.classList.contains('three-day--stik')


    if (scroll >= offset && !isSticked) {

      navBar.classList.add('three-day--stik')

    } else if (scroll <= offset && isSticked) {
      navBar.classList.remove('three-day--stik')

      var formerFirstChild = navBar.removeChild(virtualElement);
    }
  }

  // listen to the scroll
  window.addEventListener('scroll', stick)
})();
/* табы */
document.addEventListener('DOMContentLoaded', () => { //

  const tabs = (tabsSelector, tabsHeadSelector, tabsBodySelector, tabsCaptionSelector, tabsCaptionActiveClass, tabsContentActiveClass) => {
    const tabs = document.querySelector(tabsSelector)
    const head = tabs.querySelector(tabsHeadSelector)
    const body = tabs.querySelector(tabsBodySelector)

    const getActiveTabName = () => {
      return head.querySelector(`.${tabsCaptionActiveClass}`).dataset.tab
    }

    const setActiveContent = () => { // функция для
      if (body.querySelector(`.${tabsContentActiveClass}`)) {
        body.querySelector(`.${tabsContentActiveClass}`).classList.remove(tabsContentActiveClass) // то скрываем его
      }
      body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add(tabsContentActiveClass)
    }


    if (!head.querySelector(`.${tabsCaptionActiveClass}`)) {
      head.querySelector(tabsCaptionSelector).classList.add(tabsCaptionActiveClass)
    }

    setActiveContent(getActiveTabName())

    head.addEventListener('click', e => {
      const caption = e.target.closest(tabsCaptionSelector)
      if (!caption) return
      if (caption.classList.contains(tabsCaptionActiveClass)) return
      if (head.querySelector(`.${tabsCaptionActiveClass}`)) {
        head.querySelector(`.${tabsCaptionActiveClass}`).classList.remove(tabsCaptionActiveClass)
      }

      caption.classList.add(tabsCaptionActiveClass)

      setActiveContent(getActiveTabName())
    })
  }
  tabs('.price__container--s', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active')
  tabs('.price__container--m', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active')
  tabs('.price__container--xl', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active')


});

class FormPrice {
  constructor(selector) {
      this.wrap = document.querySelector(selector);
      this.form =  this.wrap.querySelector('.price-form');
      this.error = this.wrap.querySelector('.pay__error');
      this.check = this.wrap.querySelector('.pay__check')
      this.rados = this.form.querySelectorAll('.input-radio');
      this.btn = this.form.querySelector('.pay__pay');
      this.valid()
      this.clickError()
  }
  valid() {
      for (let i = 0; i < this.rados.length; i++) {
          this.rados[i].addEventListener('click', () => {
              this.form.action = this.rados[i].value;
          })
          let tempRadio = this.rados[i].value;
          // console.log(this.check == undefined)
          if (this.check) {
              this.check.addEventListener('click', () => {
                  if (!this.rados[i].value.endsWith('bs')) {
                      this.rados[i].value = tempRadio + '__bs';
                      // console.log(this.rados[i].value)
                  } else {
                      this.rados[i].value = tempRadio;
                      // console.log(2)
                  }
                  this.rados[i].checked = false;
                  this.form.action = "";
              })
          }
      }
  }
  clickError() {
      this.form.addEventListener('submit', (e) => {
          let submit = false;
          this.rados.forEach((radio) => {
              radio.checked && (submit = true);
          })
          if (!submit) {
              this.error.classList.add('pay__error--active');
              e.preventDefault()
              return false
          }
      })

  }

}

let s1 = new FormPrice('.price__wrap--1w-s');
let s2 = new FormPrice('.price__wrap--36w-s');
let s3 = new FormPrice('.price__wrap--1w-m');
let s4 = new FormPrice('.price__wrap--w36-m');
let s5 = new FormPrice('.price__wrap--xl');
let s6 = new FormPrice('.price__wrap--xl-1');



/* ---активация навигации по странице--- */
(function () {
  document.addEventListener("scroll", handleScroll);
  let scrollToNav = document.querySelector(".sub-menu");


  function handleScroll() {

    if (pageYOffset > document.documentElement.clientHeight) {
      //show button
      if (!scrollToNav.classList.contains("sub-menu--active"))
        scrollToNav.classList.add("sub-menu--active")
    } else {
      //hide button
      if (scrollToNav.classList.contains("sub-menu--active"))
        scrollToNav.classList.remove("sub-menu--active")
    }
  }
})();

/* ---навигация по якорным ссылкам--- */
(function () {
  document.querySelectorAll(".nav-scrollBy[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let href = this.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector(".sub-menu").offsetHeight;
      // const topOffset = 0;
      // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
})();
/* ---подсвечиваем пункты меню и скорлим в право--- */
(function () {
  let sectionss = document.querySelectorAll(".section-menu");
  let navBtn = document.querySelectorAll(".sub-menu__btn");
  let subMenu = document.querySelector(".sub-menu__wrap");

  window.onscroll = () => {
    let current = "";

    sectionss.forEach((section) => {
      const sectionTop = section.offsetTop;
      const topOffset = document.querySelector(".sub-menu").offsetHeight;
      if (pageYOffset >= sectionTop - topOffset - 100) {
        current = section.getAttribute("id");
      }
    });

    navBtn.forEach((li) => {
      subMenu.scrollBy({
        left: -200
      });

      li.classList.remove("sub-menu__btn--active")
      if (li.classList.contains(current)) {
        subMenu.scrollBy({
          left: 200
        });
        li.classList.add("sub-menu__btn--active");
      }
    });
  };

})();


