import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
			userInformation: {},
			login: false,
			token: '',
			avatarUrl: '',
			userName: '',
			currentTime: 0,
    },
    mutations: {
			login(state, payload) {
				state.userInformation = payload
				state.currentTime = new Date()
				console.log(payload)
			},
			logout(state) {
					state.login = false;
					state.token = '';
					state.userName = '';
					state.avatarUrl = '';
			}
    }
})
export default store
