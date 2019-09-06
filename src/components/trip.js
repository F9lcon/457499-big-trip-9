import {createElement} from "../utils";

export default class Trip {
  constructor({type, city, time, price}) {
    this._type = type;
    this._city = city;
    this._time = time;
    this._price = price;
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
    return `
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${this._type}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${this._city}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">${this._time.start.hours}:${this._time.start.min}</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T11:00">
                          ${this._time.start.hours + this._time.duration.hours}:${this._time.start.min + this._time.duration.min}</time>
                      </p>
                      <p class="event__duration">${this._time.duration.hours}H ${this._time.duration.min}M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${this._price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Order Uber</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">20</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`;
  }
}
