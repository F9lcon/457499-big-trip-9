const ONE_DAY = 86400000;
const MAX_DAYS_BEFORE_TRIP = 10;
const MAX_TRIP_PRICE = 1000;
const EVENT_AMOUNT = 3;

let descriptionData = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`
];

let getExtraOptions = () =>
  ([
    {
      isAdded: Boolean(Math.round(Math.random())),
      title: `luggage`,
      price: 10
    },
    {
      isAdded: Boolean(Math.round(Math.random())),
      title: `Switch to comfort`,
      price: 150
    },
    {
      isAdded: Boolean(Math.round(Math.random())),
      title: `Add meal`,
      price: 2
    },
    {
      isAdded: Boolean(Math.round(Math.random())),
      title: `Choose seats`,
      price: 9
    },
  ]);

const getRandomData = (data, maxSize, minSize = 0) => {
  let dataSize = Math.floor(Math.random() * maxSize);
  let result = [];
  if (minSize === 0 && dataSize === 0) {
    return result;
  } else {
    for (let i = 0; i <= dataSize; i++) {
      result.push(data[Math.floor(Math.random() * data.length)]);
    }
  }
  return new Set(result);
};

const getTimeData = () => ({
  start: Math.floor(Math.random() * 2400) / 100,
  duration: Math.round(Math.random() * 48000) / 100,
});

const getEvent = () => ({
  type: [
    `bus`,
    `check-in`,
    `drive`,
    `flight`,
    `restaurant`,
    `ship`,
    `sightseeing`,
    `taxi`,
    `train`,
    `transport`,
    `trip`
  ][Math.floor(Math.random() * 11)],
  city: [`Los Angeles`, `New York City`, `Washington`, `Miami`][Math.floor(Math.random() * 4)],
  photo: `http://picsum.photos/300/150?r=${Math.random()}`,
  description: getRandomData(descriptionData, 3, 1),
  date: Date.now() + ONE_DAY * Math.floor(Math.random() * MAX_DAYS_BEFORE_TRIP),
  time: {
    start: {
      hours: Math.floor(getTimeData().start),
      min: Math.floor(getTimeData().start % 60)
    },
    duration: {
      hours: Math.floor(getTimeData().duration / 60),
      min: Math.floor(Math.floor(getTimeData().duration) % 60)
    }
  },
  price: Math.floor(Math.random() * MAX_TRIP_PRICE),
  extraOptions: getRandomData(getExtraOptions(), 2)
});
const eventList = new Array(EVENT_AMOUNT).fill(``).map(() => getEvent());

const getTitles = () => {
  if (eventList.length > 3) {
    return `${eventList[0].city} - ... - ${eventList[eventList.length].city}`;
  } else if (eventList.length === 3) {
    return `${eventList[0].city} - ${eventList[1].city} - ${eventList[2].city}`;
  } else if (eventList.length === 2) {
    return `${eventList[0].city} - ${eventList[1].city}`;
  } else {
    return `${eventList[0].city}`;
  }
};

const getDateInfo = () => {
  const dateList = [];
  eventList.forEach((item) => {
    dateList.push(item.date);
  });
  dateList.sort((a, b) => {
    return a - b;
  });
  return dateList.map((date) => new Date(date));
};
const tripInfo = () => ({
  title: getTitles(),
  date: getDateInfo(),
});


// не очень понял задание в части сделать структуру данных для меню. пока решил так оставить
export const menuList = [`Table`, `Stats`];
export const filterList = {
  everything: `Everything`,
  future: `Future`,
  past: `Past`,
};

export {eventList, tripInfo};
