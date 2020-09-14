<template>
	<view class="cart">
		<guests v-if="!userName"></guests>
		<view v-else-if="cartList.length === 0" class="no_cart"></view>
		<view class="cart_item" v-else v-for="(item, index) in cartList" @click="cartItemClick(index)">
			<view class="portrait">
				<image :src="item.portrait" mode=""></image>
			</view>
			<view class="message">
				<view class="user_name">{{item.userName}}</view>
				<view>{{item.messages[item.messages.length - 1].message}}</view>
				<view class="last_time">{{(currentTime - item.messages[item.messages.length - 1].time) | getLeaveDays()}}</view>
			</view>
			<view class="good_image">
				<image :src="item.goodImage" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	 import {  
	        mapState,  
	        mapMutations  
	    } from 'vuex';  
	
	import guests from '../../components/guests/guests'
	export default {
		
		components: {
			guests
		},
		data() {
			return {
				userName: '',
				cartList: []
				
			}
		},
		filters: {
			getLeaveDays(time) {
				let t = time/60000
				if(t>365*1440) {
					return parseInt(t/365/1440)+'年前'
				} else if(t>30*1440) {
					return parseInt(t/30/1440)+'个月前'
				} else if(t>1440){
					return parseInt(t/1440)+'天前'
				} else if(t>60) {
					return parseInt(t/24)+'小时前'
				} else if(t>1){
					return parseInt(t)+ '分钟前'
				} else {
					return '刚刚'
				}
			}
		},
		computed: {
			...mapState(['userInformation', 'currentTime'])  
		},
		onLoad() {
			this.userName = this.$store.state.userInformation.userName
			this.cartList = this.$store.state.userInformation.cart
			
		},
		methods: {
			cartItemClick(index) {
				uni.navigateTo({
					url: "/pages/chat/chat?index="+index
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.cart {
		.cart_item {
			
			width: 100%;
			height: 150rpx;
			border-bottom: 1px solid #eee;
			display: flex;
			.portrait {
				display: inline-block;
				width:108rpx ;
				image{
					width: 88rpx;
					height: 88rpx;
					margin: 10rpx;
				}
			}
			.message {
				display: inline-block;
				font-size: 30rpx;
				.user_name {
					font-size: 40rpx;
					font-weight: 600;
				}
				.last_time {
					font-size: 24rpx;
					color: #ccc;
				}
			}
			.good_image {
				display: inline-block;
				position: absolute;
				right: 0;
				top: 0;
				image {
					width: 120rpx;
					height: 120rpx;
					margin: 10rpx;
				}
			}
		}
	}
</style>

