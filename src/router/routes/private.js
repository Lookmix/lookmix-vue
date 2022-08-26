// import Accounts from '@/views/Accounts/Index.vue'
// import Dashboard from '@/views/Dashboard/Index.vue'
// import Settings from '@/views/Settings/Index.vue'
import HomeView from '@/views/HomeView.vue'
import ShuffleLookView from '@/views/ShuffleLookView.vue'
import DailyLookView from '@/views/DailyLookView.vue'
import ClosetView from '@/views/ClosetView.vue'
import ClothesFormView from "@/views/ClothesFormView.vue"
import DailyLookSetupView from "@/views/DailyLookSetupView.vue"

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
      backgroundColor: "backgroundLighten3"
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
    props: route => ({ edit: route.query.edit }),
    meta: { 
      pageTitle: "Adicionar peças", 
      maxHeight: true,
      backgroundColor: "backgroundLighten3"
    }
  },
  {
    path: '/daily-look-setup',
    name: 'dailyLookSetup',
    component: DailyLookSetupView,
    meta: { 
      pageTitle: "Rotina semanal", 
      maxHeight: true,
      backgroundColor: "initial"
    }
  },
]

export default routes