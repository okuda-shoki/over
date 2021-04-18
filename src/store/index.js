import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    name: "",
  },
  mutations: {
    store(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    async login({name}) {
      const storeData = await axios.get(
        "http://127.0.0.1:8000/api/tweet", {
        name: this.text
      },
      )
      name.commit("name", storeData.data.data);
      router.replace("/")
    }
  },
});