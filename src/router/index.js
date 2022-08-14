import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import EventDetails from '../views/EventDetails.vue'
import About from '../views/About.vue'

import EventCreate from '../views/EventCreate.vue'
import EventShow from '../views/EventShow.vue'
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails
  },
  {
    path: '/event/:id',
    name: 'eventShow',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'eventCreate',
    component: EventCreate
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
