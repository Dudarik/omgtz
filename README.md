# Vue 3 + TypeScript + Vite + Pinia

Тестовое задание для https://omgapp.ru/

## [Деплой на netilfy](https://66348224eeff06ad9a6315a6--glistening-travesseiro-39a775.netlify.app/)

> - Вертикальный список на рандомное количество элементов (больше 100).
> - В каждом элементе вертикального списка – горизонтальный список на рандомное количество элементов (больше 10). Каждая ячейка – квадратик с бордером и скругленными углами (произвольный радиус), отображающий случайное число. При наведении на квадратик он должен анимированно уменьшаться на 20% (при наведении уменьшаться, при уходе курсора за границы возвращаться к прежним размерам)
>   Раз в секунду обновляется одно случайное число во всех горизонтальных списках (только в видимой области).

```js
// Настройки в /src/config/consts.ts

export const TIMEOUT_CHANGE_CELL = 1000; //таймаут обновления ячейки

export const MAX_ROW_COUNT = 200; // Максимальное количество строк
export const MIN_ROW_COUNT = 100; // Минимальное количество строк
export const MAX_COL_COUNT = 30; // Максимальное количество ячеек в строке
export const MIN_COL_COUNT = 10; // Минимальное количество ячеек в строке

export const MIN_C_VALUE = 0; // Минимальное значение в ячейке
export const MAX_C_VALUE = 100; // Максимальное значение в ячейке

export const PERCENTAGE_OF_VISIBILITY_CELL = 1; //Процент, при которм ячейка считается видимой от 0 до 1
```

```js
"scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  }
```
