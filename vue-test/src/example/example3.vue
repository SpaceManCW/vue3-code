<template>
  <div>
    <H2>ref()</H2> 
    <div @click="changeMessage">
      {{ message }}
    </div>
    <div @click="changeObj1">
      {{ obj1 }}
    </div>
    <div @click="changeObj2">
      {{ obj2 }}
    </div>
    <p>组合式API推荐使用ref()来定义响应式状态，接受一个参数作为初始值</p>
    <p>返回一个响应式状态的ref对象</p>
    <p>通过value属性来访问和修改响应式状态  视图中会自动解包不需要通过.value访问值</p>
    <p>实现相应式的原理则是监听value属性值的变化</p>
    <p>特点：具有深层响应性：即使是数组的变化或者是对象属性的变化，也能检测到</p>
    <p>补充：不想使用深层响应性就使用shallowRef</p>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
const message = ref('Hello Vue3')
const obj1 = ref({ name: 'lin', age: 25 })
const obj2 = shallowRef({ name: 'miaomiao', age: 1.5 })
function changeMessage() {
  // 将 message 的值修改为 'Hello Vue3 setup'
  message.value = 'Hello Vue3 setup'
}


function changeObj1() {
  // 增加 obj1 对象中 value 属性的 age 值
  obj1.value.age++
}

function  changeObj2() {
  obj2.value.age++
}
</script>
