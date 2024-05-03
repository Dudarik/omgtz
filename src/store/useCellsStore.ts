import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { generateRandomElements } from '../helpers';

export const useCellsStore = defineStore('cells', () => {
  const cells = ref(generateRandomElements());

  const getVisibleCellsIds = computed(() =>
    cells.value
      .flat()
      .filter((el) => el.isVisible === true)
      .map((item) => item.id)
  );

  const getCells = computed(() => cells.value);

  function setCellVisible(id: string, isVisible = true) {
    const [row, col] = id.split('-');
    cells.value[parseInt(row)][parseInt(col)].isVisible = isVisible;
  }

  function setCellValue(id: string, newValue: string) {
    const [row, col] = id.split('-');
    cells.value[parseInt(row)][parseInt(col)].value = newValue;
  }

  return { cells, setCellVisible, setCellValue, getVisibleCellsIds, getCells };
});
