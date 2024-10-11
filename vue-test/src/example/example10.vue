<template>
  <div>
    <h2>侦听器watch</h2>
    <p>有些情况下我们需要在状态变化时执行一些副作用</p>
    <p>watch会在每次响应式状态变化时调用</p>
    <p>监听的对象可以是一个计算属性，ref对象，函数，多个数据源组成的数组</p>
    <p>不能监听响应式对象的属性，因为是一个基本数据库类型</p>
    <p>深层监听对象 可以加 deep:true</p>
    <p>想在创建监听时立即执行一次回调 可以加 immediate:true</p>
    <p>想只监听一次的话 可以加 once:true</p>
    <p>侦听器会在组件卸载时停止，想主动停止，执行unwatch()</p>
    <p>默认情况下watch是在数据更新后异步触发，想在数据更新时同步触发，可以加flush: 'sync', 或者使用watchSyncEffect</p>

    <h2>watchEffect & watchPostEffect</h2>
    <p>当需要监听一个对象的多个属性变化，或者一个副作用依赖多个响应式数据时，使用watchEffect更简洁</p>
    <p>自动监听所有涉及到的依赖</p>
    <p>watchEffect自带immediate:true效果</p>
    <p>默认情况下的回调函数会在Dom更新前调用，想在Dom更新后调用的话，使用flush: 'post' 或者watchPostEffect</p>
    <p>默认情况下watch是在数据更新后异步触发，想在数据更新时同步触发，可以加flush: 'sync', 或者使用watchSyncEffect</p>

    <div>{{ count }}</div>
    <div>{{ countMsg }}</div>
    <button @click="addCount">+</button>
    <button @click="changeAge">change obj.age</button>

  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, watchEffect } from 'vue'
const count = ref(0)
const obj = reactive({age: 25})

const addCount = () => {
  count.value++
}
const countMsg = computed(() => {
  return `计算属性${count.value}`
})
const changeAge = () => {
  obj.age++
}
watch(count, (newVal) => {
  console.log('监听count状态更新', newVal);
})

watch(countMsg, (newVal) => {
  console.log('计算属性状态更新', newVal);
})
// 这样是不可以的
// watch(obj.age, (newVal) => {
//   console.log('obj.age状态更新', newVal);
// })

watch(() => obj.age, (newVal) => {
  console.log('obj.age状态更新', newVal);
})

// 当count.value和obj.age更新时自动触发回调,集成了上方三个watch
watchEffect(() => {
  console.log(`watchEffect监听,count:${count.value},age:${obj.age},countMsg:${countMsg.value}`);
})
</script>
