<template>
  <div class="cell-wrapper" :data-id="props.cellValue.id" ref="target">
    <div class="uno-cell" :class="{ visible_cell: props.cellValue.isVisible }">
      {{ props.cellValue.value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { ICellValue } from '../interfaces';
import { ref } from 'vue';
import { useCellsStore } from '../store/useCellsStore';
import { PERCENTAGE_OF_VISIBILITY_CELL } from '../config/const';

interface IProps {
  cellValue: ICellValue;
}

const props = defineProps<IProps>();
const target = ref();

const cellStore = useCellsStore();

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    cellStore.setCellVisible(props.cellValue.id, isIntersecting);
  },
  { threshold: PERCENTAGE_OF_VISIBILITY_CELL }
);
</script>

<style scoped lang="scss">
@import '../styles/const';

@mixin flex-c-c {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cell-wrapper {
  @include flex-c-c;

  width: $wrapperSize;
  height: $wrapperSize;

  &:hover > .uno-cell {
    width: $cellHoverSize;
    height: $cellHoverSize;
  }

  .uno-cell {
    @include flex-c-c;

    width: $cellSize;
    height: $cellSize;

    font-size: 2rem;

    border: 1px solid #dcdde1;
    color: #dcdde1;
    border-radius: 1rem;

    transition: width $transitionDuration, height $transitionDuration,
      color $transitionDuration, border $transitionDuration;

    &.visible_cell {
      border: 1px solid #44bd32;
      color: black;
    }
  }
}
</style>
