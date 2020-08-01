import { createSiteMenuTemplate } from "./view/site-menu.js";
import { createFilterTemplate } from "./view/filter.js";
import { createBoardTemplate } from "./view/board.js";
import { createSortTemplate } from "./view/sort.js";
import { createTaskTemplate } from "./view/task.js";
import { createTaskEditTemplate } from "./view/task-edit.js";
import { createLoadMoreButtonTemplate } from "./view/button.js";

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

/**
 * отрисовывает шаблон на странице
 * @param {HTMLElement} container - HTML-элемент на странице
 * @param {string} template - HTML-строка, которая будет вставлена именно «как HTML»
 * @param {string} place - специальное слово, указывающее, куда по отношению к container производить вставку
 */
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(boardElement, createSortTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
