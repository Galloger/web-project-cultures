export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

    // Aseguramos que this apunte a la clase al usarlo como callback
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      const clickedOverlay = evt.target.classList.contains("popup_is-opened");
      const clickedCloseButton = evt.target.classList.contains("popup__close");

      if (clickedOverlay || clickedCloseButton) {
        this.close();
      }
    });
  }
}