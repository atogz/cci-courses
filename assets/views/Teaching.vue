<template>
    <div class="container">
        <div class="w-full p-4 flex justify-center flex-wrap">
            <p class="mt-4 mb-8">
                Если вы хотите помочь в развитии проекта и поделиться своими знаниями - пожалуйста, заполните форму ниже.
            </p>
            <ContactForm :type="'teaching'" />
        </div>
    </div>
</template>


<script>
  import ContactForm from "../components/ContactForm.vue";
  export default {
    name: "Teaching",
    components: {
      ContactForm
    }
  }
</script>

<style scoped>

</style>
