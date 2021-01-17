const APP = {
  gamersQuantity: 3,
  gamers: []
  // Пора бы начать рандомить роли и раздать их персонажам
};

const BUTTON_START = document.querySelector('.app__button--start');
const GAMER = document.querySelector('.app__gamer');
const HEADING = document.querySelector('.app__heading');
const HEADING_SMALLER = document.querySelector('.app__heading-smaller');
const PARAGRAPH = document.querySelector('.app__paragraph');
const SETTINGS = document.querySelector('.app__settings');
const SETTINGS_INPUT = SETTINGS.querySelector('.app__settings-input');
const STATUS = document.querySelector('.app__status');

const PHRASE_ROLE = 'Посмотреть свою роль...';

BUTTON_START.addEventListener('click', e => {
  e.preventDefault();
  const VALUE = +SETTINGS_INPUT.value;

  if ((VALUE > 2) && (VALUE < 6)) {
    APP.gamersQuantity += VALUE;

    HEADING.classList.remove('display-none');
    // HEADING_SMALLER.classList.remove('display-none');
    PARAGRAPH.classList.add('display-none');
    SETTINGS.classList.add('display-none');
    STATUS.classList.remove('display-none');

    BUTTON_START.textContent = PHRASE_ROLE;
  } else {
    alert('Введите корректное число!');
  }
});
