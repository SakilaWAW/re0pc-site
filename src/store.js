import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cur_article: ''
  },
  mutations: {
    setArticle (state, payload) {
      state.cur_article = payload.article;
    }
  }
});
