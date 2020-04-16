import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses: [
      {
        id: 1,
        name: 'Социальные сети',
        description: 'Начальных знаний не требуется. Научим как правильно и эффективно работать в соц. сетях.',
        backgroundImage: require('../assets/img/social-networks.png'),
        syllabus: []
      },
      {
        id: 2,
        name: 'Смартфоны',
        description: 'Начальных знаний не требуется. Как эффективно использовать смартфон в повседневной деятельности.',
        backgroundImage: require('../assets/img/smartphones.png'),
        syllabus: []
      },
      {
        id: 3,
        name: 'Web-разработка',
        description: 'Начальных знаний не требуется. Вперед, научим вас делать классные web-страницы!',
        backgroundImage: require('../assets/img/webdev.png'),
        syllabus: [
          {
            lessonSection: {
              name: 'Секция 1',
              lessons: [
                {
                  lessonName: 'Урок 1 Секции 1 Урок 1 Секции 1 Урок 1 Секции 1',
                },
                {
                  lessonName: 'Урок 2 Секции 1',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Секция 2',
              lessons: [
                {
                  lessonName: 'Урок 1 Секции 2',
                },
                {
                  lessonName: 'Урок 2 Секции 2',
                },
              ]
            },
          },
        ]
      },
      {
        id: 4,
        name: 'T-SQL',
        description: 'Начальных знаний не требуется. Достаточно иметь желание научиться работать с базами данных SQL.',
        backgroundImage: require('../assets/img/t-sql.png'),
        syllabus: [
          {
            lessonSection: {
              name: 'Секция 1',
              lessons: [
                {
                  lessonName: 'Урок 1 Секции 1 Урок 1 Секции 1 Урок 1 Секции 1',
                },
                {
                  lessonName: 'Урок 2 Секции 1',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Секция 2',
              lessons: [
                {
                  lessonName: 'Урок 1 Секции 2',
                },
                {
                  lessonName: 'Урок 2 Секции 2',
                },
              ]
            },
          },
        ]
      },
    ]
  },
  getters: {
    getCourses: state => {
      return state.courses;
    },
    getCourseData: (state) => (id)  => {
      return state.courses.find(course => course.id === id);
    }
  }
  ,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
