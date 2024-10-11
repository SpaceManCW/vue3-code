<template>
  <div class="side-bar">
    <div v-for="(item, index) in sideList" :key="index" class="side-item">
      <RouterLink :to="item.path">{{ item.name }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const sideList = ref([
  { name: 'Vue理解', path: '/example1' },
  { name: 'Vue Router使用', path: '/example2' },
  { name: 'ref()', path: '/example3' },
  { name: 'reactive()', path: '/example4' },
  { name: '计算属性', path: '/example5' },
  { name: '样式绑定', path: '/example6' },
  { name: '条件&列表渲染', path: '/example7' },
  { name: '事件处理&v-model', path: '/example8' },
  { name: '生命周期', path: '/example9' },
  { name: '侦听器watch', path: '/example10' },
  { name: '模版引用', path: '/example11' },
])
</script>

<style lang="scss">
.side-bar {
  width: 220px;
  height: 100vh;
  border: 1px solid black;
  .side-item {
    height: 50px;
    line-height: 50px;
    background-color: rgb(143, 237, 237);
    margin: 10px;
    font-size: 18px;
    padding-left: 10px;
  }
}
</style>