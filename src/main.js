import TripInfo from "./components/trip-info";
import Menu from "./components/menu";
import SortForm from "./components/sort-form";
import TripEditForm from "./components/trip-edit";
import TripList from "./components/trip-list";
import Trip from "./components/trip";
import {eventList, menuList, filterList} from "./data";
import Filter from "./components/filter";
import {render, unrender} from "./utils";

const tripInfoElement = document
  .querySelector(`.trip-main__trip-info.trip-info`);
const tripControlsElement = document
  .querySelector(`.trip-main__trip-controls.trip-controls`);
const eventsElement = document.querySelector(`.trip-events`);
const totalCostElement = document.querySelector(`.trip-info__cost-value`);


const dates = eventList.map((event) => event.date).sort((a, b) => a - b)
  .map((it) => new Date(it).toDateString());
const cities = eventList.map((event) => event.city);
const tripInfo = new TripInfo(cities, dates);
const menu = new Menu(menuList);
const filter = new Filter(filterList);

class TripController {
  constructor(container, events) {
    this._container = container;
    this._events = events;
    this._sort = new SortForm();
  }

  sortItems(sortType) {
    while (document.querySelector(`.trip-events__item`)) {
      unrender(document.querySelector(`.trip-events__item`));
    }

    switch (sortType) {
      case `event`:
        this._events.sort((a, b) => a.city > b.city);
        this.init();
        break;
      case `time`:
        this._events.sort((a, b) => a.time.start.hours > b.time.start.hours);
        this.init();
        break;
      case `price`:
        this._events.sort((a, b) => a.price - b.price);
        this.init();
        break;
    }
  }

  init() {
    this._sort.getElement().querySelector(`form`).addEventListener(`click`, (evt)=> {
      if (evt.target.dataset.sort) {
        this.sortItems(evt.target.dataset.sort);
      }
    });
    render(eventsElement, this._sort.getElement(), `afterbegin`);

    this._events.forEach((event) => {
      const trip = new Trip(event);
      const tripEdit = new TripEditForm(event);

      const onRollupBtnClick = () => {
        this._container.replaceChild(tripEdit.getElement(), trip.getElement());
        tripEdit.getElement().querySelector(`form`).addEventListener(`submit`, onFormEditSubmit);
      };
      const onFormEditSubmit = () => {
        this._container.replaceChild(trip.getElement(), tripEdit.getElement());
        trip.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, onRollupBtnClick);
      };

      trip.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, onRollupBtnClick);
      render(this._container, trip.getElement(),
          `beforeend`);
    });
  }
}

render(eventsElement, new TripList().getElement(), `beforeend`);
const tripListElement = document.querySelector(`.trip-events__list`);

const priceList = [];
eventList.forEach((it) => {
  return priceList.push(it.price);
});
totalCostElement.innerHTML = priceList.reduce((a, b) => a + b);

render(tripInfoElement, tripInfo.getElement(), `afterbegin`);
render(tripControlsElement, menu.getElement(), `afterbegin`);
render(tripControlsElement, filter.getElement(), `beforeend`);

const tripController = new TripController(tripListElement, eventList);
tripController.init();
