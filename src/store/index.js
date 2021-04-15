import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    text: "",
  },
  mutations: {
    store(state, payload) {
      state.text = payload;
    }
  },
  actions: {
    async storeData({text}) {
      let data = await axios.get(
        "http://127.0.0.1:8000/api/tweet", {
        name: this.text
      },
      )
      text.commit("store", data.data.data);
      router.replace("/")
    }
  },
});