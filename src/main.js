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
    //Hacemos el calculo por filtros globales de la tabla de multiplicar
    getOperacion(num) {
        var operacion = "";
        //Generamos la operacion sin el resultado
        for (let i = 1; i <= 10; i++) {
            operacion += num + " x " + i + " = " + "<br/>";
        }
        return operacion
    },
    getResultado(num) {
        var resultado = "";
        //Generamos solo el resultado de la operacion
        for (let i = 1; i <= 10; i++) {
            resultado += (num * i) + "<br/>";
        }
        return resultado
    }
}


app.use(router).mount('#app')
