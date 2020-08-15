import {createElement} from "../utils.js";

/**
 * создает шаблон кнопки
 * @return {string} возвращает HTML-строку в ввиде кода HTML
 */
const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export default class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createLoadMoreButtonTemplate();
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