<template>
   <div class="w-full grid grid-cols-4 gap-5 mt-12">
       <div class="rounded overflow-hidden shadow-lg pb-2 flex flex-col" v-for="course in courses" :key="course.id">
           <img class="w-full" :src="course.backgroundImage" alt="Sunset in the mountains">
           <div class="px-6 py-4">
               <div class="font-bold text-xl mb-2 text-center">{{ course.name }}</div>
               <p class="text-gray-700 text-base text-center">
                   {{ course.description }}
               </p>
           </div>
           <div class="px-6 py-4 flex justify-center mt-auto">
               <div class="bg-accentColor px-4 py-2 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:opacity-75">Записаться</div>
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
            name: 'Социальные сети',
            description: 'Начальных знаний не требуется. Научим как правильно и эффективно работать в соц. сетях.',
            backgroundImage: require('../assets/img/social-networks.png')
          },
          {
            id: 2,
            name: 'Смартфоны',
            description: 'Начальных знаний не требуется. Как эффективно использовать смартфон в повседневной деятельности.',
            backgroundImage: require('../assets/img/smartphones.png')
          },
          {
            id: 3,
            name: 'Web-разработка',
            description: 'Начальных знаний не требуется. Вперед, научим вас делать классные web-страницы!',
            backgroundImage: require('../assets/img/webdev.png')
          },
          {
            id: 4,
            name: 'T-SQL.',
            description: 'Начальных знаний не требуется. Достаточно иметь желание научиться работать с базами данных SQL.',
            backgroundImage: require('../assets/img/t-sql.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>
</style>
