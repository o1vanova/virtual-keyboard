import './site.scss';
import { data } from './assets/data/alphabet';

const keyboard = {
  elements: {
    root: null,
    textarea: null,
    keyboard: null,
    keys: []     
  },

  properties: {
    languages: ['en', 'ru'],
    currentLang: null,
    capsLock: false
  },

  init() {
    let defaultLang = localStorage.getItem('lang');
    if (!defaultLang) {
      defaultLang = this.properties.languages[0];
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
    this.elements.keys = this.elements.keyboard.querySelectorAll(".keyboard__button");

    this.elements.root.appendChild(this.elements.textarea);
    this.elements.root.appendChild(this.elements.keyboard);
  },

  setKeys() {
    const fragment = document.createDocumentFragment();
    const longButtons = [ 8, 9, 20, 16, 17, 18, 13, 0 ];
    const maxButtons = [ 32 ];

    data.forEach((row, index) => {
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
            btn.addEventListener("click", () => this.changeLang());
            break;
          case 16:
          case 17:
          case 18:
            btn.textContent = button.en;
            break;
          case 8:
            btn.textContent = button.en;
            const backSpaceClicked = () => {
              let value = this.properties.textarea.value;
              this.properties.textarea.value = value.substring(0, value.length - 1);
            };
            btn.addEventListener("click", backSpaceClicked);
            break;
          case 13:
            btn.textContent = button.en;
            const enterClicked = () => {
              this.elements.textarea.value += '\n';
            };
            btn.addEventListener("click", enterClicked);
            break;
          case 20:
            btn.textContent = button.en;
            const capsLockClicked = () => {
              this.toggleCapsLock();
              btn.classList.toggle("keyboard__button--active", this.properties.capsLock);
            };
            btn.addEventListener("click", capsLockClicked);
            break;
          case 9:
          case 32:
            btn.textContent = button.en;
            const spaceClicked = () => {
              this.elements.textarea.value += button.code === 0 ? '   ' : ' ';
            };
            btn.addEventListener("click", spaceClicked);
            break;
          default:
            let letter = (button.code > 64 && button.code < 91) || [186, 222].includes(button.code) ?
              this.properties.currentLang === this.properties.languages[0] ?
                button.en : button.ru : button.en;

            btn.textContent = letter.toLowerCase();
            btn.setAttribute('data-en', button.en);
            btn.setAttribute('data-ru', button.ru);
            const buttonClicked = () => {
              let code = (button.code > 64 && button.code < 91) || [186, 222].includes(button.code) ?
              this.properties.currentLang === this.properties.languages[0] ?
                button.en : button.ru : button.en;
              this.elements.textarea.value += this.properties.capsLock ? code.toUpperCase() : code.toLowerCase();;
            };

            btn.addEventListener("click", buttonClicked);
            break;
        }

        rowElement.appendChild(btn);
      });

      fragment.appendChild(rowElement);
    });
    return fragment;
  },

  changeLang() {
    this.properties.currentLang = this.properties.currentLang === this.properties.languages[0] ?
      this.properties.languages[1] : this.properties.languages[0];
    localStorage.setItem('lang', this.properties.currentLang);

    for (const key of this.elements.keys) {
      if ((+key.id > 64 && +key.id < 91) || [186, 222].includes(+key.id)) {
        key.textContent = this.properties.currentLang === this.properties.languages[0] ?
          key.dataset.en : key.dataset.ru;
      }
    }
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    const controlButtons = [ 8, 9, 20, 16, 17, 18, 13, 32, 0];

    for (const key of this.elements.keys) {
      if (!controlButtons.includes(+key.id)) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  }
};

const selectedButtonClass = 'keyboard__button--active';

const keyUpEvent = (event) => {
  const button = document.getElementById(event.keyCode);
  if (!!button) {
    button.classList.remove(selectedButtonClass);
  }
  keyboard.elements.keys[0].cli
};

const keyDownEvent = (event) => {
  const button = document.getElementById(event.keyCode);
  if (!!button && !button.classList.contains(selectedButtonClass)) {
    button.classList.add(selectedButtonClass);
  }
};

window.addEventListener("DOMContentLoaded", () => keyboard.init());
window.addEventListener("keyup", keyUpEvent, false);
window.addEventListener("keydown", keyDownEvent, false);
