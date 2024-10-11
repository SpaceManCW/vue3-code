<template>
  <h2>计算属性</h2>
  <strong>使用方法：</strong>
  <p>引入computed</p>
  <p>computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref</p>
  <p>和其他一般的 ref 类似，你可以通过 publishedBooksMessage.value 访问计算结果</p>

  <strong>至于为什么使用计算属性：</strong>
  <p>1. 可以避免在视图上写过多的复杂逻辑</p>
  <p>2. 计算属性依赖响应式数据，具有缓存的效果，只有响应式数据更新时计算属性才会更新，如果是方法的话每次重新渲染都会重新调用，计算属性性能更好</p>
  <span>书籍的数量+年龄：{{ publishedBooksMessage }}</span> <span>年龄：{{ personAge }}</span>
  <button @click="delBooks">减少书籍</button>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const person = ref({
  name: 'lin',
  age: 25
})
const delBooks = () => {
  author.books.pop()
}
// 一个计算属性 ref  访问计算属性的值和ref一样需要加.value
const publishedBooksMessage = computed(() => {
  return author.books.length + personAge.value
})

// 如果是处理的ref这里仍然需要.value
const personAge = computed(() => {
  return person.value.age
})
</script>