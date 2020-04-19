<template>
    <header class="bg-white p-6">
        <div class="container">
            <nav class="w-full hidden lg:flex">
                <div class="flex justify-between items-center">
                    <router-link to="/">
                        <img src="../assets/img/logo.png">
                    </router-link>
                    <div class="ml-8">
                        <span class="course-toggle text-mainColor-lighter hover:text-accentColor cursor-pointer" @click="showCoursesMenu(false)" v-on-clickaway="hideCoursesMenu">Выберите курс</span>
                        <div class="whitespace-no-wrap flex flex-col absolute bg-white border border-gray-300 w-auto mt-2" v-if="coursesMenuVisible">
                            <div class="dropdown-arrow border-t border-gray-300 border-l"></div>
                            <router-link v-for="course in courses" :key="course.id" :to="{ name: 'Course',  params: { id: course.id } }" class="py-2 px-4 mt-2 transition duration-300 ease-in-out hover:bg-gray-300">{{ course.name }}</router-link>
                        </div>
                    </div>
                    <router-link class="ml-6 text-mainColor-lighter hover:text-accentColor"  to="/about">О проекте</router-link>
                    <router-link class="ml-6 text-mainColor-lighter hover:text-accentColor"  to="/teaching">Есть чему научить?</router-link>
                    <router-link class="ml-6 text-mainColor-lighter hover:text-accentColor" to="/contacts">Контакты</router-link>
                </div>
            </nav>

            <nav class="w-full flex justify-between items-center flex-wrap lg:hidden">
                <div class="flex justify-between items-center">
                    <router-link to="/">
                        <img src="../assets/img/logo.png">
                    </router-link>
                </div>
                <img class="p-4" :src="require('../assets/img/menu.png')" @click="showMobileMenu = !showMobileMenu"/>
                <div class="w-full flex flex-col mt-4" v-if="showMobileMenu">
                    <span class="course-toggle w-full p-4 text-center uppercase text-xl text-mainColor-lighter hover:text-accentColor cursor-pointer lg:normal-case" @click="toggleMobileCoursesMenu">Выберите курс</span>
                    <div class="whitespace-no-wrap flex flex-col bg-white border border-gray-300 w-auto mt-2" v-if="coursesMenuVisible">
                        <router-link v-for="course in courses" :key="course.id" :to="{ name: 'Course',  params: { id: course.id } }" class="py-2 px-4 mt-2 transition duration-300 uppercase text-center ease-in-out hover:bg-gray-300"><span @click="showMobileMenu = false, coursesMenuVisible = false">{{ course.name }}</span></router-link>
                    </div>
                    <router-link class="w-full p-4 text-center uppercase text-xl  text-mainColor-lighter hover:text-accentColor"  to="/about"><span @click="showMobileMenu = false, coursesMenuVisible = false">О проекте</span></router-link>
                    <router-link class="w-full p-4 text-center uppercase text-xl  text-mainColor-lighter hover:text-accentColor"  to="/teaching"><span @click="showMobileMenu = false, coursesMenuVisible = false">Есть чему научить?</span></router-link>
                    <router-link class="w-full p-4 text-center uppercase text-xl  text-mainColor-lighter hover:text-accentColor" to="/contacts"><span @click="showMobileMenu = false, coursesMenuVisible = false">Контакты</span></router-link>
                </div>
            </nav>
        </div>

    </header>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway';
  export default {
    mixins: [ clickaway ],
    name: "Header.vue",
    data() {
      return {
        coursesMenuVisible: false,
        courses: [],
        showMobileMenu: false,
        isMobile: false,
      }
    },
    methods: {
      showCoursesMenu() {
        if(!this.coursesMenuVisible) this.coursesMenuVisible = true;
      },
      hideCoursesMenu() {
        if(this.coursesMenuVisible && !this.isMobile) this.coursesMenuVisible = false;
      },
      toggleMobileCoursesMenu() {
        this.isMobile = true;
        this.coursesMenuVisible = !this.coursesMenuVisible;
      },
    },
    mounted() {
      this.courses = this.$store.getters.getCourses;
    }
  }
</script>

<style scoped>
    .dropdown-arrow {
        height: 7px;
        width: 7px;
        transform: rotate(45deg);
        position: absolute;
        top: -1.8%;
        left: 5%;
        background-color: #fff;
    }

    .course-toggle:after {
        content: "";
        display: inline-block;
        width: .32em;
        height: .32em;
        border-bottom: 1px solid;
        border-left: 1px solid;
        margin-left: .4em;
        margin-bottom: .22em;
        transform: rotate(-45deg);
    }
</style>
