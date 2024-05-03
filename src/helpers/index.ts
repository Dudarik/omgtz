import { ICellValue } from '../interfaces';

export const getRandomNumber = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min + 1));

export const getRandom10plus = (max = 30) => getRandomNumber(10, max);

export const getRandom100plus = (max = 200) => getRandomNumber(100, max);

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
        value: `${i}-${j}`,
      });
    }
    result.push(currentPack);
  }

  return result;
};
