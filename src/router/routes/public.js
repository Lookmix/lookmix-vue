import NewUserView from '@/views/NewUserView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      backgroundColor: "#ffb6c1ad"
    }
  },
  {
    path: '/new-user',
    name: 'newUser',
    component: NewUserView,
    meta: {
      backgroundColor: "#8341a1d4"
    }
  }
]
export default routes.map(route => {
  route.meta["public"] = true
  route.meta["onlyLoggedOutRoute"] = true
  route.meta["maxHeight"] = true
  return { ...route }
})