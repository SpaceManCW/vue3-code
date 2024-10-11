<template>
  <div class="references2">
    使用script setup 子组件2
  </div>
</template>

<script setup>
import { ref } from 'vue';
const a = ref(10);
const b = ref(20);
// script setup的子组件   父组件想要通过ref拿到子组件的状态和方法等  需要使用defineExpose暴露出来
defineExpose({a,b})
</script>

<style>
.references2 {
  width: 100px;
  height: 100px;
  background-color: rgb(196, 255, 233);
}
</style>
