<template>
  <div id="main-content">
    <section class="right-section">
        <router-view :key="key" ></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      tabs: []
    }
  },
  components: {
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped="scoped" lang="less">

//   #main-content {
//     min-height: 500px;
//     padding: 20px;
//   }
//   .right-section {
//     padding-top: 60px;
//   }
</style>
