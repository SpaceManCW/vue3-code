<template>
  <div class="com-test2" @click="clickTitle">
    {{  title }}
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default{
  // 以props选项的形式，声明props
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  emits: {
    'change-title': () => {}
  },
  // 使用setup()方法的话，无论是变量还是方法都需要使用return返回
  // setup()接受两个参数 props以及ctx，ctx可以访问到emit
  setup(props, ctx) {
    onMounted(() => {
      console.log('props', props.title);
    })
    function clickTitle() {
      ctx.emit('change-title')
    }

    return {
      clickTitle
    }
  }
}

</script>
<style lang="scss">
.com-test2 {
  width: 200px;
  height: 100px;
  background-color:bisque
}
</style>
