import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import "./index.scss";

const app = createApp(App);
app.use(ElementPlus, { size: "mini" });
app.mount("#app");
