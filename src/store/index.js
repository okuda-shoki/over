import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index"


Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    text:""
  },
  mutations: {
    text(state, payload) {
      state.text = payload;
    }
  },
  actions: {
    async text({text}) {
      let data = await axios.post("http://127.0.0.1:8000/api/tweetpost",
        {
          text: text
        }
      );
    }
  },
})
