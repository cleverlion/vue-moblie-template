<template>
    <div>
        123
    </div>
</template>

<script>
/* 引入map方法 */
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      num: 0
    }
  },
  computed: {
    /* 通过getters获取state数据 */
    ...mapGetters([
      'carrierInfo'
    ])
  },
  created () {
    this.$nextTick(() => {
      this.increase()
    })
  },
  methods: {
    increase () {
      const item = {
        carrierId: '1',
        carrierName: '2'
      }
      this.$store.commit('SWITCH_CARRIER_INFO', item)
      console.log(this.carrierInfo.carrierId)
    }
  }
}
</script>

<style>

</style>
