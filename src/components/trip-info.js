import AbstractComponent from "./abstract-component";

export default class TripInfo extends AbstractComponent {
  constructor(cities, dates) {
    super();
    this._cities = cities;
    this._dates = dates;
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
