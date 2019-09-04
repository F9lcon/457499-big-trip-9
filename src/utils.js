const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement;
};

const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

// не очень понимаю пункт 7 задания про метод удаления элементов. где он должен использоваться.
// const unrender = (element) => {
//   if (element) {
//     element.remove();
//   }
// };

export {createElement, render};
