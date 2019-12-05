<template>
  <div class="main-content">
    <div>
      <tab :line-width="3" :custom-bar-width="getBarWidth" active-color="#35495e" bar-active-color="#35495e">
        <tab-item v-for="item in titleList" :selected="item.id === activeId" :key="item.id">{{item.name}}</tab-item>
      </tab>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default {
  data() {
    return {
      activeId: '1',
      getBarWidth: function (index) {
        return '2rem'
      },
      titleList: [
        {
          id: "1",
          name: "全部"
        },
        {
          id: "2",
          name: "2号"
        },
        {
          id: "3",
          name: "3号"
        },
        {
          id: "4",
          name: "5号"
        }
      ]
    };
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {},
    changeSelected() {

    },
    getDataList() {}
  }
};
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 150px;
}
</style>