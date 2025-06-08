<script setup>
import Xnav from '../components/Xnav.vue'
import Xfooter from '../components/Xfooter.vue'
import { ref, onMounted } from 'vue'

const filterStyle = ref('all')

const applyFilter = () => {
  document.querySelectorAll('.product-card').forEach(card => {
    const style = card.dataset.style
    if (filterStyle.value === 'all' || style === filterStyle.value) {
      card.style.display = ''
    } else {
      card.style.display = 'none'
    }
  })
}

onMounted(() => {
  applyFilter()
})
</script>
<template>
    <Xnav />
<main class="catalog-page">
    <h2 class="page-title">Каталог</h2>
    
    <div class="filters">
      <fieldset>
        <legend>Фильтр по стилю</legend>
        <label><input type="radio" name="style" value="all" v-model="filterStyle" @change="applyFilter" checked> Все</label>
        <label><input type="radio" name="style" value="минимализм" v-model="filterStyle" @change="applyFilter"> Минимализм</label>
        <label><input type="radio" name="style" value="винтаж" v-model="filterStyle" @change="applyFilter"> Винтаж</label>
        <label><input type="radio" name="style" value="графика" v-model="filterStyle" @change="applyFilter"> Графика</label>
      </fieldset>
    </div>

    <div class="product-grid">
      <div class="product-card" data-style="минимализм">
        <img src="@/views/assets/emal.png" alt="Кружка Эмаль">
        <h3>Кружка «Эмаль»</h3>
        <p>1200 ₽</p>
      </div>
      <div class="product-card" data-style="графика">
        <img src="@/views/assets/yagodi.png" alt="Кружка Ягоды">
        <h3>Кружка «Ягоды»</h3>
        <p>1200 ₽</p>
      </div>
      <div class="product-card" data-style="минимализм">
        <img src="@/views/assets/oblako.png" alt="Кружка Облако">
        <h3>Кружка «Облако»</h3>
        <p>1200 ₽</p>
      </div>
      <div class="product-card" data-style="винтаж">
        <img src="@/views/assets/osen.png" alt="Кружка Осень">
        <h3>Кружка «Осень»</h3>
        <p>1000 ₽</p>
      </div>
      <div class="product-card" data-style="графика">
        <img src="@/views/assets/okean.png" alt="Кружка Океан">
        <h3>Кружка «Океан»</h3>
        <p>1400 ₽</p>
      </div>
      <div class="product-card" data-style="винтаж">
        <img src="@/views/assets/glina.png" alt="Кружка Глина">
        <h3>Кружка «Глина»</h3>
        <p>1300 ₽</p>
      </div>
      <div class="product-card" data-style="графика">
        <img src="@/views/assets/polosy.png" alt="Кружка Полосы">
        <h3>Кружка «Полосы»</h3>
        <p>1300 ₽</p>
      </div>
      <div class="product-card" data-style="минимализм">
        <img src="@/views/assets/trava.png" alt="Кружка Трава">
        <h3>Кружка «Трава»</h3>
        <p>1250 ₽</p>
      </div>
    </div>

    <section class="order-form">
  <h2>Форма заказа</h2>
  <form>
    <div class="form-row">
      <input type="text" placeholder="Имя" required>
      <input type="text" placeholder="Фамилия" required>
      <input type="email" placeholder="Email" required>
    </div>
    
    <div class="checkbox-group">
      <label><input type="checkbox" name="cups" value="Эмаль"> Кружка «Эмаль»</label>
      <input type="number" name="Эмаль-qty" min="1" value="1"><br>

      <label><input type="checkbox" name="cups" value="Ягоды"> Кружка «Ягоды»</label>
      <input type="number" name="Ягоды-qty" min="1" value="1"><br>

      <label><input type="checkbox" name="cups" value="Облако"> Кружка «Облако»</label>
      <input type="number" name="Облако-qty" min="1" value="1"><br>

      <label><input type="checkbox" name="cups" value="Осень"> Кружка «Осень»</label>
      <input type="number" name="Осень-qty" min="1" value="1"><br>

      <label><input type="checkbox" name="cups" value="Океан"> Кружка «Океан»</label>
      <input type="number" name="Океан-qty" min="1" value="1"><br>

      <label><input type="checkbox" name="cups" value="Глина"> Кружка «Глина»</label>
      <input type="number" name="Глина-qty" min="1" value="1"><br>

      <label><input type="checkbox" name="cups" value="Полосы"> Кружка «Полосы»</label>
      <input type="number" name="Полосы-qty" min="1" value="1"><br>

      <label><input type="checkbox" name="cups" value="Трава"> Кружка «Трава»</label>
      <input type="number" name="Трава-qty" min="1" value="1"><br>
    </div>

    <button type="submit">Отправить</button>
  </form>
</section>
  </main>
    <Xfooter />
        
        

</template>

<style scoped>
body {
  font-family: 'Georgia', serif;
  background-color: #fdf7ef;
  margin: 0;
  color: #2a2a2a;
}

header {
  border-bottom: 1px solid #ddd;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
}

.logo {
  font-size: 24px;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #333;
}

    .catalog-page {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 40px;
    }

.page-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.filters fieldset {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
}

.product-card img {
  width: 100%;
  border-radius: 8px;
}

.product-card h3 {
  font-size: 18px;
  margin: 10px 0 5px;
}

.order-form {
  margin-top: 50px;
}

.order-form h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.form-row input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox-group input[type="number"] {
  width: 60px;
  padding: 6px;
}

button {
  padding: 12px 24px;
  background-color: #b48050;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
