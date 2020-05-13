import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const HelloWorld = () => import('@/components/HelloWorld')

export default new VueRouter({
  routes: [{
      path: '/',
      name: 'hello-world',
      component: HelloWorld
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})