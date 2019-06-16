import Home from './components/home/home'
import Info from './components/info/info'
import Md from './components/edit/md'
import About from './components/about/about'
import Message from './components/message/message'
import Life from './components/life/life'

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
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/life',
    name: 'life',
    component: Life
  },
  {
    path: '/md/editor',
    name: 'md',
    component: Md
  }
]
export default routers
