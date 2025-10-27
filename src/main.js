import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'
var app = createApp(App);
app.config.globalProperties.$filters = {
    esParImpar(num) {
        if (num % 2 === 0) {
            return "<span style='color:green;'>" + num + "</span>";
        } else {
            return "<span style='color:red;'>" + num + "</span>";
        }
    },
}


app.use(router).mount('#app')
