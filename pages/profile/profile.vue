<template>
	<view class="profile">
		<view class="header">
			<image :src="avatarUrl || '../../static/icon/用户.png'" mode=""></image>
			
			<view class="login">{{this.user.userName || '点击登录'}}</view>
		</view>
		<view class="record">
			<view class="title">我的交易</view>
			<view class="r">
				<view v-for="item in record" class="record-item">
					<image :src="item.icon" mode=""></image>
					<view>{{item.name}}</view>
				</view>
			</view>
		</view>
		<view class="account">
			<view class="title">我的账户</view>
			<view class="r">
				<view v-for="item in account" class="record-item">
					<image :src="item.icon" mode=""></image>
					<view>{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {  
		mapState,  
		mapMutations  
	} from 'vuex';
	
	export default {
		data() {
			return {
				user : {},
				avatarUrl: '',
				defaultAvatarUrl: '@/static/icon/用户.png',
				record: [
					{
						name: '我发布的',
						icon: '../../static/icon/发布.png'
					},
					{
						name: '我看过的',
						icon: '../../static/icon/历史.png'
					},
					{
						name: '我下架的',
						icon: '../../static/icon/下架.png'
					},
					{
						name: '我收藏的',
						icon: '../../static/icon/收藏.png'
					},
				],
				account: [
					{
							name: '个人信息',
							icon: '../../static/icon/资料.png'
					},
					{
							name: '修改密码',
							icon: '../../static/icon/安全.png'
					}
				]
			}
		},
		computed: {
			...mapState(['userInformation', 'login'])  
		},
		methods: {
			
		},
		onLoad() {
			
			this.user = this.$store.state.userInformation
			console.log(this.user)
			this.avatarUrl = this.user.portrait
		}
	}
</script>

<style lang="scss">
	.profile {
		height: calc(100vh - 188rpx);
		background-color: $uni-color-background;
		.header{
			height: 350rpx;
			background-color: $uni-color-primary;
			position: relative;
			image {
				position: absolute;
				top: 100rpx;
				left: 50%;
				margin-left: -50rpx;
				margin-top: -50rpx;
				height: 100rpx;
				width: 100rpx;
			}
			.login {
				position: absolute;
				top: 180rpx;
				padding: 0 20rpx;
				height: 45rpx;
				left: 50%;
				transform: translate(-50%, 0);
				font-size: 28rpx;
				text-align: center;
				line-height: 45rpx;
				border-radius: 1em;
				background-color: #fff;
			}
			.logged_in {
				background-color: none; 
				
			}
		}
		.record {
			position: relative;
			top: -50rpx;
			width: 90%;
			height: 180rpx;
			padding: 10rpx;
			margin: 0 auto;
			background-color: #ffffff;
			border-radius: 0.3em;
			
		}
		.account {
			width: 90%;
			height: 180rpx;
			padding: 10rpx;
			margin: 0 auto;
			background-color: #ffffff;
			border-radius: 0.3em;
			
		}
		.title {
			font-size: 32rpx;
			font-weight: 600;
		}
		.r {
			margin-top: 20rpx;
			text-align: center;
			display: flex;
			justify-content: space-around;		
			view {
				font-size: 24rpx;
			}
			image {
				margin-bottom: 10rpx;
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
</style>
