<template>
   <div class="w-full grid grid-cols-4 gap-5 mt-12">
       <div class="rounded overflow-hidden shadow-lg" v-for="course in courses" :key="course.id">
           <img class="w-full" :src="course.backgroundImage" alt="Sunset in the mountains">
           <div class="px-6 py-4">
               <div class="font-bold text-xl mb-2 text-center">{{ course.name }}</div>
               <p class="text-gray-700 text-base text-center">
                   {{ course.description }}
               </p>
           </div>
       </div>
   </div>

</template>

<script>
  export default {
    name: "CoursesGrid",
    data() {
      return {
        courses: [
          {
            id: 1,
            name: 'Работы с базами данных, T-SQL.',
            description: 'Начальных знаний не требуется. Достаточно иметь желание научиться работать с SQL.',
            backgroundImage: require('../assets/img/t-sql.png')
          },
          {
            id: 1,
            name: 'Работы с базами данных, T-SQL.',
            description: 'Начальных знаний не требуется. Достаточно иметь желание научиться работать с SQL.',
            backgroundImage: require('../assets/img/t-sql.png')
          },
          {
            id: 1,
            name: 'Работы с базами данных, T-SQL.',
            description: 'Начальных знаний не требуется. Достаточно иметь желание научиться работать с SQL.',
            backgroundImage: require('../assets/img/t-sql.png')
          },
          {
            id: 1,
            name: 'Работы с базами данных, T-SQL.',
            description: 'Начальных знаний не требуется. Достаточно иметь желание научиться работать с SQL.',
            backgroundImage: require('../assets/img/t-sql.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
