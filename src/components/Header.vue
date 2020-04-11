<template>
    <header class="bg-white p-6">
        <nav class="w-full flex">
            <div class="flex justify-between items-center">
                <router-link class="text-gray-500 hover:text-accentColor" to="/">
                    <img src="../assets/img/logo.png">
                </router-link>
                <router-link class="ml-8 text-gray-500 hover:text-accentColor" to="/courses">Курсы</router-link>
                <router-link class="ml-6 text-gray-500 hover:text-accentColor"  to="/about">О проекте</router-link>
                <router-link class="ml-6 text-gray-500 hover:text-accentColor"  to="/teaching">Есть чему научить?</router-link>
                <router-link class="ml-6 text-gray-500 hover:text-accentColor" to="/contacts">Контакты</router-link>
            </div>
        </nav>
    </header>
</template>

<script>
  export default {
    name: "Header.vue"
  }
</script>

<style scoped>

</style>
