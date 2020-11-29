<template>
  <div class="hello">
    <div class="my-8">
      <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        :hasImage="hasImage"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage">
        <label for="fileInput" slot="upload-label">
          <button @click="clickButton()" style="margin-left: auto;margin-right: auto; margin-bottom: 2rem;">
            Загрузить
          </button>
          <span class="upload-caption">{{
            hasImage ? '' : 'Загрузите изображение человека для анализа'
          }}</span>
        </label>
      </image-uploader>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageUpload',
    data() {
      return {
        hasImage: false,
        image: null
      };
    },
    methods: {
      setImage: function (output) {
        this.hasImage = true;
        this.image = output;
        this.$emit('upload_image');
        console.log('Info', output.info);
        console.log('Exif', output.exif);
        document.querySelectorAll('button')[0].style.display = 'none'
        document.querySelectorAll('.upload-caption')[0].style.display = 'none'
      },
      clickButton() {
        document.querySelectorAll('.upload-caption')[0].click();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .img-preview {
    width: 240px;
  }

  #fileInput {
    display: none;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .my-8 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .upload-caption {
    font-size: 1.2rem;
  }
</style>
