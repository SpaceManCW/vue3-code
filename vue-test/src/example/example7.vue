<template>
  <div>
    <h2>条件&列表渲染</h2>
    <strong>条件渲染主要是v-if 和 v-show</strong>
    <p>v-if 如果要切换的不止一个元素的话，可以使用template标签包裹一下</p>
    <p>使用temolate包裹的好处是，不引入额外的dom元素</p>
    <p>v-show表现与v-if一样，但是v-show即使为false也会渲染元素，不显示是通过css控制的，v-if不满足条件不会显示</p>
    <p>因此v-if切换开销更大，反复渲染，v-show初始渲染开销大，频繁切换场景使用v-show</p>
  </div>
</template>

<script setup>

</script>
