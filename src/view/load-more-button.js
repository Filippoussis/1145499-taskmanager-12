import AbstractView from "./abstract.js";

/**
 * создает шаблон кнопки
 * @return {string} возвращает HTML-строку в ввиде кода HTML
 */
const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export default class LoadMoreButton extends AbstractView {
  _getTemplate() {
    return createLoadMoreButtonTemplate();
  }
}
