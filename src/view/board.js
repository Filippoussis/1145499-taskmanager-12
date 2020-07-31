/**
 * создает шаблон доски задач
 * @return {string} возвращает HTML-строку в ввиде кода HTML
 */
export const createBoardTemplate = () => {
  return (
    `<section class="board container">
      <div class="board__tasks"></div>
    </section>`
  );
};
