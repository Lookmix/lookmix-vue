import NewUserView from '@/views/NewUserView.vue'
import NewUserView2 from '@/views/NewUserView2.vue'
import LoginView from '@/views/LoginView.vue'
import LoginView2 from '@/views/LoginView2.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    redirect: "/login2",
    meta: {
      backgroundColor: "#ffb6c1ad"
    }
  },
  {
    path: '/login2',
    name: 'login',
    component: LoginView2,
    meta: {
      backgroundColor: "#ffb6c1ad"
    }
  },
  {
    path: '/new-user',
    name: 'newUser',
    component: NewUserView,
    redirect: "/new-user2",
    meta: {
      backgroundColor: "#8341a1d4"
    }
  },
  {
    path: '/new-user2',
    name: 'newUser',
    component: NewUserView2,
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