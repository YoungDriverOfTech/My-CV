import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/resume/Resume'
import Home from '@/components/Home'
import ProjectExperiences from '@/components/ProjectExperiences'

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
    },
    {
      path: '/project',
      name: 'Rroject',
      component: ProjectExperiences
    }
  ]
})
