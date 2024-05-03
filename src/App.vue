<script setup lang="ts">
import { onMounted } from 'vue';
import CellsPack from './components/CellsPack.vue';
import { useCellsStore } from './store/useCellsStore';
import { getRandomNumber } from './helpers';
import { MAX_C_VALUE, MIN_C_VALUE, TIMEOUT_CHANGE_CELL } from './config/const';

const cellsStore = useCellsStore();

const intervalCallback = () => {
  const updateId = getRandomNumber(0, cellsStore.getVisibleCellsIds.length - 1);
  const newVal = getRandomNumber(MIN_C_VALUE, MAX_C_VALUE);
  cellsStore.setCellValue(
    cellsStore.getVisibleCellsIds[updateId],
    newVal.toString()
  );
};

onMounted(() => {
  setInterval(intervalCallback, TIMEOUT_CHANGE_CELL);
});
</script>

<template>
  <div class="cellpack-wrapper" ref="observer">
    <CellsPack
      v-for="(item, index) in cellsStore.cells"
      :key="index"
      :cellsValues="item"
    />
  </div>
</template>

<style scoped lang="scss">
.cellpack-wrapper {
  display: flex;
  flex-direction: column;

  gap: 1rem;
}
</style>
