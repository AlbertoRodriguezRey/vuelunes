<template>
    <div>
        <h1>Conjetura de Collatz</h1>
        <label>Escribe el numero: </label>
        <input type="text" v-model.number="numero" />
        <button @click="calcularCollatz()">Calcular</button>
        <ul>
            <li v-for="num in secuencia" :key="num">
                <span v-html="$filters.esParImpar(num)"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CollatzComponent',
    data() {
        return {
            numero: null,
            secuencia: []
        }
    },
    methods: {
        calcularCollatz() {
            let n = this.numero;
            let secuencia = [];
            while (n !== 1) {
                if (n % 2 === 0) {
                    n = n / 2;
                } else {
                    n = 3 * n + 1;
                }
                secuencia.push(n);
            }
            this.secuencia = secuencia;
        }
    }
}
</script>

<style>
    ul {
        list-style-type: none;

    }

    li {
        margin: 5px;
        padding: 5px;
        background-color: lightblue;
        border: 1px solid gray;
        border-radius: 5px;
        box-shadow: 2px 2px 5px gray;
        width: fit-content;
        display: inline-block;
        transition: background-color 0.6s, transform 0.6s;
        cursor: pointer;
        font: bolder;

    }
    li:hover {
        background-color: deepskyblue;
        transform: scale(1.1);
    }

    button {
        margin-left: 10px;
        padding: 5px 10px;
        background-color: lightblue;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 5px gray;
        cursor: pointer;
        transition: background-color 0.6s, transform 0.6s;
        font-weight: bold;
    }

    button:hover {
        background-color: deepskyblue;
        transform: scale(1.1);
    }
</style>