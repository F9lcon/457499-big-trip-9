export const createFilter = (list) => {
  return `
   <form class="trip-filters" action="#" method="get">
              ${list.map((it) => `<div class="trip-filters__filter">
                <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                <label class="trip-filters__filter-label" for="filter-future">${it}</label>
              </div>`).join(``)}

              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>`;
};
