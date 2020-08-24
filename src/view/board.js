import AbstractView from "./abstract.js";

/**
 * создает шаблон доски задач
 * @return {string} возвращает HTML-строку в ввиде кода HTML
 */
const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class Board extends AbstractView {
  _getTemplate() {
    return createBoardTemplate();
  }
}
