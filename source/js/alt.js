(function () {
  // Get the navigation element
  var navBar = document.querySelector(".three-day");
  var offset = navBar.offsetTop;

  var virtualElement = document.createElement("div");

  var stick = function () {
    var scroll = window.scrollY;

    var isSticked = navBar.classList.contains("three-day--stik");

    if (scroll >= offset && !isSticked) {
      navBar.classList.add("three-day--stik");
    } else if (scroll <= offset && isSticked) {
      navBar.classList.remove("three-day--stik");

      var formerFirstChild = navBar.removeChild(virtualElement);
    }
  };

  // listen to the scroll
  window.addEventListener("scroll", stick);
})();

//Кнопка для оплаты

(function () {
  let btnPricePayS = document.getElementById("btnPricePayS");
  let radioLen = document.Price_s.price_lvl_s.length;

  for (let i = 0; i < radioLen; i++) {
    document.Price_s.price_lvl_s[i].addEventListener("click", function () {
      btnPricePayS.dataset.modal = this.value;
    });
  }
})();

(function () {
  let btnPricePayM = document.getElementById("btnPricePayM"),
    radioLen = document.Price_m.price_lvl_m.length;

  for (let i = 0; i < radioLen; i++) {
    document.Price_m.price_lvl_m[i].addEventListener("click", function () {
      btnPricePayM.dataset.modal = this.value;
    });
  }
})();

(function () {
  let btnPricePayXL = document.getElementById("btnPricePayXL"),
    radioLen = document.Price_xl.price_lvl_xl.length;

  for (let i = 0; i < radioLen; i++) {
    document.Price_xl.price_lvl_xl[i].addEventListener("click", function () {
      btnPricePayXL.dataset.modal = this.value;
    });
  }
})();

/* Модальное окно */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var modalButtons = document.querySelectorAll(".btn-modal"),
      overlay = document.querySelector(".modal-js-overlay"),
      closeButtons = document.querySelectorAll(".modal-js-close");

    modalButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        var modalId = this.getAttribute("data-modal"),
          modalElem = document.querySelector(
            '.modal[data-modal="' + modalId + '"]'
          );

        modalElem.classList.add("modal--active");
        overlay.classList.add("modal--active");
      });
    });

    closeButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        var parentModal = this.closest(".modal");

        parentModal.classList.remove("modal--active");
        overlay.classList.remove("modal--active");
      });
    });

    document.body.addEventListener(
      "keyup",
      function (e) {
        var key = e.keyCode;

        if (key == 27) {
          document
            .querySelector(".modal.modal--active")
            .classList.remove("modal--active");
          document
            .querySelector(".modal-overlay")
            .classList.remove("modal--active");
        }
      },
      false
    );

    overlay.addEventListener("click", function () {
      document
        .querySelector(".modal.modal--active")
        .classList.remove("modal--active");
      this.classList.remove("modal--active");
    });
  });
})();

/*  Форма S.M.A.R.T. Регистрация */
(function () {
  window.addEventListener("load", function () {
    let loc = document.getElementById("497789615ddf143933d");
    loc.value = window.location.href;
    let ref = document.getElementById("497789615ddf143933dref");
    ref.value = document.referrer;

    let statUrl =
      "https://get.anglofan.ru/stat/counter?ref=" +
      encodeURIComponent(document.referrer) +
      "&loc=" +
      encodeURIComponent(document.location.href);
    document.getElementById("gccounterImgContainer").innerHTML =
      "<img width=1 height=1 style='display:none' id='gccounterImg' src='" +
      statUrl +
      "'/>";
  });
})();
// ======================================
(function () {
  let usernameEl = document.querySelector("#nameReg");
  let emailEl = document.querySelector("#emailReg");

  let form = document.querySelector("#ltForm3434846");

  let checkUsername = () => {
    let valid = false;

    let min = 3,
      max = 25;

    let username = usernameEl.value.trim();

    if (!isRequired(username)) {
      showError(usernameEl, "Имя не может быть пустым");
    } else if (!isBetween(username.length, min, max)) {
      showError(usernameEl, `Имя не может быть меньше ${min}`);
    } else {
      showSuccess(usernameEl);
      valid = true;
    }
    return valid;
  };

  let checkEmail = () => {
    let valid = false;
    let email = emailEl.value.trim();
    if (!isRequired(email)) {
      showError(emailEl, "Email не может быть пустым");
    } else if (!isEmailValid(email)) {
      showError(emailEl, "Неверный формат Email.");
    } else {
      showSuccess(emailEl);
      valid = true;
    }
    return valid;
  };

  let isEmailValid = (email) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  let isRequired = (value) => (value === "" ? false : true);
  let isBetween = (length, min, max) =>
    length < min || length > max ? false : true;

  let showError = (input, message) => {
    // get the form-field element
    let formField = input.parentElement;
    // add the error class
    formField.classList.remove("success");
    formField.classList.add("error");

    // show the error message
    let error = formField.querySelector(".from-get--error");
    error.textContent = message;
  };

  let showSuccess = (input) => {
    // get the form-field element
    let formField = input.parentElement;

    // remove the error class
    formField.classList.remove("error");
    formField.classList.add("success");

    // hide the error message
    let error = formField.querySelector(".from-get--error");
    error.textContent = "";
  };

  form.addEventListener("submit", function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
      isEmailValid = checkEmail();

    let isFormValid = isUsernameValid && isEmailValid;

    // submit to the server if the form is valid
    if (isFormValid) {
    }
  });

  let debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
        fn.apply(null, args);
      }, delay);
    };
  };

  form.addEventListener(
    "input",
    debounce(function (e) {
      switch (e.target.id) {
        case "nameReg":
          checkUsername();
          break;
        case "emailReg":
          checkEmail();
          break;
      }
    })
  );
})();
/* ------------- */

/*  Маска для телефона */

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(
    document.querySelectorAll(".form-get__input--phone"),
    function (input) {
      var keyCode;

      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
});

(function () {
  let btnPricePayOs = document.getElementById("btnPricePayOs");
  let radioLen = document.Price_os.price_lvl_os.length;

  for (let i = 0; i < radioLen; i++) {
    document.Price_os.price_lvl_os[i].addEventListener("click", function () {
      btnPricePayOs.dataset.modal = this.value;
    });
  }
})();
