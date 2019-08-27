export const createTripInfo = ({title, date}) => {
  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">${title}</h1>
      <p class="trip-info__dates"> ${date[0].getDay()} - ${date[date.length - 1].getDay()} Sep</p>
     </div>`;
};

