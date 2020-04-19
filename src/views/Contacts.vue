<template>
    <div class="container">
        <div class="w-full p-4 flex justify-center flex-wrap">
            <p class="mt-4 mb-8">
                Если у вас есть какие-либо вопросы о проекте или о проходящих курсах - пожалуйста, заполните форму ниже.
            </p>
            <ContactForm :type="'contactsPage'" />
        </div>
    </div>
</template>


<script>
  import ContactForm from "../components/ContactForm.vue";
  export default {
    name: "Contacts",
    components: {
      ContactForm
    }
  }
</script>

<style scoped>

</style>
