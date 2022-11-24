(function(){

  // Get the navigation element
  var navBar = document.querySelector('.three-day')
  // var obj = navBar.getBoundingClientRect().top;
  var offset = navBar.offsetTop - navBar.offsetTop;
  var virtualElement = document.createElement('div')

  var stick = function () {

      var scroll = window.scrollY;

      var isSticked = navBar.classList.contains('three-day--stik')


      if ( scroll >= offset && !isSticked) {

        navBar.classList.add('three-day--stik')

      } else if(scroll <= offset && isSticked){
        navBar.classList.remove('three-day--stik')

          var formerFirstChild = navBar.removeChild(virtualElement);
      }
  }

  // listen to the scroll
  window.addEventListener('scroll', stick)
})();

(function(){
  let forms = document.getElementById("formprice4Bs");
  let radio4bs = document.price4Bs.price4BsRadio.length;

  for (var i = 0; i < radio4bs; i++) {
    document.price4Bs.price4BsRadio[i].addEventListener('click',
    function() {
      forms.action = this.value;
    }
    )
  }
 // Проверка на пустоту

  forms.onsubmit = function() {
   let radioElems = document.getElementsByName('price4BsRadio');
   let error = document.querySelector('#price4BsError');
   let submit = false;
       [].forEach.call(radioElems, function(item) {
         item.checked && (submit = true);
       });

       if (!submit) {
         error.style.display = 'block';
         return false;
       }
     }

  })();

(function(){
  let forms = document.getElementById("formprice16Bs");
  let radio16bs = document.price16Bs.price16BsRadio.length;

  for (var i = 0; i < radio16bs; i++) {
    document.price16Bs.price16BsRadio[i].addEventListener('click',
    function() {
      forms.action = this.value;
    }
    )
  }
 // Проверка на пустоту

  forms.onsubmit = function() {
   let radioElems = document.getElementsByName('price16BsRadio');
   let error = document.querySelector('#price16BsError');
   let submit = false;
       [].forEach.call(radioElems, function(item) {
         item.checked && (submit = true);
       });

       if (!submit) {
         error.style.display = 'block';
         return false;
       }
     }

  })();

(function(){
  let forms = document.getElementById("formprice36Bs");
  let radio36bs = document.price36Bs.price36BsRadio.length;

  for (var i = 0; i < radio36bs; i++) {
    document.price36Bs.price36BsRadio[i].addEventListener('click',
    function() {
      forms.action = this.value;
    }
    )
  }
 // Проверка на пустоту

  forms.onsubmit = function() {
   let radioElems = document.getElementsByName('price36BsRadio');
   let error = document.querySelector('#price36BsError');
   let submit = false;
       [].forEach.call(radioElems, function(item) {
         item.checked && (submit = true);
       });

       if (!submit) {
         error.style.display = 'block';
         return false;
       }
     }

  })();
(function(){
  let forms = document.getElementById("formprice4Os");
  let radio4Os = document.price4Os.price4OsRadio.length;

  for (var i = 0; i < radio4Os; i++) {
    document.price4Os.price4OsRadio[i].addEventListener('click',
    function() {
      forms.action = this.value;
    }
    )
  }
 // Проверка на пустоту

  forms.onsubmit = function() {
   let radioElems = document.getElementsByName('price4OsRadio');
   let error = document.querySelector('#price4OsError');
   let submit = false;
       [].forEach.call(radioElems, function(item) {
         item.checked && (submit = true);
       });

       if (!submit) {
         error.style.display = 'block';
         return false;
       }
     }

  })();
  (function(){
    document.addEventListener("scroll", handleScroll);
let scrollToNav = document.querySelector(".sub-menu");


function handleScroll() {

  if (pageYOffset > document.documentElement.clientHeight ) {
    //show button
    if(!scrollToNav.classList.contains("sub-menu--active"))
    scrollToNav.classList.add("sub-menu--active")
  } else {
    //hide button
    if(scrollToNav.classList.contains("sub-menu--active"))
    scrollToNav.classList.remove("sub-menu--active")
  }
}

    })();
