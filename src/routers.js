import Home from './components/home/home.vue'
import Info from './components/info/info.vue'
import Edit from './components/edit/edit.vue'

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
    path: '/info/:id',
    name: 'info',
    component: Info
  },
  {
    path: '/edit/9527',
    name: 'edit',
    component: Edit
  }
]
export default routers
