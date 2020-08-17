import {createElement} from "../utils.js";

/**
 * создает шаблон обертки списка задач
 * @return {string} возвращает HTML-строку в ввиде кода HTML
 */
const createTaskListTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class TaskList {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createTaskListTemplate();
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
