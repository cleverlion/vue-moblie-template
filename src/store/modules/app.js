
const app = {
  state: {
    carrierInfo: {
      carrierId: 1,
      carrierName: ''
    }
    // productInfo
  },
  mutations: {
    SWITCH_CARRIER_INFO: (state, info) => {
      state.carrierInfo = {}
      // 缓存选择的商家信息
      state.carrierInfo.carrierId = info.carrierId
      state.carrierInfo.carrierName = info.carrierName
    }
  },
  actions: {
    switchCarrierInfo: ({ commit }, info) => {
      commit('SWITCH_CARRIER_INFO', info)
    }
  }
}

export default app
