import {createElement} from "../utils";

export class Menu {
  constructor([table, stats]) {
    this._table = table;
    this._stats = stats;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  getTemplate() {
    return `<h2 class="visually-hidden">Switch trip view</h2>
     <nav class="trip-controls__trip-tabs  trip-tabs">
       <a class="trip-tabs__btn  ${this._table.status ? `trip-tabs__btn--active` : ``}" href="#">${this._table.title}</a>
       <a class="trip-tabs__btn ${this._stats.status ? `trip-tabs__btn--active` : ``}" href="#">${this._stats.title}</a>
     </nav>`;
  }

}
