<template>
  <div class="com-test" @click="clickTitle">
    {{ title }}
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// 使用script的话  需要使用辅助函数defineProps
// 函数中要用到props的话  则需要一个变量去承接defineProps方法的返回值
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
// 子组件触发父组件的方法  方法需要声明
// defineEmits 方法也需要一个变量去承接返回值
const emit = defineEmits(['change-title'])
onMounted(() => {
  console.log('props', props.title);
})

const clickTitle = () => {
  emit('change-title')
}
</script>
<style lang="scss">
.com-test {
  width: 200px;
  height: 100px;
  background-color: coral;
}
</style>
