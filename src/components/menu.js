export const createMenu = ([table, stats]) => {
  return `
     <nav class="trip-controls__trip-tabs  trip-tabs">
       <a class="trip-tabs__btn  ${table.status ? `trip-tabs__btn--active` : ``}" href="#">${table.title}</a>
       <a class="trip-tabs__btn ${stats.status ? `trip-tabs__btn--active` : ``}" href="#">${stats.title}</a>
     </nav>`;
};
