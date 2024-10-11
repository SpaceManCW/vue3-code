<template>
  <div>
    <h2>模板引用</h2>
    <p>某些情况下需要直接访问Dom元素，要实现这一点需要使用ref</p>
    <p>ref允许我们在一个特定的Dom元素被挂载后获得对它的直接引用</p>
    <p>在vue3.5之前 需要创建一个与dom元素的ref属性同名的ref对象去承接模板引用</p>
    <p>3.5之后使用辅助函数useTemplateRef 返回的是一个ref对象 需要通过.value访问其子组件的状态和方法</p>
    <input ref="input" />
    <input ref="input2" />

    <h2>组件模板引用</h2>
    <p>如果没使用script setup，那么使用ref获得的是子组件实例，和子组件的this等价，可以访问到子组件的状态和方法等</p>
    <p>使用了script setup的话，组件默认是私有的，父组件无法访问到子组件的任何东西，除非子组件使用defineExpose宏显式暴露</p>
    <References1 ref="references1"/>
    <References2 ref="references2"/>
  </div>
</template>

<script setup>
import { ref, onMounted, useTemplateRef } from 'vue'
import References1 from '@/components/References1.vue'
import References2 from '@/components/References2.vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)
const input2 = useTemplateRef('input2')

const references1 = useTemplateRef('references1')
const references2 = useTemplateRef('references2')

onMounted(() => {
  input.value.focus()
  input2.value.value = 'Hello Vue3'
  console.log('references1 ref', references1.value.a);
  console.log('references2 ref', references2.value.a);
})
</script>