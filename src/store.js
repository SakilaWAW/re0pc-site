/**
 * 利用vuex技术来做文章的缓存，暂时之缓存上篇阅读的文章
 */

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cur_article: '',
    side_menu_expand: false,
    catalog: [],
  },
  mutations: {
    setArticle (state, payload) {
      state.cur_article = payload.article;
    },
    setSideMenuTo(state, payload) {
      state.side_menu_expand = payload.isExpand;
    },
    setCatalog(state, payload) {
      state.catalog = payload.catalog;
    }
  }
});
