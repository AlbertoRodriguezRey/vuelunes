<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/collatz">Collatz</router-link>
            </li>
            <li>
                <router-link to="/tablaMultiplicar">Tabla de Multiplicar</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuComponent'
}
</script>

<style>
    ul#menu li {
        text-align: center;
        margin-right: 2px;
        background-color: lightblue;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 5px gray;
        transition: font-size 0.6s , background-color 0.6s;
        
    }
    
    ul#menu li a {
        text-decoration: none;
        color: black;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight:bold;
    }

    ul#menu li:hover {
        background-color: deepskyblue;
        font-size: 20px;
    }
</style>