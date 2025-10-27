<template>
    <div class="home-container">
        <div class="hero-section">
            <div class="hero-content">
                <h1 class="title">Bienvenido a Vue App</h1>
                <p class="subtitle">Explora las maravillas de Vue.js</p>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="icon">🧮</div>
                        <h3>Tabla de Multiplicar</h3>
                        <p>Calcula tablas de multiplicar de forma interactiva</p>
                        <router-link to="/tablamultiplicar" class="btn-primary">Explorar</router-link>
                    </div>
                    <div class="feature-card">
                        <div class="icon">🔢</div>
                        <h3>Conjetura de Collatz</h3>
                        <p>Descubre la secuencia matemática más fascinante</p>
                        <router-link to="/collatz" class="btn-primary">Descubrir</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-section">
            <h2>¿Por qué Vue.js?</h2>
            <div class="info-cards">
                <div class="info-card">
                    <span class="emoji">⚡</span>
                    <h4>Rápido</h4>
                    <p>Rendimiento optimizado</p>
                </div>
                <div class="info-card">
                    <span class="emoji">🎨</span>
                    <h4>Flexible</h4>
                    <p>Diseña como quieras</p>
                </div>
                <div class="info-card">
                    <span class="emoji">🚀</span>
                    <h4>Potente</h4>
                    <p>Funcionalidad completa</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeComponent'
}
</script>

<style scoped>
.home-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-section {
    padding: 80px 20px;
    text-align: center;
    color: white;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
}

.title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeInDown 1s ease;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 60px;
    opacity: 0.9;
    animation: fadeInUp 1s ease;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.feature-card {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #333;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.icon {
    font-size: 4rem;
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #667eea;
}

.feature-card p {
    color: #666;
    margin-bottom: 25px;
    line-height: 1.6;
}

.btn-primary {
    display: inline-block;
    padding: 12px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.info-section {
    background: white;
    padding: 80px 20px;
    text-align: center;
}

.info-section h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 50px;
}

.info-cards {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: 0 auto;
}

.info-card {
    flex: 1;
    min-width: 200px;
    padding: 30px;
    border-radius: 15px;
    background: #f8f9fa;
    transition: transform 0.3s ease;
}

.info-card:hover {
    transform: scale(1.05);
}

.emoji {
    font-size: 3rem;
    display: block;
    margin-bottom: 15px;
}

.info-card h4 {
    font-size: 1.5rem;
    color: #667eea;
    margin-bottom: 10px;
}

.info-card p {
    color: #666;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
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
    .title {
        font-size: 2.5rem;
    }
    
    .subtitle {
        font-size: 1.2rem;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
    }
}
</style>