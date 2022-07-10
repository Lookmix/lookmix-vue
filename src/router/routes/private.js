// import Accounts from '@/views/Accounts/Index.vue'
// import Dashboard from '@/views/Dashboard/Index.vue'
// import Settings from '@/views/Settings/Index.vue'
import HomeView from '@/views/HomeView.vue'
import ShuffleLookView from '@/views/ShuffleLookView.vue'
import DailyLookView from '@/views/DailyLookView.vue'
import ClosetView from '@/views/ClosetView.vue'
import ClothesFormView from "@/views/ClothesFormView.vue"

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { 
      pageTitle: "Lookmix",
      backgroundColor: "initial"
    }
  },
  {
    path: '/shuffle-look',
    name: 'shuffleLook',
    component: ShuffleLookView,
    meta: { 
      pageTitle: "Lookmix",
      backgroundColor: "initial"
    }
  },
  {
    path: '/daily-look',
    name: 'dailyLook',
    component: DailyLookView,
    meta: { 
      pageTitle: "Lookmix",
      backgroundColor: "initial"
    }
  },
  {
    path: '/closet',
    name: 'closet',
    component: ClosetView,
    meta: { 
      pageTitle: "Lookmix",
      backgroundColor: "initial"
    }
  },
  {
    path: '/clothes-form',
    name: 'clothesForm',
    component: ClothesFormView,
    meta: { 
      pageTitle: "Adicionar peças", 
      maxHeight: true,
      backgroundColor: "backgroundLighten3"
    }
  },
]

export default routes