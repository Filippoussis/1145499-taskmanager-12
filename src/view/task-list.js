import AbstractView from "./abstract.js";

/**
 * создает шаблон обертки списка задач
 * @return {string} возвращает HTML-строку в ввиде кода HTML
 */
const createTaskListTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class TaskList extends AbstractView {
  _getTemplate() {
    return createTaskListTemplate();
  }
}
