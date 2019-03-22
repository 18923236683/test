import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var defaultCity = '广州';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity: function changeCity(ctx, city) {
      ctx.commit('changeCity', city);
    }
  },
  mutations: {
    changeCity: function changeCity(state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {}
    }
  }
});

//# sourceMappingURL=index-compiled.js.map