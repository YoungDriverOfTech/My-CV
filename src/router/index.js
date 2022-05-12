import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
