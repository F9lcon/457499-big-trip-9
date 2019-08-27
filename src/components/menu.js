export const createMenu = ([table, stats]) => {
  return `
     <nav class="trip-controls__trip-tabs  trip-tabs">
       <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${table}</a>
       <a class="trip-tabs__btn" href="#">${stats}</a>
     </nav>`;
};
