<template>
	<view class="chat">
		<view v-for="item in chatList.messages" class="message">
			<view class="time">{{item.time | getTime()}}</view>
			<image  :class="{'me':(chatList.userName == item.name)}" :src="(chatList.userName == item.name)? chatList.portrait : portrait" class="portrait" mode=""></image>
			<view  class="text" :class="{'me':(chatList.userName == item.name)}">{{item.message}}</view>
		</view>
		<view class="input">
			<image src="../../static/icon/语音.png" mode="" @click="bottomClick"></image>
			<input placeholder="想对TA说点什么呢" type="text" value="" v-model="input"/>
			<view class="right">
				<image src="../../static/icon/表情.png" mode="" @click="bottomClick"></image>
				<image src="../../static/icon/加号.png" mode="" @click="bottomClick"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				portrait: '',
				chatList: [],
				input: ''
			}
		},
		filters: {
			getTime(time) {
				let t = new Date(time)
				return t.toLocaleTimeString()
			}
		},
		methods: {
			bottomClick() {
				uni.showToast({
					title: '功能暂未实现!',
					icon: "none"
				})
				
			}
		},
		onLoad(options) {
			this.id = options.index
			this.chatList = this.$store.state.userInformation.cart[this.id]
			this.portrait = this.$store.state.userInformation.portrait
		}
	}
</script>

<style lang="scss">
	.chat {
		height: calc(100vh - 208rpx);
		background-color: $uni-color-background;
		.message {
			margin-bottom: 20rpx;
			.time {
				text-align: center;
				font-size: 24rpx;
				margin:0 auto;
				background-color: #ccc;
				width: 300rpx;
				border-radius: 1em;
			}
			.text {
				margin: 10rpx;
				display: inline-block;
				padding: 10rpx;
				border-radius: 1em;
				background-color: #fff;
			}
			.portrait {
				margin: 10rpx;
				height: 88rpx;
				width: 88rpx;
			}
		}
		.input {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 120rpx;
			image {
				margin: 20rpx 10rpx;
				width: 80rpx;
				height: 80rpx;
			}
			input {
				position: absolute;
				top: 20rpx;
				line-height: 80rpx;
				height: 80rpx;
				width: 420rpx;
				display: inline-block;
			}
			.right {
				float: right;
			}
		}
		.me {
			float: right;
		}
	}
</style>
