import states from "./state/index.js";
import mutations from "./mutation/index.js";
import actions from "./action/index.js";

export default new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  modules: {}
});