<template>
  <div class="app-root">
    <Sidebar/>
    <div class="view-box">
      <RouterView/>      
    </div>
  </div>
</template>

// 标记setup告诉vue在编译的时候做一些特殊处理  以便使用组合式api
<script setup>
/**
 * ref()
 * 组合式API推荐使用ref()来定义响应式状态，接受一个参数作为初始值
 * 返回一个响应式状态的ref对象
 * 通过value属性来访问和修改响应式状态  视图中会自动解包不需要通过.value访问值
 * 实现相应式的原理则是监听value属性值的变化
 * 特点：具有深层响应性：即使是数组的变化或者是对象属性的变化，也能检测到
 * 不充：不想使用深层响应性就使用shallowRef
 */

import { RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<style lang="scss">
.app-root {
  display: flex;
  .view-box {
    width: 100%;
    margin-left: 10px;
    padding-left: 20px;
    border: 1px solid black;
  }
}
</style>