<script setup>
 import Xnav from '../components/Xnav.vue'
 import Xfooter from '../components/Xfooter.vue'
</script>
<template>
    <Xnav />
<section class="hero">
    <img src="@/views/assets/kryjki.png" alt="Кружки" class="hero-image">
    <div class="hero-text">
      <h2>Чашка Радости</h2>
      <a href="/catalog" class="btn">Перейти в каталог</a>
    </div>
  </section>

  <section class="products">
    <h2>Новинки</h2>
    <div class="product-grid">
      <div class="product-card">
        <img src="@/views/assets/yut.png" alt="Кружка Уют">
        <h3>Кружка «Уют»</h3>
        <p>1200 ₽</p>
      </div>
      <div class="product-card">
        <img src="@/views/assets/okean.png" alt="Кружка Океан">
        <h3>Кружка «Океан»</h3>
        <p>1300 ₽</p>
      </div>
      <div class="product-card">
        <img src="@/views/assets/rassvet.png" alt="Кружка Рассвет">
        <h3>Кружка «Рассвет»</h3>
        <p>1350 ₽</p>
      </div>
    </div>
  </section>

  <section class="why-us">
    <h2>Почему мы</h2>
    <div class="features">
      <div class="feature">
        <span class="icon">✋</span>
        <h3>Ручная работа</h3>
        <p>Все изделия изготовлены вручную</p>
      </div>
      <div class="feature">
        <span class="icon">✔</span>
        <h3>Высокое качество</h3>
        <p>Мы используем только лучшие материалы</p>
      </div>
      <div class="feature">
        <span class="icon">🏠</span>
        <h3>Уникальный дизайн</h3>
        <p>Оригинальные и неповторимые кружки</p>
      </div>
    </div>
  </section>
        
    <Xfooter />
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  color: #2d2d2d;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
}

.logo {
  font-family: 'Georgia', serif;
  font-size: 24px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #333;
}

.hero {
  position: relative;
  text-align: center;
}

.hero-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.hero-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-text h2 {
  font-size: 70px;
  margin-bottom: 20px;
}

.btn {
  padding: 12px 24px;
  background-color: #eae6df;
  border: 1px solid #ccc;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-radius: 8px;
}

.products {
  text-align: center;
  padding: 40px 20px;
}

.product-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.product-card {
  width: 200px;
}

.product-card img {
  width: 100%;
  border-radius: 8px;
}

.why-us {
  padding: 40px 20px;
  background-color: #fefaf6;
  text-align: center;
}

.features {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.feature {
  max-width: 200px;
}

.icon {
  font-size: 32px;
  display: block;
  margin-bottom: 10px;
}

footer {
  background-color: #f2eee9;
  text-align: center;
  padding: 30px 20px;
}

footer a {
  color: #333;
  text-decoration: none;
}
</style>
