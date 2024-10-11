<template>
  <div>
    <h2>事件处理</h2>
    <p>主要有几个需要注意的点：</p>
    <p>事件参数：有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 $event 变量</p>
    <strong>事件修饰符:</strong>
    <p>.stop 阻止冒泡</p>
    <p>.prevent 阻止默认行为</p>
    <p>.self 事件处理器不来自子元素，阻止元素及其子元素的所有默认行为</p>
    <p>.once 事件只触发一次</p>
    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>

    <h2>v-model</h2>
    <p>v-model可以添加修饰符：</p>
    <p>.lazy v-model 会在每次 input 事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 lazy 修饰符来改为在每次 change 事件后更新数据</p>
    <p>.trim 自动去掉两端的空格</p>
    <p>{{ inputText }}</p>
    <input type="text" v-model.lazy="inputText"/>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const inputText = ref('')
function warn(message, event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
watch(inputText, (newVal) => {
  console.log(`inputText is ${newVal}`)
})

</script>
