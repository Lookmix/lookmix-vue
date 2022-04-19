// import Accounts from '@/views/Accounts/Index.vue'
// import Dashboard from '@/views/Dashboard/Index.vue'
// import Settings from '@/views/Settings/Index.vue'
import HomeView from '@/views/HomeView.vue'
import ShuffleLookView from '@/views/ShuffleLookView.vue'
import DailyLookView from '@/views/DailyLookView.vue'
import ClosetView from '@/views/ClosetView.vue'
import ClothesFormView from "@/views/ClothesFormView.vue"

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
    component: HomeView,
    meta: { pageTitle: "Lookmix" }
  },
  {
    path: '/shuffle-look',
    name: 'shuffleLook',
    component: ShuffleLookView,
    meta: { pageTitle: "Lookmix" }
  },
  {
    path: '/daily-look',
    name: 'dailyLook',
    component: DailyLookView,
    meta: { pageTitle: "Lookmix" }
  },
  {
    path: '/closet',
    name: 'closet',
    component: ClosetView,
    meta: { pageTitle: "Lookmix" }
  },
  {
    path: '/clothes-form',
    name: 'clothesForm',
    component: ClothesFormView,
    meta: { pageTitle: "Adicionar peças", maxHeight: true }
  },
]

export default routes