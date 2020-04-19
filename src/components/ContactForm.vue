<template>
    <main>
        <form class="w-full max-w-lg mx-auto mb-8">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Имя
                    </label>
                    <input class="appearance-none block w-full text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Иван" v-model="customerName" :class="{'border border-red-500': errors.includes('name')}">
                    <p class="text-red-500 text-xs italic" v-if="errors.includes('name')">Пожалуйста, заполните это поле</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone-number">
                        Телефон
                    </label>
                    <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone-number" type="tel" placeholder="+7(495)111-11-11" v-model="customerPhoneNumber" :class="{'border border-red-500': errors.includes('phone')}">
                    <p class="text-red-500 text-xs italic" v-if="errors.includes('phone')">Пожалуйста, заполните это поле</p>
                    <p class="text-red-500 text-xs italic" v-if="errors.includes('invalidPhoneNumber')">Пожалуйста, введите корретный номер телефона</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                        E-mail
                    </label>
                    <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@mail.com" v-model="customerEmail" :class="{'border border-red-500': errors.includes('email')}">
                    <p class="text-red-500 text-xs italic" v-if="errors.includes('email')">Пожалуйста, заполните это поле</p>
                    <p class="text-red-500 text-xs italic" v-if="errors.includes('invalidEmail')">Пожалуйста, укажите корректный e-mail</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                        Сообщение
                    </label>
                    <textarea class=" no-resize appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" v-model="customerMessage" :class="{'border border-red-500': errors.includes('message')}"></textarea>
                    <p class="text-red-500 text-xs italic" v-if="errors.includes('message')">Пожалуйста, заполните это поле</p>
                </div>
            </div>
            <div class="flex items-center justify-center color-accentColor" v-if="loading">
                <div class="sk-circle">
                    <div class="sk-circle1 sk-child"></div>
                    <div class="sk-circle2 sk-child"></div>
                    <div class="sk-circle3 sk-child"></div>
                    <div class="sk-circle4 sk-child"></div>
                    <div class="sk-circle5 sk-child"></div>
                    <div class="sk-circle6 sk-child"></div>
                    <div class="sk-circle7 sk-child"></div>
                    <div class="sk-circle8 sk-child"></div>
                    <div class="sk-circle9 sk-child"></div>
                    <div class="sk-circle10 sk-child"></div>
                    <div class="sk-circle11 sk-child"></div>
                    <div class="sk-circle12 sk-child"></div>
                </div>
            </div>
            <div class="flex items-center" v-else>
                <div class="md:w-1/3">
                    <button class="shadow bg-accentColor transition duration-300 ease-in-out hover:opacity-75 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button" @click="sendMail">
                        Отправить
                    </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>
        <div class="w-full p-4" v-if="responseMessage.length">
            {{ responseMessage }}
        </div>
    </main>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "ContactForm",
    props: ['courseName', 'type'],
    data() {
      return {
        customerName: "",
        customerPhoneNumber: "",
        customerEmail: "",
        customerMessage: "",
        errors: [],
        loading: false,
        responseMessage: ""
      }
    },
    methods: {
      validateForm() {
        this.errors = [];
        if(!this.customerName.length) {
            this.errors.push('name');
        }
        if(!this.customerPhoneNumber.length) {
          this.errors.push('phone');
        }
        if(!this.customerEmail.length) {
          this.errors.push('email');
        } else {
          let regExpMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!regExpMail.test(this.customerEmail)) {
            this.errors.push('invalidEmail');
          }
        }
        if(!this.customerMessage.length) {
          this.errors.push('message');
        }


      },
      sendMail() {
        this.validateForm();
        if(!this.errors.length) {
          this.loading = true;
          return axios.post('/api/mail/', {
            customerName: this.customerName,
            phoneNumber: this.customerPhoneNumber,
            email: this.customerEmail,
            messageType: this.type,
            message: this.customerMessage
          })
            .then( (response) => {
              this.responseMessage = response.data.message;
              this.loading = false;
            })
            .catch( (error) => {
              console.log(error);
              this.responseMessage = error;
              this.loading = false;
            })
        }
      }

    },
    mounted() {
      if(this.type === "courseSubscribe") {
        this.customerMessage = `Добрый день! Мне интересно пройти обучению по курсу "${this.courseName}".`
      }
      else if(this.type === "teaching") {
        this.customerMessage = 'Добрый день! Я бы хотел стать преподавателем. Пожалуйста, свяжитесь со мной для обсуждения.'
      }
      else if(this.type === "contactsPage") {
        this.customerMessage = 'Добрый день! У меня есть вопрос: ';
      }
    }
  }
</script>

<style scoped>

</style>
