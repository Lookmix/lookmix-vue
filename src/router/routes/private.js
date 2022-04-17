// import Accounts from '@/views/Accounts/Index.vue'
// import Dashboard from '@/views/Dashboard/Index.vue'
// import Settings from '@/views/Settings/Index.vue'
import Home from '@/views/Home.vue'
import ShuffleLook from '@/views/ShuffleLook.vue'
import DailyLook from '@/views/DailyLook.vue'
import Closet from '@/views/Closet.vue'

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
  },
  {
    path: '/shuffle-look',
    name: 'shuffleLook',
    component: ShuffleLook,
  },
  {
    path: '/daily-look',
    name: 'dailyLook',
    component: DailyLook,
  },
  {
    path: '/closet',
    name: 'closet',
    component: Closet,
  },
]

export default routes