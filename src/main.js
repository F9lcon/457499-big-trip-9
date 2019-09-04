import {TripInfo} from "./components/trip-info";
import {Menu} from "./components/menu";
import {SortForm} from "./components/sort-form";
import {TripEditForm} from "./components/trip-edit";
import {TripList} from "./components/trip-list";
import {Trip} from "./components/trip";
import {eventList, menuList, filterList} from "./data";
import {Filter} from "./components/filter";
import {render} from "./utils";

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
const sortForm = new SortForm();

const renderContent = () => {
  render(eventsElement, new TripList().getElement(), `beforeend`);
  const tripListElement = document.querySelector(`.trip-events__list`);
  const tripEdit = new TripEditForm();

  tripEdit.getElement().querySelector(`form`).addEventListener(`submit`,
      ()=> {
        tripListElement.replaceChild(new Trip(eventList[0]).getElement(), tripEdit.getElement());
      });

  eventList.forEach((event) => {
    const trip = new Trip(event);
    trip.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`,
        ()=> tripListElement.replaceChild(tripEdit.getElement(), trip.getElement()));
    render(tripListElement, trip.getElement(),
        `beforeend`);
  });

  const priceList = [];
  eventList.forEach((it) => {
    return priceList.push(it.price);
  });
  totalCostElement.innerHTML = priceList.reduce((a, b) => a + b);
};


render(tripInfoElement, tripInfo.getElement(), `afterbegin`);
render(tripControlsElement, menu.getElement(), `afterbegin`);
render(tripControlsElement, filter.getElement(), `beforeend`);
render(eventsElement, sortForm.getElement(), `afterbegin`);
renderContent();
