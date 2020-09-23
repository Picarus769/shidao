<template>
	<view class="edit">
		<input type="text" v-model="inputContent">
		<button class="btn" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputContent: '',
				index: ''
			}
		},
		methods: {
			submit() {
				console.log(this.index)
				if(this.index = '0') {
					console.log(this.$store.state.userInformation.userName)
					this.$store.state.userInformation.userName = this.inputContent
					console.log(this.$store.state.userInformation.userName)
					uni.navigateBack({
						
					})
				}
			}
		},
		onLoad(options) {
			this.index = options.index
			console.log(this.index)
		}
	}
</script>

<style lang="scss">
	.edit{
		height: calc(100vh - 88rpx);
		background-color: #eee;
		padding: 20rpx;
		input {
			height: 350rpx;
			border-radius: 0.5em;
			background-color: #fff;
			margin-bottom: 20rpx;
		}
	}
</style>
