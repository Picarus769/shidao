<template>
	<view>
		<view class="goods">
			<view v-for="item in goods" :key="item.id" class="goodsItem" @click="itemClick(item.id)">
				<image :src="item.images" mode=""></image>
				<view class="message">{{item.message}}</view>
				<view class="price">{{"￥" + item.price}}</view>
				<view class="master">
					<image :src="item.portrait" mode="aspectFit" class="portrait"></image>
					<view>{{item.master}}</view>
					<text>{{item.school}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goods'],
		methods: {
			itemClick(id) {
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + id
					
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goodsItem {
			height: 500rpx;
			width: 330rpx;
			margin:  10rpx 0;
			padding: 10rpx;
			background-color: #fff;
			border-radius: 0.2em;
			.message {
				font-size: 30rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.price {
				margin: 8rpx 0;
				font-size: 30rpx;
				color: red;
			}
			.master {
				font-size: 20rpx;
				color: #ccc;
				.portrait {
					float: left;
					height: 55rpx;
					width: 55rpx;
					margin: 6rpx 20rpx 0 10rpx;
					
				}
			}
			image {
				height: 330rpx;
				width: 330rpx;
			}
		}
	}
</style>
