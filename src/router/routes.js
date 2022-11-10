import HomeView from '../views/HomeView.vue'
import NouveauView from '../views/NouveauView.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nouveau',
    name: 'nouveau',
    component: NouveauView
  }
];