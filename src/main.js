import {createTripInfo} from "./components/trip-info";
import {createMenu} from "./components/menu";
import {createFilter} from "./components/filter";
import {createSortForm} from "./components/sort-form";
import {createTripEditForm} from "./components/trip-edit";
import {createTripList} from "./components/trip-list";
import {createTrip} from "./components/trip";
import {eventList, menuList, filterList} from "./data";

const tripInfoElement = document
  .querySelector(`.trip-main__trip-info.trip-info`);
const menuHeaderElement = document
  .querySelector(`.trip-main__trip-controls h2`);
const tripControlsElement = document
  .querySelector(`.trip-main__trip-controls.trip-controls`);
const eventsElement = document.querySelector(`.trip-events`);
const totalCostElement = document.querySelector(`.trip-info__cost-value`);

// сделал без Set так как теоретически даты же будет выбирать пользователь.
// и возможно они будут одним днем некоторые.
const dates = eventList.map((event) => event.date).sort((a, b) => a - b)
  .map((it) => new Date(it).toDateString());
const cities = eventList.map((event) => event.city);

const renderComponent = (element, component, position = `beforeend`) => {
  element.insertAdjacentHTML(position, component);
};

const renderContent = () => {
  renderComponent(eventsElement, createTripList());
  const tripListElement = document.querySelector(`.trip-events__list`);
  renderComponent(tripListElement, createTripEditForm());

  for (let i = 0; i < 3; i++) {
    renderComponent(tripListElement, createTrip(eventList[i]));
  }
  const priceList = [];
  eventList.forEach((it) => {
    return priceList.push(it.price);
  });
  totalCostElement.innerHTML = priceList.reduce((a, b) => a + b);
};

renderComponent(tripInfoElement, createTripInfo(cities, dates), `afterbegin`);
renderComponent(menuHeaderElement, createMenu(menuList), `afterend`);
renderComponent(tripControlsElement, createFilter(filterList));
renderComponent(eventsElement, createSortForm());
renderContent();
