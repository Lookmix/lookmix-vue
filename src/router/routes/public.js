import NewUserView from '@/views/NewUserView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/new-user',
    name: 'newUser',
    component: NewUserView
  }
]
export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOutRoute: true,
    maxHeight: true
  }
  return { ...route, meta }
})