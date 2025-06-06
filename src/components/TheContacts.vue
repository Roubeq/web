<template>
    <div class="contacts">
        <h2>Contacts</h2>
        <p class="intro-text">If you have any questions, you can ask us by filling out the form.</p>
        <div class="components-contacts">
            <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="form.name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="form.email" required>
                </div>

                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" v-model="form.subject">
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" v-model="form.message" required></textarea>
                </div>

                <button type="submit" class="submit-btn">Send</button>
            </form>

            <div class="contact-info">
                <div class="map-container">
                    <img src="https://static-maps.yandex.ru/1.x/?ll=37.583859,55.751574&z=15&l=map&pt=37.583859,55.751574,pm2dol1"
                         style="width: 100%; height: auto;">
                </div>
                <p class="address">
                    <img src="@/assets/location-icon.svg" alt="Address" class="contact-icon">
                    Lenina st., 15, building 2<br />office 5, Moscow, Russia
                </p>
                <p class="phone">
                    <img src="@/assets/phone-icon.svg" alt="Phone" class="contact-icon">
                    +7 (495) 123-45-67 <br />(10:00-19:00, Mon-Fri)
                </p>

                <p class="email">
                    <img src="@/assets/email-icon.svg" alt="Email" class="contact-icon">
                    shop@cupofjoy.ru
                </p>
                <p class="social">
                    <img src="@/assets/social-icon.svg" alt="Social media" class="contact-icon">
                    @cup_of_joy_mugs
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Здесь можно добавить логику отправки формы
      console.log('Форма отправлена:', this.form);
      // Можно добавить сброс формы после отправки
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      // И показать сообщение об успешной отправке
      alert('Ваше сообщение отправлено!');
    }
  }
}
</script>

<style scoped>
    .contacts {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    h2 {
        color: #333;
        margin-bottom: 20px;
    }

    .intro-text {
        margin-bottom: 30px;
        color: #555;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
        padding: 25px; /* Добавляем отступы внутри формы */
        border: 1px solid #e0e0e0; /* Тонкая серая граница */
        border-radius: 8px; /* Закругленные углы */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Легкая тень для объема */
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    label {
        font-weight: bold;
        color: #444;
    }

    input, textarea {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }

    textarea {
        min-height: 80px;
        resize: none;
    }

    .submit-btn {
        background-color: #D3B170;
        color: white;
        width:100%;
        height:100%;
        border: none;
        padding:8px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        align-self: flex-start;
    }

        .submit-btn:hover {
            background-color: #CDA85D;
        }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

        .contact-info p {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 0;
            font-size: 15px;
            line-height: 1.5;
        }

    .contact-icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
        opacity: 0.8;
    }
    .components-contacts {
        display:flex;
        gap: 16px
    }
    .map-container {
        
        border-radius: 12px; /* Закругленные углы */
        overflow: hidden; /* Обрезаем углы у изображения */
        transition: all 0.3s ease; /* Плавные анимации */
        border: 1px solid #e0e0e0; /* Тонкая рамка */
        max-width: 800px; /* Максимальная ширина */
        width: 90%; /* Занимает всю доступную ширину */
        height:32%
    }

    .map-image {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s ease;
    }

    /* Эффекты при наведении */
    .map-container:hover {
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }

    /* Адаптивность для мобильных */
    @media (max-width: 768px) {
        .map-container {
            border-radius: 8px;
            margin: 15px 0;
        }
    }

    /* Для очень маленьких экранов */
    @media (max-width: 480px) {
        .map-container {
            border-radius: 6px;
        }
    }
</style>