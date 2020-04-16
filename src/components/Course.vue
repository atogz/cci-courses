<template>
    <transition name="component-fade">
        <div class="w-full p-4" v-if="rendered">
            <div class="w-full flex justify-center">
                <div class="px-6 py-4 inline-flex flex-col justify-center">
                    <h3 class="text-4xl">Курс "{{ courseData.name }}"</h3>
                    <div class="mx-auto px-4 py-2 bg-accentColor text-center  mt-4 py-2 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:opacity-75"
                         @click="toggleVisibleContent"
                         v-if="!showSubscribeForm">Записаться</div>
                    <div class="mx-auto px-4 py-2 bg-accentColor text-center  mt-4 py-2 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:opacity-75"
                         @click="toggleVisibleContent"
                         v-else>Показать программу</div>
                </div>
            </div>
            <div class="w-full flex mt-12">
                <div class="border-r border-gray-400 pr-6">
                    <h3 class="text-mainColor-lighter">Программа курса</h3>
                    <div class="w-full" v-if="courseData.syllabus.length">
                        <div class="w-full mt-4"  v-for="item in courseData.syllabus" :key="item.lessionSection">
                            <div class="w-full flex flex-col">
                                <h3 class="text-lg mb-2 font-bold">{{ item.lessonSection.name }}</h3>
                                <div class="w-full" v-for="lesson in item.lessonSection.lessons" :key="lesson.name">
                                    {{ lesson.lessonName }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full mt-2" v-else>
                        <span>В разработке...</span>
                    </div>

                </div>
                <div class="w-2/3 pl-6">
                    <h3 class="text-mainColor-lighter">Описание курса</h3>
                </div>
            </div>

        </div>
    </transition>

</template>

<script>
  export default {
    name: "Course",
    data() {
      return {
        rendered: false,
        courseData: {},
        showCourseSyllabus: true,
        showSubscribeForm: false
      }
    },
    methods: {
      toggleVisibleContent() {
       if(!this.showSubscribeForm) {
         this.showCourseSyllabus = false;
         this.showSubscribeForm = true;
       } else {
         this.showSubscribeForm = false;
         this.showCourseSyllabus = true;
       }


      }
    },
    mounted() {
      this.courseData = this.$store.getters.getCourseData(Number(this.$route.params.id));
      this.rendered = true;
    },
    watch: {
      '$route.params.id': {
        handler(newValue) {
          this.rendered = false;
          console.log(this.rendered);
          this.courseData = this.$store.getters.getCourseData(newValue);
          this.$nextTick(() => {
            this.rendered = true;
          });
          console.log(this.rendered);
        },
        immediate: true,
      }
    }
  }
</script>

<style scoped>

</style>
