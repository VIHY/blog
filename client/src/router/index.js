import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header.vue'
import Home from '@/components/Home'
import Note from '@/components/Note.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        header: Header,
        main: Home
      }
    },
    {
      path: '/note',
      name: 'note',
      components: {
        header: Header,
        main: Note
      }
    }
  ]
})