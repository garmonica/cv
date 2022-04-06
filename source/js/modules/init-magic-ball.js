const answers = [
  'быть может',
  'даже не рассчитывай',
  'да',
  'нет',
  'маловероятно',
  'определенно да',
  'спроси позже',
  'всё в руках судьбы',
  'не торопи события',
  'звезды говорят "да"',
  'бесспорно',
  'пока не ясно, попробуй снова',
  'весьма сомнительно',
  'да... нет... не знаю...',
  'нет ничего невозможного',
  'непонятно',
  'к сожалению, нет',
  'ответ отрицательный',
  'по моим данным - нет',
  'можешь быть уверен в этом',
  'да кто его знает',
  'ну ты вопросы задаешь, конечно',
  'вполне возможно',
  'да, да, да!!!',
  'мечтать не вредно',
  'обязательно',
  'сложно сказать',
  'затрудняюсь ответить',
  'непременно',
  'не-а',
  'такова судьба',
  'однозначно',
  'так точно!'
];

const text = document.querySelector('.magic__ball-text');
const button = document.querySelector('.magic__button');
const reset = document.querySelector('.magic__reset');

const initMagicBall = () => {
  const getRandomInteger = (minNumber, maxNumber) => {
    const randomInteger = Math.round((Math.random() * (maxNumber - minNumber) + minNumber));
    return Math.abs(randomInteger);
  };
  const getRandomArrayElement = (elements) => {
    return elements[getRandomInteger(0, elements.length - 1)];
  };
  button.addEventListener('click', () => {
    text.textContent = getRandomArrayElement(answers);
    text.style.opacity = 1;
  });
  reset.addEventListener('click', () => {
    text.textContent = 'здесь будет ответ';
    text.style.opacity = 0.3;
  });
};

export {initMagicBall};
