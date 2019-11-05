import './site.scss';
import data from './assets/data/alphabet';

const selectedButtonClass = 'keyboard__button--active';

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
    shiftLock: false,
  },

  constants: {
    controlCodes: [0, 8, 9, 13, 16, 17, 18, 20, 32],
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
        if (this.constants.controlCodes.includes(button.code)) {
          btn.textContent = button.name;
        }

        switch (button.code) {
          case 0:
            btn.addEventListener('click', () => this.changeLang());
            break;
          case 16:
            btn.addEventListener('click', () => {
              this.drawButtons();
            });
            break;
          case 17:
          case 18:
            break;
          case 8:
            btn.addEventListener('click', () => {
              const { value } = this.elements.textarea;
              this.elements.textarea.value = value.substring(0, value.length - 1);
            });
            break;
          case 13:
            btn.addEventListener('click', () => {
              this.elements.textarea.value += '\n';
            });
            break;
          case 20:
            btn.addEventListener('click', () => {
              this.toggleCapsLock();
              btn.classList.toggle(selectedButtonClass, this.properties.capsLock);
            });
            break;
          case 9:
          case 32:
            btn.addEventListener('click', () => {
              this.elements.textarea.value += button.code === 9 ? '   ' : ' ';
            });
            break;
          default:
            if (!this.constants.controlCodes.includes(button.code)) {
              if (this.properties.capsLock || this.properties.shiftLock) {
                btn.textContent = this.isEng() ? button.shift.en : button.shift.ru;
              } else {
                btn.textContent = this.isEng() ? button.simple.en : button.simple.ru;
              }
            }

            btn.setAttribute('data-simple-en', button.simple.en);
            btn.setAttribute('data-simple-ru', button.simple.ru);
            btn.setAttribute('data-shift-en', button.shift.en);
            btn.setAttribute('data-shift-ru', button.shift.ru);

            btn.addEventListener('click', () => {
              let code = button.simple.en;
              if (!this.constants.controlCodes.includes(button.code)) {
                if (this.properties.capsLock || this.properties.shiftLock) {
                  code = this.isEng() ? btn.dataset.shiftEn : btn.dataset.shiftRu;
                } else {
                  code = this.isEng() ? btn.dataset.simpleEn : btn.dataset.simpleRu;
                }
              }
              this.elements.textarea.value += code;
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
    this.properties.currentLang = this.isEng() ? this.constants.ru : this.constants.en;
    localStorage.setItem('lang', this.properties.currentLang);

    this.elements.keys.forEach((key) => {
      const btn = key;
      if (!this.constants.controlCodes.includes(+btn.id)) {
        if (this.properties.capsLock || this.properties.shiftLock) {
          btn.textContent = this.isEng() ? btn.dataset.shiftEn : btn.dataset.shiftRu;
        } else {
          btn.textContent = this.isEng() ? btn.dataset.simpleEn : btn.dataset.simpleRu;
        }
      }
    });
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    this.drawButtons();
  },

  drawButtons() {
    this.elements.keys.forEach((key) => {
      if (!this.constants.controlCodes.includes(+key.id)) {
        const btn = key;
        if (this.properties.capsLock || this.properties.shiftLock) {
          btn.textContent = this.isEng() ? btn.dataset.shiftEn : btn.dataset.shiftRu;
        } else {
          btn.textContent = this.isEng() ? btn.dataset.simpleEn : btn.dataset.simpleRu;
        }
      }
    });
  },

  isEng() {
    return this.properties.currentLang === this.constants.en;
  },
};

const keyUpEvent = (event) => {
  const button = document.getElementById(event.keyCode);
  if (button && event.keyCode !== 20) {
    button.classList.remove(selectedButtonClass);

    if (event.keyCode === 16) {
      keyboard.properties.shiftLock = false;
      button.click();
    }
  }
};

const keyDownEvent = (event) => {
  const button = document.getElementById(event.keyCode);
  if (button) {
    if (event.keyCode === 16) {
      keyboard.properties.shiftLock = true;
    }

    button.click();

    if (!button.classList.contains(selectedButtonClass) && event.keyCode !== 20) {
      button.classList.add(selectedButtonClass);
    }
  }
};

window.addEventListener('DOMContentLoaded', () => keyboard.init());
window.addEventListener('keyup', keyUpEvent, false);
window.addEventListener('keydown', keyDownEvent, false);
