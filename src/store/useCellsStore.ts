import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { generateRandomElements } from '../helpers';

const getCellRC = (id: string) => {
  const [row, col] = id.split('-');
  return [parseInt(row), parseInt(col)];
};

export const useCellsStore = defineStore('cells', () => {
  const cells = ref(generateRandomElements());

  const getVisibleCellsIds = computed(() =>
    cells.value
      .flat()
      .filter((el) => el.isVisible === true)
      .map((item) => item.id)
  );

  function setCellVisible(id: string, isVisible = true) {
    const [row, col] = getCellRC(id);
    cells.value[row][col].isVisible = isVisible;
  }

  function setCellValue(id: string, newValue: string) {
    const [row, col] = getCellRC(id);
    cells.value[row][col].value = newValue;
  }

  return { cells, setCellVisible, setCellValue, getVisibleCellsIds };
});
