<template>
    <footer class="w-full flex p-6 pt-6 pb-6 border-t border-gray-400">
        <div class="w-1/4 flex flex-col">
            <h3 class="font-bold pb-4 text-xl">Информация</h3>
            <router-link to="/about" class="hover:underline">О проекте</router-link>
            <a href="mailto:info@courses.coral.club" class="hover:underline mt-1">info@courses.coral.club</a>
        </div>
        <div class="w-1/4"></div>
        <div class="w-1/4"></div>
        <div class="w-1/4"></div>
    </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
    footer {
        margin-top: auto;
    }
</style>
