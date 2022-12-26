
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {createPinia} from 'pinia'
import "./assets/tailwind.css";

    



createApp(App).use(store).use(router).use(createPinia()).mount("#app");
