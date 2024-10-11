<template>
  <div class="references1">
    子组件1
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const a = ref(10);
    const b = ref(20);
    return {
      a,
      b
    };
  },
};
</script>

<style>
.references1 {
  width: 100px;
  height: 100px;
  background-color: bisque;
}
</style>
