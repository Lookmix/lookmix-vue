// import Accounts from '@/views/Accounts/Index.vue'
// import Dashboard from '@/views/Dashboard/Index.vue'
// import Settings from '@/views/Settings/Index.vue'
import Home from '@/views/Home.vue'

const routes = [
  // {
  //   path: '/accounts',
  //   name: 'accounts',
  //   component: Accounts
  //   meta: { public: false }
  // }
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { public: false }
  }
]

export default routes