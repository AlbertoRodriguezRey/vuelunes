<template>
    <div class="tabla-container">
        <div class="content-wrapper">
            <h1 class="main-title">🧮 Tabla de Multiplicar</h1>
            <p class="description">Aprende las tablas de multiplicar de forma interactiva</p>
            
            <div class="input-section">
                <label class="input-label">Escribe el numero: </label>
                <input type="number" v-model.number="numero" class="number-input" placeholder="Ej: 7" />
                <button @click="calcularMultiplicar()" class="calc-button">📊 Calcular</button> 
            </div>

            <div v-if="tabla.length > 0" class="tables-container">
                <div class="table-section">
                    <h2 class="section-title">Tabla con Métodos</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Operación</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 10" :key="'metodo-'+i">
                                <td>{{ numero }} × {{ i }}</td>
                                <td class="result">{{ numero * i }}</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
                
                <div class="table-section" v-html="tablaMultiplicar"></div>
                
                <div class="table-section">
                    <h2 class="section-title">Tabla con Filters</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Operación</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 10" :key="'filter-'+i">
                                <td>{{ numero }} × {{ i }}</td>
                                <td class="result">{{ numero * i }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TablaMultiplicar',

    data() {
        return {
            numero: null,
            tabla: []
        }
    },
    computed: {
        tablaMultiplicar() {
            let n = this.numero;
            let tabla = [];
            for (let i = 1; i <= 10; i++) {
                tabla.push(n * i);
            }
            return `
                <h2 class="section-title">Tabla con Computed</h2>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tabla.map((valor, index) => `
                            <tr>
                                <td>${n} × ${index + 1}</td>
                                <td class="result">${valor}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        }
    },
    methods: {
        calcularMultiplicar() {
            let n = this.numero;
            let tabla = [];
            for (let i = 1; i <= 10; i++) {
                tabla.push(n * i);
            }
            this.tabla = tabla;
        }
    }
}
</script>

<style scoped>
.tabla-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    padding: 40px 20px;
}

.content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.6s ease;
}

.main-title {
    font-size: 3rem;
    color: #11998e;
    text-align: center;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.description {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
}

.input-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.input-label {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
}

.number-input {
    padding: 15px 25px;
    font-size: 1.1rem;
    border: 3px solid #11998e;
    border-radius: 15px;
    outline: none;
    transition: all 0.3s ease;
    width: 200px;
}

.number-input:focus {
    border-color: #38ef7d;
    box-shadow: 0 0 20px rgba(17, 153, 142, 0.3);
    transform: scale(1.05);
}

.calc-button {
    padding: 15px 35px;
    font-size: 1.1rem;
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(17, 153, 142, 0.4);
}

.calc-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(17, 153, 142, 0.6);
}

.calc-button:active {
    transform: translateY(-1px);
}

.tables-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    animation: slideUp 0.5s ease;
}

.table-section {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2f1 100%);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.table-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.section-title {
    font-size: 1.5rem;
    color: #11998e;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
}

.styled-table {
    width: 100%;
    margin: 20px auto;
    border-collapse: collapse;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.styled-table thead {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    color: white;
}

.styled-table th {
    padding: 15px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
}

.styled-table td {
    border: 1px solid #e0e0e0;
    text-align: center;
    padding: 12px;
    transition: background-color 0.3s ease;
}

.styled-table tbody tr:hover {
    background-color: #e0f2f1;
}

.styled-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

.styled-table tbody tr:nth-child(even):hover {
    background-color: #e0f2f1;
}

.result {
    font-weight: bold;
    color: #11998e;
    font-size: 1.1rem;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .content-wrapper {
        padding: 30px 20px;
    }
    
    .main-title {
        font-size: 2rem;
    }
    
    .input-section {
        flex-direction: column;
    }
    
    .number-input {
        width: 100%;
    }
    
    .calc-button {
        width: 100%;
    }
    
    .tables-container {
        grid-template-columns: 1fr;
    }
}
</style>