import { createStore } from 'vuex'

export default createStore({
  state: {
    title:" ",
    des:" ",
    srcstr:" ",
    id:" "
  },
  getters: {
  },
  mutations: {
    setProduct(state, payload){
      state.title = payload.title;
      state.des = payload.des;
      state.srcstr = payload.srcstr;
      state.id = payload.id
    }
  },
  actions: {
  },
  modules: {
  }
})
