<template>
    <transition name="component-fade">
        <div class="container"  v-if="rendered">
            <div class="w-full p-4">
                <div class="w-full flex justify-center">
                    <div class="px-6 py-4 inline-flex flex-col justify-center">
                        <h3 class="text-4xl">Курс "{{ courseData.name }}"</h3>
                        <div class="mx-auto px-4 py-2 bg-accentColor text-center  mt-4 py-2 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:opacity-75"
                             @click="toggleVisibleContent"
                             v-if="!showSubscribeForm">Записаться на курс</div>
                        <div class="mx-auto px-4 py-2 bg-accentColor text-center  mt-4 py-2 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:opacity-75"
                             @click="toggleVisibleContent"
                             v-else>Показать программу курса</div>
                    </div>
                </div>
                <transition name="component-fade" mode="out-in">
                    <div class="w-full flex mt-12" v-if="showCourseSyllabus">
                        <div class="border-r border-gray-400 pr-6">
                            <h3 class="text-mainColor-lighter">Программа курса</h3>
                            <div class="w-full" v-if="courseData.syllabus.length">
                                <div class="w-full mt-4"  v-for="item in courseData.syllabus" :key="item.lessionSection">
                                    <div class="w-full flex flex-col">
                                        <h3 class="font-bold" @click="expandLessonSection(item.lessonSection.name)">{{ item.lessonSection.name }} <img class="inline ml-1 transition duration-300 ease-in-out" :class="{'rotated': sectionExpanded == item.lessonSection.name}" :src="require('../assets/img/down-arrow.png')" @click="expandLessonSection(item.lessonSection.name)"/></h3>
                                        <div class="w-full" v-if="sectionExpanded === item.lessonSection.name && sectionExpanded !== null">
                                            <div class="w-full mt-1 border-b border-gray-300" v-for="lesson in item.lessonSection.lessons" :key="lesson.name">
                                                {{ lesson.lessonName }}
                                            </div>
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
                            <div class="mt-4" v-html="courseData.fullDescription"> </div>

                        </div>
                    </div>
                </transition>

                <transition name="component-fade" mode="out-in">
                    <div class="w-full flex mt-12" v-if="showSubscribeForm">
                        <ContactForm :courseName="courseData.name"/>
                    </div>
                </transition>
            </div>
        </div>

    </transition>

</template>

<script>
  import ContactForm from "./ContactForm.vue";

  export default {
    name: "Course",
    components: {
      ContactForm
    },
    data() {
      return {
        rendered: false,
        courseData: {},
        showCourseSyllabus: true,
        showSubscribeForm: false,
        sectionExpanded: null
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
      },
      expandLessonSection(sectionName) {
        if(sectionName == this.sectionExpanded) {
          this.sectionExpanded = null
        } else {
          this.sectionExpanded = sectionName;
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
          this.showCourseSyllabus = true;
          this.showSubscribeForm = false;
          this.courseData = this.$store.getters.getCourseData(newValue);
          this.$nextTick(() => {
            this.rendered = true;
          });
        },
        immediate: true,
      },
    }
  }
</script>

<style scoped>
    .rotated {
        transform: rotate(180deg);
    }
</style>
