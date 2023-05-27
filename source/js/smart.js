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


});


(function () {



  let forms = document.getElementById("formprice4Bs");
  let radio4bstest = forms.querySelectorAll(".input-s4w");




  for (var i = 0; i < radio4bstest.length; i++) {

    radio4bstest[i].addEventListener('click', function () {
      forms.action = this.value;
    }
    )
  }
  // Проверка на пустоту

  forms.onsubmit = function () {
    let radioElems = document.getElementsByName('price4BsRadio');
    let error = document.querySelector('#price4BsError');
    let submit = false;
    [].forEach.call(radioElems, function (item) {
      item.checked && (submit = true);
    });

    if (!submit) {
      error.style.display = 'block';
      return false;
    }
  }

})();


(function () {
  let forms = document.getElementById("formprice36Bs");
  let radio36bs = document.price36Bs.price36BsRadio;
  let bs36S = document.querySelector("#bs36S");

  for (var i = 0; i < radio36bs.length; i++) {
    bs36S.addEventListener('click', function () {
      if (radio36bs[0].value == 'https://get.anglofan.ru/s36wA1') {
        radio36bs[0].value = 'https://get.anglofan.ru/s36wA1__bs'
        radio36bs[1].value = 'https://get.anglofan.ru/s36wA2__bs'
        radio36bs[2].value = 'https://get.anglofan.ru/s36wB1__bs'
        radio36bs[0].checked = false;
        radio36bs[1].checked = false;
        radio36bs[2].checked = false;
        forms.action = '';
      }
      else {
        radio36bs[0].value = 'https://get.anglofan.ru/s36wA1'
        radio36bs[1].value = 'https://get.anglofan.ru/s36wA2'
        radio36bs[2].value = 'https://get.anglofan.ru/s36wB1'
        radio36bs[0].checked = false;
        radio36bs[1].checked = false;
        radio36bs[2].checked = false;
        forms.action = '';
        // radio4bstest[i].checked = false;
      }
    });
    document.price36Bs.price36BsRadio[i].addEventListener('click',
      function () {
        forms.action = this.value;
      }
    )
  }
  // Проверка на пустоту

  forms.onsubmit = function () {
    let radioElems = document.getElementsByName('price36BsRadio');
    let error = document.querySelector('#price36BsError');
    let submit = false;
    [].forEach.call(radioElems, function (item) {
      item.checked && (submit = true);
    });

    if (!submit) {
      error.style.display = 'block';
      return false;
    }
  }

})();
(function () {
  let forms = document.getElementById("formprice4Os");
  let radio4Os = document.price4Os.price4OsRadio.length;

  for (var i = 0; i < radio4Os; i++) {
    document.price4Os.price4OsRadio[i].addEventListener('click',
      function () {
        forms.action = this.value;
      }
    )
  }
  // Проверка на пустоту

  forms.onsubmit = function () {
    let radioElems = document.getElementsByName('price4OsRadio');
    let error = document.querySelector('#price4OsError');
    let submit = false;
    [].forEach.call(radioElems, function (item) {
      item.checked && (submit = true);
    });

    if (!submit) {
      error.style.display = 'block';
      return false;
    }
  }
})();
(function () {
  let forms = document.getElementById("formprice36Os");
  let radio36Os = document.price36Os.price36OsRadio;
  let bs36M = document.querySelector("#bs36M");
  for (var i = 0; i < radio36Os.length; i++) {
    bs36M.addEventListener('click', function () {
      if (radio36Os[0].value == 'https://get.anglofan.ru/s36wA1os') {
        radio36Os[0].value = 'https://get.anglofan.ru/s36wA1os__bs'
        radio36Os[1].value = 'https://get.anglofan.ru/s36wA2os__bs'
        radio36Os[2].value = 'https://get.anglofan.ru/s36wB1os__bs'
        radio36Os[0].checked = false;
        radio36Os[1].checked = false;
        radio36Os[2].checked = false;
        forms.action = '';
      }
      else {
        radio36Os[0].value = 'https://get.anglofan.ru/s36wA1os'
        radio36Os[1].value = 'https://get.anglofan.ru/s36wA2os'
        radio36Os[2].value = 'https://get.anglofan.ru/s36wB1os'
        radio36Os[0].checked = false;
        radio36Os[1].checked = false;
        radio36Os[2].checked = false;
        forms.action = '';
        // radio4bstest[i].checked = false;
      }
    });
    document.price36Os.price36OsRadio[i].addEventListener('click',
      function () {
        forms.action = this.value;
      }
    )
  }
  // Проверка на пустоту

  forms.onsubmit = function () {
    let radioElems = document.getElementsByName('price36OsRadio');
    let error = document.querySelector('#price36OsError');
    let submit = false;
    [].forEach.call(radioElems, function (item) {
      item.checked && (submit = true);
    });
    console.log('hello');
    if (!submit) {
      error.style.display = 'block';
      return false;
    }
  }

})();
(function () {
  let forms = document.getElementById("formpriceXL");
  let radioXL = document.priceXL.priceXLRadio;
  let bsXl = document.querySelector("#bsXl");

  for (var i = 0; i < radioXL.length; i++) {
    bsXl.addEventListener('click', function () {
      if (radioXL[0].value == 'https://get.anglofan.ru/XLA1') {
        radioXL[0].value = 'https://get.anglofan.ru/XLA1__bs'
        radioXL[1].value = 'https://get.anglofan.ru/XLA2__bs'
        radioXL[2].value = 'https://get.anglofan.ru/XLA1__bs'
        radioXL[0].checked = false;
        radioXL[1].checked = false;
        radioXL[2].checked = false;
        forms.action = '';
      }
      else {
        radioXL[0].value = 'https://get.anglofan.ru/XLA1os'
        radioXL[1].value = 'https://get.anglofan.ru/XLA2os'
        radioXL[2].value = 'https://get.anglofan.ru/XLA1os'
        radioXL[0].checked = false;
        radioXL[1].checked = false;
        radioXL[2].checked = false;
        forms.action = '';
        // radio4bstest[i].checked = false;
      }
    });
    document.priceXL.priceXLRadio[i].addEventListener('click',
      function () {
        forms.action = this.value;
      }
    )
  }
  // Проверка на пустоту

  forms.onsubmit = function () {
    let radioElems = document.getElementsByName('priceXLRadio');
    let error = document.querySelector('#priceXLError');
    let submit = false;
    [].forEach.call(radioElems, function (item) {
      item.checked && (submit = true);
    });

    if (!submit) {
      error.style.display = 'block';
      return false;
    }
  }
})();
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
/* (function(){
  var section = document.querySelectorAll(".section-menu");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.sub-menu__btn').classList.add("sub-menu__btna");
        document.querySelector('.sub-menu__btna[href*=' + i + ']').setAttribute('class', 'sub-menu__btn');
      }
    }
  };
})(); */
/*     (function() {

      var section = document.querySelectorAll(".section-menu");
      var sections = {};
      var i = 0;

      Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
      });

      window.onscroll = function() { myFunction();
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
          if (sections[i] <= scrollPosition) {
            document.querySelector('.sub-menu--altactive').setAttribute('class', 'sub-menu__btn');
            document.querySelector('.sub-menu__btn[href*=' + i + ']').setAttribute('class', 'sub-menu--altactive');
          }
        }
      };
      // window.onscroll = function() {myFunction()};
      var navbar = document.querySelector(".sub-menu");
      var sticky = navbar.offsetTop;
      function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sub-menu--active")

      } else {
        navbar.classList.remove("sub-menu--active")
      }
    }
    })(); */
