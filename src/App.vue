<script setup lang="ts">
import { onMounted } from 'vue';
import CellsPack from './components/CellsPack.vue';
import { useCellsStore } from './store/useCellsStore';
import { getRandomNumber } from './helpers';

const cellsStore = useCellsStore();

onMounted(() => {
  setInterval(() => {
    const updateId = getRandomNumber(
      0,
      cellsStore.getVisibleCellsIds.length - 1
    );
    const newVal = getRandomNumber(0, 100);
    cellsStore.setCellValue(
      cellsStore.getVisibleCellsIds[updateId],
      newVal.toString()
    );
  }, 1000);
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
