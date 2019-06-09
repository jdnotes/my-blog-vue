import Home from './components/home/home.vue'
import List from './components/list/list.vue'
import Info from './components/info/info.vue'
import Edit from './components/edit/edit.vue'
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
    path: '/edit/9527',
    name: 'edit',
    component: Edit
  },
  {
    path: '/md/9527',
    name: 'md',
    component: Md
  }
]
export default routers
