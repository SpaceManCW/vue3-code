import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

/**
 * createApp()  创建应用实例
 * 接受一个根组件作为应用的入口
 * 返回一个应用实例，这个实例可以用来配置应用的全局属性，插件，组件等
 */
const app = createApp(App)
/**
 * app.config 在应用实例创建时进行全局配置
 * app.config.globalProperties  定义全局变量，所有组件实例中通过this访问
 * app.config.errorHandler  用于捕获和处理组件中的错误
 * app.config.globalComponents  用于注册全局组件
 */
app.config.globalProperties.$appName = 'Vue3 Code'
 
/**
 * use需要在mount之前调用
 */
app.use(router)
app.mount('#app')