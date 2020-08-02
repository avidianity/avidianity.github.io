import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import main from './main';

Vue.use(Vuex);

export default new Store({
	...main,
	modules: {},
});
