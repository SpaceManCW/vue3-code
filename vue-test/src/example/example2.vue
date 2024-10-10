<template>
  <div>
    <H2>Vue Router使用</H2>
    <p>使用组件 RouterLink 来创建链接。这使得 Vue Router 能够在不重新加载页面的情况下改变 URL，处理 URL 的生成、编码和其他功能。</p>
    <p>RouterView 组件可以使 Vue Router 知道你想要在哪里渲染当前 URL 路径对应的路由组件。它不一定要在 App.vue 中，你可以把它放在任何地方，但它需要在某处被导入，否则 Vue Router 就不会渲染任何东西。</p>
    <strong>创建路由器实例</strong>
    <p>路由器实例是通过调用 createRouter() 函数创建的</p>
    <p>一旦创建了我们的路由器实例，我们就需要将其注册为插件，这一步骤可以通过调用 use() 来完成。</p>
    <p>createApp(App).use(router).mount('#app')</p>
    <strong>路由器插件做了以下事情：</strong>
    <p><strong>全局注册 RouterView 和 RouterLink 组件。</strong></p>
    <p><strong>添加全局 $router 和 $route 属性。</strong></p>
    <p><strong>启用 useRouter() 和 useRoute() 组合式函数。</strong></p>
    <p><strong>触发路由器解析初始路由。</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
  const feature = ref();
</script>
