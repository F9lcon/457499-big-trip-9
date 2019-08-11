import {createTripInfo} from "./components/trip-info";
import {createMenu} from "./components/menu";
import {createFilter} from "./components/filter";
import {createSortForm} from "./components/sort-form";
import {createTripEditForm} from "./components/trip-edit";
import {createTripList} from "./components/trip-list";
import {createTrip} from "./components/trip";

const tripInfoElement = document
  .querySelector(`.trip-main__trip-info.trip-info`);
const menuHeaderElement = document
  .querySelector(`.trip-main__trip-controls h2`);
const tripControlsElement = document
  .querySelector(`.trip-main__trip-controls.trip-controls`);
const eventsElement = document.querySelector(`.trip-events`);

const renderComponent = (element, component, position = `beforeend`) => {
  element.insertAdjacentHTML(position, component);
};

const renderContent = () => {
  renderComponent(eventsElement, createTripList());
  const tripListElement = document.querySelector(`.trip-events__list`);
  renderComponent(tripListElement, createTripEditForm());

  for (let i = 0; i < 3; i++) {
    renderComponent(tripListElement, createTrip());
  }
};

const renderAllComponents = () => {
  renderComponent(tripInfoElement, createTripInfo(), `afterbegin`);
  renderComponent(menuHeaderElement, createMenu(), `afterend`);
  renderComponent(tripControlsElement, createFilter());
  renderComponent(eventsElement, createSortForm());
  renderContent();
};

renderAllComponents();

