<template>
	<view>
		<view v-if="userInformation">
			<guests></guests>
		</view>
		<view v-else>
			111
		</view>
	</view>
	
</template>

<script>
	import {
		mapState,
		mapMutation
	} from 'vuex'
	import guests from '@/components/guests/guests.vue'
	export default {
		components: {
			guests
		},
		data() {
			return {
				userInfo: null
			}
		},
		computed: {
			...mapState(['userInformation'])  
		},
		onLoad() {
			this.userInfo = this.userInformation
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
