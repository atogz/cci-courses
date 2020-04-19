<template>
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
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                    E-mail
                </label>
                <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@mail.com" v-model="customerEmail" :class="{'border border-red-500': errors.includes('email')}">
                <p class="text-red-500 text-xs italic" v-if="errors.includes('email')">Пожалуйста, заполните это поле</p>
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
        <div class="md:flex md:items-center">
            <div class="md:w-1/3">
                <button class="shadow bg-accentColor transition duration-300 ease-in-out hover:opacity-75 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button" @click="validateForm">
                    Отправить
                </button>
            </div>
            <div class="md:w-2/3"></div>
        </div>
    </form>
</template>

<script>
  export default {
    name: "ContactForm",
    props: ['courseName', 'type'],
    data() {
      return {
        customerName: "",
        customerPhoneNumber: "",
        customerEmail: "",
        customerMessage: "",
        errors: []
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
        }
        if(!this.customerMessage.length) {
          this.errors.push('message');
        }
      },
      sendMail() {
        
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
