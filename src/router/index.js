import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Search from '@/pages/search/Search'
import Detail from '@/pages/detail/Detail'
import Classify from '@/pages/classify/Classify'
import Friend from '@/pages/friend/Friend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/classify',
      name: 'Classify',
      component: Classify
    }, {
      path: '/friend',
      name: 'Friend',
      component: Friend
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
