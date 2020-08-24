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
