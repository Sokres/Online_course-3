/* Таймер обратного отсчета */
(function () {
  let countDownDate = new Date("Dec 3, 2021 00:00:25").getTime();

  let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let timePr = document.getElementById("time");
    let daysPr = document.getElementById("days");
    let hoursPr = document.getElementById("hours");
    let minutesPr = document.getElementById("minutes");
    let secondPr = document.getElementById("second");

    daysPr.innerHTML = days;
    hoursPr.innerHTML = hours;
    minutesPr.innerHTML = minutes;
    secondPr.innerHTML = seconds;
    if (distance < 0) {
      clearInterval(x);
      timePr.style.display = 'none';
    }
  }, 1000);
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



});
