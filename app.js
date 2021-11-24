let popupsBtn = document.querySelectorAll("[data-popup-ref]");

popupsBtn.forEach((btn) => {
  btn.addEventListener("click", activePopup);

  function activePopup() {
    let popupId = btn.getAttribute("data-popup-ref");
    let popup = document.querySelector(`[data-popup-id='${popupId}']`);

    if (popup !== undefined && popup !== null) {
      let popupContent = popup.querySelector(".popup-content");
      let closeBtns = popup.querySelectorAll("[data-dismiss-popup]");

      closeBtns.forEach((btn) => {
        btn.addEventListener("click", onPopupClose);
      });
      popup.addEventListener("click", onPopupClose);

      popupContent.addEventListener("click", (ev) => {
        ev.stopPropagation();
      });

      popup.classList.add("active");
      setTimeout(() => {
        popupContent.classList.add("active");
      }, 1);

      function onPopupClose() {
        setTimeout(() => {
          popup.classList.remove("active");
        }, 250);
        popupContent.classList.remove("active");
      }
    }
  }
});
