<template>
	<view class="guests">
		<text>您当前为游客身份，请先登录</text>
		<button type="default" @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '../../pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	.guests {
		padding: 60rpx;
	}
</style>
