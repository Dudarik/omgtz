import {
  MAX_COL_COUNT,
  MAX_C_VALUE,
  MAX_ROW_COUNT,
  MIN_COL_COUNT,
  MIN_C_VALUE,
  MIN_ROW_COUNT,
} from '../config/const';
import { ICellValue } from '../interfaces';

export const getRandomNumber = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min + 1));

export const getRandom10plus = (max = MAX_COL_COUNT) =>
  getRandomNumber(MIN_COL_COUNT, max);

export const getRandom100plus = (max = MAX_ROW_COUNT) =>
  getRandomNumber(MIN_ROW_COUNT, max);

export const generateRandomElements = () => {
  const cntElements = getRandom100plus();
  const result: ICellValue[][] = [];

  for (let i = 0; i < cntElements; i++) {
    const currentPack: ICellValue[] = [];
    const cntElementsInPack = getRandom10plus();

    for (let j = 0; j < cntElementsInPack; j++) {
      currentPack.push({
        id: `${i}-${j}`,
        isVisible: false,
        value: getRandomNumber(MIN_C_VALUE, MAX_C_VALUE).toString(),
      });
    }
    result.push(currentPack);
  }

  return result;
};
