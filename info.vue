<script setup>
 import Xnav from '../components/Xnav.vue'
    import Xfooter from '../components/Xfooter.vue'
    import Xcontacts from '../components/Xcontacts.vue'
</script>
<template>
    <Xnav />
  <main class="about-page">
    <h2 class="page-title">О магазине</h2>
    
    <div class="about-content">
      <div class="text">
        <p>Наша история началась несколько лет назад с небольшой мастерской и желания создавать кружки, которые привнесли бы радость в повседневную жизнь.</p>
        <p>Мы черпаем вдохновение в природе и уделяем особое внимание деталям, разрабатывая каждое изделие с любовью.</p>
        <p>Со временем наша мастерская превратилась в полноценный магазин, где мы с гордостью представляем нашу коллекцию керамики.</p>
        <p>Приглашаем вас в наш магазин, чтобы увидеть, как мы создаем наши изделия, и найти кружку, которая станет частью вашего дома.</p>
      </div>
      <div class="image">
        <img src="@/views/assets/master.png" alt="Мастер работает с глиной">
      </div>
    </div>

    <div class="gallery">
      <img src="@/views/assets/kryjki.png" alt="Кружки">
      <img src="@/views/assets/polki.png" alt="Полки с керамикой">
      <img src="@/views/assets/izdelya.png" alt="Изделия в мастерской">
    </div>
  </main>
    <Xcontacts/>
    <Xfooter />
        
        

</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Georgia', serif;
  background-color: #fffaf4;
  color: #2e2e2e;
}



.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

nav a {
  text-decoration: none;
  color: #2e2e2e;
}

.page-title {
  text-align: center;
  font-size: 40px;
  margin: 40px 0 20px;
}

.about-content {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.about-content .text {
  flex: 1.5;
  font-size: 18px;
  line-height: 1.6;
}

.about-content .image {
  flex: 1;
}

.about-content .image img {
  width: 100%;
  border-radius: 8px;
}

.gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  padding: 0 20px;
  flex-wrap: wrap;
}

.gallery img {
  width: 220px;
  border-radius: 6px;
  object-fit: cover;
}
</style>
