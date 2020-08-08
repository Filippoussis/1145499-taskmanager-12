import {COLORS} from "../const.js";
import {getRandomInteger} from "../utils.js";

/**
 * генерирует случайное описание задачи из произвольного массива значений
 * @return {string} строка с описанием задачи
 */
const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

/**
 * генерирует дату и время дедлайна задачи
 * @return {object} дата и время дедлайна задачи, либо null при его отсутствии
 */
const generateDate = () => {
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);

  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

/**
 * генерирует календарную неделю с днями в которых повторяется задача
 * @return {object} объект календарной недели с днями в которых повторяется задача
 */
const generateRepeating = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInteger(0, 1)),
    th: false,
    fr: Boolean(getRandomInteger(0, 1)),
    sa: false,
    su: false
  };
};

/**
 * генерирует цвет карточки задачи из произвольного массива значений
 * @return {string} строка со значением цвета карточки задачи
 */
const getRandomColor = () => {
  const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
  const randomIndex = getRandomInteger(0, colors.length - 1);

  return COLORS[randomIndex];
};

/**
 * генерует объект задачи
 * @return {object} объект задачи
 */
export const generateTask = () => {
  const dueDate = generateDate();
  const repeating = dueDate === null
    ? generateRepeating()
    : {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    };

  return {
    description: generateDescription(),
    dueDate,
    repeating,
    color: getRandomColor(),
    isArchive: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
