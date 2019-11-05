import './site.scss';
import data from './assets/data/alphabet';

const keyboard = {
  elements: {
    root: null,
    textarea: null,
    keyboard: null,
    keys: [],
  },

  properties: {
    currentLang: null,
    capsLock: false,
  },

  constants: {
    letterCodes: [
      65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
      77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
      89, 90, 186, 222],
    ru: 'ru',
    en: 'en',
    languages: ['ru', 'en'],
  },

  init() {
    let defaultLang = localStorage.getItem('lang');
    if (!defaultLang) {
      defaultLang = this.constants.en;
      localStorage.setItem('lang', defaultLang);
    }
    this.properties.currentLang = defaultLang;

    this.elements.root = document.getElementById('root');
    this.elements.textarea = document.createElement('textarea');
    this.elements.textarea.classList.add('textarea');
    this.elements.textarea.setAttribute('placeholder', 'Click here');

    this.elements.keyboard = document.createElement('div');
    this.elements.keyboard.classList.add('keyboard');
    this.elements.keyboard.appendChild(this.setKeys());
    this.elements.keys = this.elements.keyboard.querySelectorAll('.keyboard__button');

    this.elements.root.appendChild(this.elements.textarea);
    this.elements.root.appendChild(this.elements.keyboard);
  },

  setKeys() {
    const fragment = document.createDocumentFragment();
    const longButtons = [8, 9, 20, 16, 17, 18, 13, 0];
    const maxButtons = [32];

    data.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard__row');

      row.forEach((button) => {
        const btn = document.createElement('button');
        btn.classList.add('keyboard__button');

        if (longButtons.includes(button.code)) {
          btn.classList.add('keyboard__button--long');
        } else if (maxButtons.includes(button.code)) {
          btn.classList.add('keyboard__button--max');
        }

        btn.setAttribute('id', button.code);

        switch (button.code) {
          case 0:
            btn.textContent = button.en;
            btn.addEventListener('click', () => this.changeLang());
            break;
          case 16:
          case 17:
          case 18:
            btn.textContent = button.en;
            break;
          case 8:
            btn.textContent = button.en;
            btn.addEventListener('click', () => {
              const { value } = this.elements.textarea;
              this.elements.textarea.value = value.substring(0, value.length - 1);
            });
            break;
          case 13:
            btn.textContent = button.en;
            btn.addEventListener('click', () => {
              this.elements.textarea.value += '\n';
            });
            break;
          case 20:
            btn.textContent = button.en;
            btn.addEventListener('click', () => {
              this.toggleCapsLock();
              btn.classList.toggle('keyboard__button--active', this.properties.capsLock);
            });
            break;
          case 9:
          case 32:
            btn.textContent = button.en;
            btn.addEventListener('click', () => {
              this.elements.textarea.value += button.code === 9 ? '   ' : ' ';
            });
            break;
          default:
            if (this.constants.letterCodes.includes(button.code)) {
              btn.textContent = this.properties.currentLang === this.constants.en
                ? button.en : button.ru;
            } else {
              btn.textContent = button.en;
            }

            btn.setAttribute('data-en', button.en);
            btn.setAttribute('data-ru', button.ru);

            btn.addEventListener('click', () => {
              let code = button.en;
              if (this.constants.letterCodes.includes(button.code)) {
                code = this.properties.currentLang === this.constants.en
                  ? button.en : button.ru;
              }

              this.elements.textarea.value += this.properties.capsLock
                ? code.toUpperCase() : code.toLowerCase();
            });
            break;
        }

        rowElement.appendChild(btn);
      });

      fragment.appendChild(rowElement);
    });
    return fragment;
  },

  changeLang() {
    this.properties.currentLang = this.properties.currentLang === this.constants.en
      ? this.constants.ru : this.constants.en;
    localStorage.setItem('lang', this.properties.currentLang);

    this.elements.keys.forEach((key) => {
      const btn = key;
      if (this.constants.letterCodes.includes(+btn.id)) {
        const code = this.properties.currentLang === this.constants.en
          ? btn.dataset.en : btn.dataset.ru;
        btn.textContent = this.properties.capsLock
          ? code.toUpperCase() : code.toLowerCase();
      }
    });
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    const controlButtons = [8, 9, 20, 16, 17, 18, 13, 32, 0];

    this.elements.keys.forEach((key) => {
      if (!controlButtons.includes(+key.id)) {
        const btn = key;
        btn.textContent = this.properties.capsLock
          ? btn.textContent.toUpperCase()
          : btn.textContent.toLowerCase();
      }
    });
  },
};

const selectedButtonClass = 'keyboard__button--active';

const keyUpEvent = (event) => {
  const button = document.getElementById(event.keyCode);
  if (button) {
    button.classList.remove(selectedButtonClass);
    button.click();
  }
};

const keyDownEvent = (event) => {
  const button = document.getElementById(event.keyCode);
  if (!!button && !button.classList.contains(selectedButtonClass)) {
    button.classList.add(selectedButtonClass);
  }
};

window.addEventListener('DOMContentLoaded', () => keyboard.init());
window.addEventListener('keyup', keyUpEvent, false);
window.addEventListener('keydown', keyDownEvent, false);
