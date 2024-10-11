<template>
  <div>
    <h2>样式绑定</h2>
    <strong>常用样式绑定有两种，绑定一个对象，或者一个数组</strong>
    <p>绑定对象，传递一个对象来动态切换class 例如 :class="{ active: isActive }"</p>
    <p>绑定数组，绑定一个数组来渲染多个CSS class 例如 :class="['class1', isClass2 ? 'class2' : '']"</p>

    <strong>在组件上使用时有个注意点：当在组件上绑定class，那么class挂在组件的根节点，如果有多个根节点，可在组件中指定由哪个根节点来挂class</strong>
    <p>例如： :class="$attrs.class"</p>
    <div :class="{ active: isActive }"></div>
    <div :class="['class1', isClass2 ? 'class2' : '']"></div>
    <button @click="changeClass2">切换颜色</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true)
const isClass2 = ref(false)
const changeClass2 = () => {
  isClass2.value = !isClass2.value
}
</script>

<style>
.active {
  width: 200px;
  height: 200px;
  background-color: aqua;
}

.class1 {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
}

.class2 {
  background-color:blueviolet;
}
</style>
