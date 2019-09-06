import {createElement} from "../utils";

export default class TripInfo {
  constructor(cities, dates) {
    this._cities = cities;
    this._dates = dates;
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
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._cities.length > 3 ? `
      ${this._cities[0]} - ... - ${this._cities[this._cities.length - 1]}` : `
      ${this._cities.map((city) => `${city} - `).join(``).slice(0, -2)}` }</h1>
      <p class="trip-info__dates"> ${this._dates[0].slice(4)} - 
      ${this._dates[this._dates.length - 1].slice(4)}</p>
     </div>`;
  }
}
