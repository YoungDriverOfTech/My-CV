import Vue from 'vue'
import Router from 'vue-router'
import ResumePage from '@/pages/ResumePage'
import Home from '@/pages/Home'
import ProjectExperiences from '@/pages/ProjectExperiences'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resumepage',
      name: 'ResumePage',
      component: ResumePage
    },
    {
      path: '/project',
      name: 'Rroject',
      component: ProjectExperiences
    }
  ]
})
