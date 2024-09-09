import { createStore } from 'vuex'

export default createStore({
  state: {
    id:null,
  },
  getters: {
    getId:state=>state.id,
  },
  mutations: {
    Login(state,data){
      state.id=data;
      sessionStorage.setItem('id',data);
      state.isLogin=true;
    },
    DangXuat(state){
      sessionStorage.clear('id');
      state.id=null;
    }
  },
  actions: {
    DangNhap(context,data){
      context.commit("Login",data);
    },
    load(context) {
      if (sessionStorage.getItem('id')) {
        context.commit('Login', sessionStorage.getItem('id'));
      }
    },
    DangXuat(context){
      context.commit('DangXuat');
      localStorage.clear('token');
      context.dispatch('load');
    }
  },
  modules: {
  }
})
