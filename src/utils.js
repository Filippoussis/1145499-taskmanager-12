/**
 * генерирует случайное число из диапазона
 * источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
 * @param {number} a - первое число из диапазона
 * @param {number} b - конечное число из диапазона
 * @return {number} случайное число из диапазона
 */
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

/**
 * проверяет истек срок дедлайна задачи или нет
 * @param {object} dueDate - дата и время дедлайна задачи, либо null при его отсутствии
 * @return {boolean} возвращает true если дедлайн просрочен и false если дедлайн не наступил
 */
export const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() > dueDate.getTime();
};

export const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

/**
 * проверяет значения ключей объекта на равенство true
 * @param {object} repeating - объект календарной недели с днями в которых повторяется задача
 * @return {boolean} возвращает true если хотя бы значение одного из ключей объекта равно true
 */
export const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

export const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});
};
