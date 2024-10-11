import { createMemoryHistory, createRouter } from 'vue-router'

import Example1 from './example/example1.vue'
import Example2 from './example/example2.vue'
import Example3 from './example/example3.vue'
import Example4 from './example/example4.vue'
import Example5 from './example/example5.vue'
import Example6 from './example/example6.vue'
import Example7 from './example/example7.vue'
import Example8 from './example/example8.vue'
import Example9 from './example/example9.vue'
import Example10 from './example/example10.vue'
import Example11 from './example/example11.vue'
// import Example12 from './example/example12.vue'


const routes = [
  { path: '/example1', component: Example1 },
  { path: '/example2', component: Example2 },
  { path: '/example3', component: Example3 },
  { path: '/example4', component: Example4 },
  { path: '/example5', component: Example5 },
  { path: '/example6', component: Example6 },
  { path: '/example7', component: Example7 },
  { path: '/example8', component: Example8 },
  { path: '/example9', component: Example9 },
  { path: '/example10', component: Example10 },
  { path: '/example11', component: Example11 },
  // { path: '/example12', component: Example12 },
  // { path: '/example13', component: Example13 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router