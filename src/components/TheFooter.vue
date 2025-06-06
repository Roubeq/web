<template>
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h3 class="footer-title">Contact us</h3>
                <p class="footer-email">shop@cupofjoy.ru</p>
            </div>

            <div class="footer-social">
                <a href="#" class="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/social-icon.svg" alt="Instagram" class="social-icon">
                </a>
                <a href="#" class="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/vk.svg" alt="VK" class="social-icon">
                </a>
                <a href="#" class="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/tg.svg" alt="Telegram" class="social-icon">
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<style scoped>
    .site-footer {
        background-color: #f8f8f8;
        padding: 30px 0;
        border-top: 1px solid #e0e0e0;
        margin-top: 50px;
    }

    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-brand {
        display: flex;
        flex-direction: column;
    }

    .footer-title {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
    }

    .footer-email {
        font-size: 16px;
        color: #666;
        margin: 0;
    }

    .footer-social {
        display: flex;
        gap: 20px;
    }

    .social-link {
        display: inline-block;
        transition: transform 0.3s ease;
    }

        .social-link:hover {
            transform: translateY(-3px);
        }

    .social-icon {
        width: 32px;
        height: 32px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        .footer-container {
            flex-direction: column;
            gap: 20px;
            text-align: center;
        }

        .footer-social {
            margin-top: 15px;
        }
    }
</style>