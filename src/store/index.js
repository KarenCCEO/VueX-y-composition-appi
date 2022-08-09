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
  getters:{
    topPaisesPoblacion(state){
      return state.paises.sort((a,b)=>{
        return a.population < b.population ? 1 : -1
      })
    }

  },
  modules: {
  }
})
