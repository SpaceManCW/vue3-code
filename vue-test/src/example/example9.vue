<template>
  <div>
    <h2>生命周期</h2>
    <p>onBeforeMount() 响应式数据设置完成，组件挂载之前调用</p>
    <p>onMounted() 组件挂载完执行</p>
    <p>onBeforeUpdate() 响应式状态更新后，DOM更新前调用</p>
    <p>onUpdated() 响应式状态更新后。DOM更新后调用</p>
    <p>onBeforeUnmount() 组件实例被卸载之前调用</p>
    <p>onUnmounted() 组件实例被卸载后调用</p>
    <p>onActivated() keepalive组件被插入到DOM中时调用</p>
    <p>onDeactivated() keepalive组件被从DOM中移除时调用</p>
    <div>count: {{ count }}</div>
    <button @click="addCount">+</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
const count = ref(0)
const addCount = () => {
  count.value++
}
onBeforeMount(() => {
  console.log('onBeforeMount');
})
onMounted(() => {
  console.log('onMounted');
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate', count.value);
})
onUpdated(() => {
  console.log('onUpdated', count.value);
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount', count.value);
})
onUnmounted(() => {
  console.log('onUnmounted', count.value);
})
</script>
