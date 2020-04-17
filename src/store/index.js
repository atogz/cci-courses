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
        fullDescription: '<p>В этом курсе изложены основы языка SQL для реляционных баз данных.</p>' +
                         '<p>Язык SQL кажется простым - и это действительно так. Однако в каждом деле есть свои тонкости. ' +
                         'И эти тонкости изложены в этом курсе - это работа со значениями NULL, дубликаты строк и потеря строк при соединении таблиц и многие другие.</p>' +
                          '<br/><p>Зачем нужен SQL ?  Этот навык нужен во многих профессиях - программистам, тестировщикам, администраторам баз данных, аналитикам, data scientist\'ам и многим другим.  Объём данных в мире растёт экспоненциальными темпами. И многие из этих данных по-прежнему реляционные - состоят из таблиц, строк и колонок. Поэтому язык SQL не только не теряет своей актуальности, но со временем становится всё более и более востребованным!</p>',
        backgroundImage: require('../assets/img/t-sql.png'),
        syllabus: [
          {
            lessonSection: {
              name: 'Введение. Обзор языка SQL',
              lessons: [
                {
                  lessonName: 'Обзор языка SQL',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Установка и настройка таблиц для упражнений',
              lessons: [
                {
                  lessonName: 'Шаги установки',
                },
                {
                  lessonName: 'Установа для Windows',
                },
                {
                  lessonName: 'Обзор pgAdmin',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Создание таблиц. Связи между таблицами',
              lessons: [
                {
                  lessonName: 'Создание таблиц. Типы данных',
                },
                {
                  lessonName: 'Первичный ключ и внешний ключ. Типы связей между таблицами',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Основные запросы SELECT',
              lessons: [
                {
                  lessonName: 'Выбор колонок. Выражения',
                },
                {
                  lessonName: 'Выбор строк. Операторы AND, OR',
                },
                {
                  lessonName: 'Оператора IN, NOT IN, BETWEEN',
                },
                {
                  lessonName: 'Вложенные запросы (подзапросы)',
                },
                {
                  lessonName: 'Как пишутся комментарии в SQL',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Работа со значениями NULL',
              lessons: [
                {
                  lessonName: 'Что такое значение NULL. Особенности работы со значениями NULL',
                },
                {
                  lessonName: 'NULL и Сравнение "не равно"',
                },
                {
                  lessonName: 'IN и NOT IN при наличии значений NULL',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Агрегация - GROUP BY, HAVING, DISTINCT',
              lessons: [
                {
                  lessonName: 'Группировка данных GROUP BY',
                },
                {
                  lessonName: 'Фильтрация HAVING',
                },
                {
                  lessonName: 'Агрегация SUM и COUNT',
                },
                {
                  lessonName: 'Другие функции агрегации',
                },
                {
                  lessonName: 'Различные значения DISTINCT',
                },
                {
                  lessonName: 'Сортировка данных ORDER BY',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Соединение таблиц - INNER, OUTER, CROSS, SELF JOIN',
              lessons: [
                {
                  lessonName: 'INNER JOIN - Внутреннее Соединение Таблиц',
                },
                {
                  lessonName: 'Соединение Нескольких Таблиц',
                },
                {
                  lessonName: 'Дубликаты Строк, Нехватка Строк',
                },
                {
                  lessonName: 'LEFT OUTER JOIN - Левое Внешнее Соединение',
                },
                {
                  lessonName: 'Различные варианты синтаксиса',
                },
                {
                  lessonName: 'RIGHT OUTER JOIN- Правое Внешнее Соединение',
                },
                {
                  lessonName: 'FULL OUTER JOIN - Полное внешнее соединение',
                },
                {
                  lessonName: 'SELF JOIN - Соединение таблицы самой с собой',
                },
                {
                  lessonName: 'CROSS JOIN - Декартово Произведение Таблиц',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Операторы множеств - UNION, EXCEPT (MINUS) и INTERSECT',
              lessons: [
                {
                  lessonName: 'UNION - Объединение множеств строк',
                },
                {
                  lessonName: 'EXCEPT (MINUS) - Вычитание множеств строк',
                },
                {
                  lessonName: 'INTERSECT - Пересечение множеств строк',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Функции и операторы',
              lessons: [
                {
                  lessonName: 'Обзор функций и операторов',
                },
                {
                  lessonName: 'Для числовых типов данных',
                },
                {
                  lessonName: 'LIKE для поиска шаблонов',
                },
                {
                  lessonName: 'Для символьных типов данных',
                },
                {
                  lessonName: 'Для типов данных даты и времени',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Изменение данных - INSERT, UPDATE, DELETE',
              lessons: [
                {
                  lessonName: 'INSERT - Вставка данных',
                },
                {
                  lessonName: 'UPDATE - Обновление данных',
                },
                {
                  lessonName: 'DELETE - Удаление данных',
                },
                {
                  lessonName: 'Поиск расхождений между таблицами',
                },
                {
                  lessonName: 'Устранение расхождений между таблицами',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Дополнительные темы: CASE, рекурсия',
              lessons: [
                {
                  lessonName: 'CASE: два варианта синтаксиса',
                },
                {
                  lessonName: 'CASE: полезные примеры',
                },
                {
                  lessonName: 'Как можно переписать IN / NOT IN на OUTER JOIN + CASE',
                },
                {
                  lessonName: 'Рекурсивные Запросы',
                },
              ]
            },
          },
          {
            lessonSection: {
              name: 'Резюме курса',
              lessons: [
                {
                  lessonName: 'Резюме курса',
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
