<template>
	<view>
		<!-- <view v-if="userInformation"> -->
		<view v-if="false">
			<guests></guests>
		</view>
		<view v-else class="my_info">
			<view class="main">
				<view class="info_item">
					<view class="left portrait_text">头像</view>
					<image class="right portrait" :src="portrait || defaultPortrait">
				</view>
				<view class="info_item" v-for="(item, index) in userInfo" @click="itemClick(index)">
					<view class="left">
						{{item.key}}
					</view>
					<view class="right">
						{{item.value}}
					</view>
				</view>
			</view>
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
				defaultPortrait: '../../static/icon/用户.png',
				portrait: '',
				userInfo: [
					{ 
						key: '昵称',
						value: ''
					},
					{
						key: '学校',
						value: ''
					}
				]
			}
		},
		computed: {
			...mapState(['userInformation'])  
		},
		onLoad() {
			console.log(this.userInfomation)
			this.userInfo[0].value = this.userInformation.userName
			this.userInfo[1].value = this.userInformation.school
			this.portrait = this.userInfo.portrait
		},
		methods: {
			itemClick(index) {
				uni.navigateTo({
					url: '/pages/profile/edit?index=' + index,
				})
			}
		}
	}
</script>

<style lang="scss">
	.my_info {
		height: calc(100vh - 88rpx);
		background-color: #eee;
		padding: 20rpx;
		.main {
			background-color: #fff;
			border-radius: 0.5em;
		}
		.info_item {
			margin: 20rpx;
			overflow: auto;
			view {
				display: inline-block;
				padding: 10rpx;
			}
			.left {
				
			}
			.right {
				float: right;
			}
		}
		.portrait_text{
			line-height: 100rpx;
		}
		.portrait{
			margin: 10rpx;
			background-color: #eee;
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
