// import Accounts from '@/views/Accounts/Index.vue'
// import Dashboard from '@/views/Dashboard/Index.vue'
// import Settings from '@/views/Settings/Index.vue'

const routes = [
  // {
  //   path: '/accounts',
  //   name: 'accounts',
  //   component: Accounts
  // }
]

export default routes.map(route => {
  return { ...route, meta: { public: false } }
})