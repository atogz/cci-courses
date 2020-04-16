<template>
    <div class="w-full p-4">
        <div class="text-left mb-6">
            <span class="text-xl font-bold">Курс "{{ courseData.name }}"</span>
        </div>
        <div class="w-full flex">
            <div class="border-r border-gray-400 pr-6">
                <h3 class="text-mainColor-lighter">Программа курса</h3>
                <div class="w-full mt-4" v-for="item in courseData.syllabus" :key="item.lessionSection">
                    <div class="w-full flex flex-col">
                        <h3 class="text-lg mb-2 font-bold">{{ item.lessonSection.name }}</h3>
                        <div class="w-full" v-for="lesson in item.lessonSection.lessons" :key="lesson.name">
                            {{ lesson.lessonName }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-2/3 pl-6">
                <h3 class="text-mainColor-lighter">Описание курса</h3>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "Course",
    props: ['course'],
    data() {
      return {
        courseData: this.$route.params.course
      }
    },
    mounted() {
      console.log('passed ', this.$route.params);
    }
  }
</script>

<style scoped>

</style>
