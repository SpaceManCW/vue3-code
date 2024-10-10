import { createMemoryHistory, createRouter } from 'vue-router'

import Example1 from './example/example1.vue'
import Example2 from './example/example2.vue'
import Example3 from './example/example3.vue'

const routes = [
  { path: '/example1', component: Example1 },
  { path: '/example2', component: Example2 },
  { path: '/example3', component: Example3 },
  // { path: '/example4', component: Example4 },
  // { path: '/example5', component: Example5 },
  // { path: '/example6', component: Example6 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router