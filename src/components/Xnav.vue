<template>
    <header class="app-header">
        <div class="header-container">
            <h1 class="logo">
                <router-link class="link" to="/">Чашка Радости</router-link>
            </h1>
            <nav class="navigation">
                <router-link to="/catalog" class="nav-link">Каталог</router-link>
                <router-link to="/info" class="nav-link">О магазине</router-link>
            </nav>

        </div>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style scoped>
    .app-header {
        background-color: #ffffff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 15px 20px;
    }

    .logo {
        font-size: 24px;
        font-weight: bold;
        color: #2c3e50;
    }

    .navigation {
        display: flex;
        gap: 30px;
    }

    .nav-link {
        text-decoration: none;
        color: #2c3e50;
        font-weight: 500;
        transition: color 0.3s ease;
    }

        .nav-link:hover {
            color: #D3B170;
        }

        .nav-link.router-link-exact-active {
            color: #D3B170;
        }

    .user-actions {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .icon-button {
        background: none;
        border: none;
        cursor: pointer;
        position: relative;
        padding: 5px;
    }

    .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        color: white;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }
    .link {
        text-decoration: none;
        font-size: 24px;
        font-weight: bold;
        color: #2c3e50;
    }

    @media (max-width: 768px) {
        .navigation {
            gap: 15px;
        }

        .header-container {
            padding: 10px 15px;
        }
    }
</style>