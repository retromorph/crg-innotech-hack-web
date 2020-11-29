<template>
  <main>
    <div class="screen">
      <div class="top-bar">
        <div class="buttons"></div>
        CRG - Innotech project
      </div>
      <nav>
        <router-link to="/">Отчет.py</router-link>
        <router-link to="/indexing">Индексация.html</router-link>
        <router-link to="/about">О_нас.js</router-link>
      </nav>
      <div class="code">
        <ImageUpload v-on:upload_image="showGenerateReportButton()"/>
        <button style="margin-left: auto;margin-right: auto;" @click="generateReport()" class="hidden">Сгенерировать отчет</button>
      </div>
    </div>
  </main>
</template>

<script>
  // @ is an alias to /src
  import ImageUploadComponent from '../components/ImageUploadComponent.vue';

  export default {
    name: 'ReportGeneration',
    components: {
      'ImageUpload': ImageUploadComponent,
    },
    data() {
      return {
        hasImage: null,
      };
    },
    methods: {
      showGenerateReportButton() {
        document.querySelector('.hidden')
          .classList
          .remove('hidden');
        setTimeout(() => {
          window.scrollTo({
            bottom: 0,
            behavior: 'smooth'
          }, 1000);
        });
      },
      generateReport() {

      }
    }
  };
</script>

<style lang="scss">


</style>
