<script setup>
    import TheWelcome from '../components/TheWelcome.vue'
    import TheContacts from '../components/TheContacts.vue'
    import TheHeader from '../components/TheHeader.vue'
    import TheFooter from '../components/TheFooter.vue'
</script>

<template>
    <main>
        <meta charset="UTF-8">
        <TheHeader/>
        <TheWelcome />
        <TheContacts />
        <TheFooter/>
    </main>
</template>
