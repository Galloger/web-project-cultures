export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;               // Array de datos (initialCards)
    this._renderer = renderer;         // Función que crea cada tarjeta
    this._container = document.querySelector(containerSelector); // UL donde van las cards
  }

  // Renderiza todas las tarjetas iniciales
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  // Inserta una tarjeta en el contenedor
  addItem(element) {
    this._container.prepend(element);
  }
}