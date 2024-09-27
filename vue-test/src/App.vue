<template>
  <div @click="changeMessage">
    {{ message }}
  </div>
</template>

// 标记setup告诉vue在编译的时候做一些特殊处理  以便使用组合式api
<script setup>
import { ref, onMounted } from 'vue'

const message = ref('Hello Vue3')
function  changeMessage() {
  message.value = 'Hello Vue3 setup'
}

onMounted(() => {
  console.log('mounted');
})
</script>