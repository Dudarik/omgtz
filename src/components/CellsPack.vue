<template>
  <div class="cells-pack">
    <UnoCell
      v-for="cell in props.cellsValues"
      :key="cell.value"
      :cellValue="cell"
    />
  </div>
</template>

<script setup lang="ts">
import { ICellValue } from '../interfaces';
import UnoCell from './UnoCell.vue';

interface IProps {
  cellsValues: ICellValue[];
}
const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
@import '../styles/const';

.cells-pack {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: $wrapperSize;

  gap: 1rem;
}
</style>
