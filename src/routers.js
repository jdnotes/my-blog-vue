import Home from './components/home/home.vue'
import List from './components/list/list.vue'
import Info from './components/info/info.vue'
import Md from './components/edit/md.vue'

const routers = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/info/:id',
    name: 'info',
    component: Info
  },
  {
    path: '/md/editor',
    name: 'md',
    component: Md
  }
]
export default routers
