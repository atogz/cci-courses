<template>
        <div class="w-full p-6 flex flex-col">
            <div class="w-full flex justify-center mt-2 flex-wrap">
                <h2 class="text-2xl">
                    Обучающие курсы для команды <a class="font-bold hover:underline" target="_blank" href="https://coral.club">Coral Club</a>. Актуальные темы. Регулярные занятия.
                </h2>
                <h3 class="text-xl text-mainColor-lighter">
                    Работа в соцсетях, коммуникации, программирование, и многое другое...
                </h3>
            </div>

            <CoursesGrid/>
        </div>
</template>


<style>

</style>


<script>

import CoursesGrid from "../components/CoursesGrid.vue";

export default {
  name: 'Home',
  components: {
    CoursesGrid
  }
}
</script>
