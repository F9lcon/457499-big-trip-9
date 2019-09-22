const ONE_DAY = 86400000;
const MAX_DAYS_BEFORE_TRIP = 10;
const MAX_TRIP_PRICE = 1000;
const EVENT_AMOUNT = 5;

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
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
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
  extraOptions: [
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
  ]
});
export const eventList = new Array(EVENT_AMOUNT).fill(``).map(getEvent);

export const menuList = [
  {
    title: `Table`,
    status: true
  },
  {
    title: `Stats`,
    status: false
  }];

export const filterList = [`Everything`, `Future`, `Past`];

