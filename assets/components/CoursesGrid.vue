<template>
   <div class="w-full grid grid-cols-1 gap-5 mt-12 lg:grid-cols-4">
       <div class="rounded overflow-hidden shadow-lg pb-2 flex flex-col" v-for="course in courses" :key="course.id">
           <img class="w-full" :src="course.backgroundImage.default" alt="Sunset in the mountains">
           <div class="px-6 py-4">
               <div class="font-bold text-xl mb-2 text-center">{{ course.name }}</div>
               <p class="text-gray-700 text-base text-center">
                   {{ course.description }}
               </p>
           </div>
           <div class="px-6 py-4 flex justify-center mt-auto">
               <router-link class="bg-accentColor px-4 py-2 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:opacity-75" :to="{ name: 'Course',  params: { id: course.id } }" >Записаться</router-link>
           </div>
       </div>
   </div>

</template>

<script>
  export default {
    name: "CoursesGrid",
    data() {
      return {
        courses: []
      }
    },
    mounted() {
      return this.courses = this.$store.getters.getCourses;
    }
  }
</script>

<style scoped>
</style>
