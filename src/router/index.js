import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import gobox from '@/pages/go-box'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/gobox',
      name: 'go-box',
      component: gobox
    }
  ]
})
