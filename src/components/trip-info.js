export const createTripInfo = (cities, dates) => {
  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">${cities.length > 3 ? `${cities[0]} - ... - ${cities[cities.length - 1]}` :
    `${cities.map((city) => `${city} - `).join(``).slice(0, -2)}` }</h1>
      <p class="trip-info__dates"> ${dates[0].slice(4)} - ${dates[dates.length - 1].slice(4)}</p>
     </div>`;
};
