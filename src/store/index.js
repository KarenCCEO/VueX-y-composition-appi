import { createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],
    paisesFiltrados :[]
  },
  getters: {
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload){
      state.paises=payload
    }
  },
  actions: {
    async getPaises({commit}){
      try{
        const res = await fetch ('api.json')
        const data = await res.json()
        commit('setPaises',data)
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
