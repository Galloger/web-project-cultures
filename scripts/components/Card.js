export default class Card {
  constructor({ name, link, handleCardClick }, templateSelector) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return template;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".card__image");
    this._title = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("card__like-button_is-active");
    });

    this._deleteButton.addEventListener("click", () => {
      this._element.remove();
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }
}