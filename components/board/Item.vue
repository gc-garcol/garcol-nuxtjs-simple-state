<template>
  <div class="com-board-item">
    {{item}}
  </div>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style>
.com-board-item {
  width: 100%;
  min-width: 180px;
  height: 32px;
  cursor: move;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
