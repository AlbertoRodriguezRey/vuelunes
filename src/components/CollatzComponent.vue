<template>
    <div class="collatz-container">
        <div class="content-wrapper">
            <h1 class="main-title">🔢 Conjetura de Collatz</h1>
            <p class="description">Descubre la fascinante secuencia matemática que siempre llega a 1</p>
            
            <div class="input-section">
                <label class="input-label">Escribe el numero: </label>
                <input type="text" v-model.number="numero" class="number-input" placeholder="Ej: 27" />
                <button @click="calcularCollatz()" class="calc-button">✨ Calcular</button>
            </div>
            
            <div v-if="secuencia.length > 0" class="results-section">
                <h2 class="results-title">Secuencia generada:</h2>
                <ul class="sequence-list">
                    <li v-for="num in secuencia" :key="num" class="sequence-item">
                        <span v-html="$filters.esParImpar(num)"></span>
                    </li>
                </ul>
            </div>
        </div>
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

<style scoped>
.collatz-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px 20px;
}

.content-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.6s ease;
}

.main-title {
    font-size: 3rem;
    color: #667eea;
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
    border: 3px solid #667eea;
    border-radius: 15px;
    outline: none;
    transition: all 0.3s ease;
    width: 200px;
}

.number-input:focus {
    border-color: #764ba2;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
    transform: scale(1.05);
}

.calc-button {
    padding: 15px 35px;
    font-size: 1.1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.calc-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.calc-button:active {
    transform: translateY(-1px);
}

.results-section {
    animation: slideUp 0.5s ease;
}

.results-title {
    font-size: 1.8rem;
    color: #667eea;
    text-align: center;
    margin-bottom: 30px;
}

.sequence-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.sequence-item {
    margin: 0;
    padding: 15px 25px;
    background: linear-gradient(135deg, #e0e7ff 0%, #f0e7ff 100%);
    border: 2px solid #667eea;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: inline-block;
    transition: all 0.4s ease;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
    animation: popIn 0.3s ease;
}

.sequence-item:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
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

@keyframes popIn {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    80% {
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
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
}
</style>