import {createElement} from "../utils.js";

/**
 * создает шаблон доски задач
 * @return {string} возвращает HTML-строку в ввиде кода HTML
 */
const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class Board {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
