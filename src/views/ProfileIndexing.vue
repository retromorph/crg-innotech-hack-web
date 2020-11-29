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
        <input class="w-100" type="text" placeholder="Введите ссылку на профиль вконтакте">
        <button>Проиндексировать профиль</button>
      </div>
    </div>
  </main>
</template>

<script>

  export default {
    name: 'ProfileIndexing',
    components: {},
  };
</script>

<style lang="scss">
  button {
    margin-top: 2rem !important;
  }
</style>
