import AbstractComponent from "./abstract-component";

export default class TripList extends AbstractComponent {
  constructor(date, isEventListEmpty) {
    super();
    this._date = date;
    this._isEventListEmpty = isEventListEmpty;
  }

  getTemplate() {
    return `
  <ul class="trip-days">
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${this._isEventListEmpty ? `` : 1}</span>
        <time class="day__date" datetime="2019-03-18"> ${this._date} </time>
      </div>
      <ul class="trip-events__list">
      </ul>
    </li>
  </ul>`;
  }
}
