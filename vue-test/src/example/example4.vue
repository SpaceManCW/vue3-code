<template>
  <div>
    <h2>reactive()</h2>
    <strong>reactive()是另一种声明响应式数据的方法，与ref()的使用区别主要是：</strong>
    <p>1. reactive()只能声明相应式的对象，ref()可以声明对象，也可以声明基础数类型</p>
    <p>2. reactive()可以直接访问对象属性，ref()需要先访问.value</p>
    <p>3. reactive()声明的响应式对象可以进行解构，但是解构出的变量不再具有响应性</p>
    <p>4. 可以给ref的值重新分配给一个新对象，而reactive只能修改当前代理的属性</p>
    <p>5. watch默认只观察ref的value，而对reactive则执行深度监听</p>
    <br/>
    <strong>二者实现方式上的区别：</strong>
    <p>ref底层是Object.defineProperty对中间对象的value的劫持，reactive是通过Proxy进行劫持，所以无法对基本数据类型进行操作</p>
    <p>ref返回Ref类型，reactive返回的是传入对象的代理</p>
    <p>ref()在原始数据位Object类形时，会通过reactive包装原始数据后再赋值给_value。</p>
    <button @click="changeAge">修改age</button>

    <div>响应式对象：{{ reactiveObj }}, 解构出的属性name: {{ name }}, age: {{ age }}</div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const reactiveObj = reactive({ name: 'lin', age: 25 })
const { name, age } = reactiveObj

const changeAge = () => {
  reactiveObj.age++
}
</script>