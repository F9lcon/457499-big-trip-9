import {createElement} from "../utils";

export default class Filter {
  constructor(list) {
    this._list = list;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }

  getTemplate() {
    return `<form class="trip-filters" action="#" method="get">
              ${this._list.map((it) => `<div class="trip-filters__filter">
                <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                <label class="trip-filters__filter-label" for="filter-future">${it}</label>
              </div>`).join(``)}

              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>`;
  }
}
