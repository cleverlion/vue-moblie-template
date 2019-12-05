<template>
  <div id="app">
    <div id="wrapper">
      <div id="main-container">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
  import AppMain from './AppMain';
  export default {
    name: 'Layout',
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background:#f1f1f1')
    },
    data() {
      return {

      }
    },
    components: {
      AppMain
    },
    methods: {
        
    }
  }
</script>

<style scoped="scoped" lang="less">
</style>
