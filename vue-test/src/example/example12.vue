<template>
  <div>
    <h2>组件基础</h2>
    <p>要向组件中传递数据，需要用到Props，子组件需要声明注册Props</p>
    <p>如果使用的script setup，要使用defineProps</p>
    <p>如果没使用script setup，那需要以props选项的方式声明</p>
    <p>对于方法来说，script setup需要用defineEmits辅助函数进行声明，同样也需要一个变量承接其返回值</p>

    <strong>使用setup()方法的话有两个注意点：</strong>
    <p>无论是变量还是方法都需要return，视图上才能访问到</p>
    <p>setup()方法可以接受两个参数，props以及ctx，ctx可以访问emit来调用父组件的方法</p>

    <ComTest1 :title="title1" @change-title="changeTitle"/>
    <ComTest2 :title="title2" @change-title="changeTitle2"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComTest1 from '@/components/ComTest1.vue';
import ComTest2 from '@/components/ComTest2.vue';
const title1 = ref('组件1标题')
const title2 = ref('组件2标题')
const changeTitle = () => {
  title1.value = '组件1标题修改'
}
const changeTitle2 = () => {
  title2.value = '组件2标题修改'
}
</script>
