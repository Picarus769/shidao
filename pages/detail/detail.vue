<template>
	<view>
		<view class="detail">
			<!-- 商品信息 -->
			<view class="price">{{'￥' + goodDetail.price}}</view>
			<view>{{goodDetail.message}}</view>
			<view class="main-image">
				<image v-for="item in goodDetail.img" :src="item" mode="widthFix"></image>
			</view>
			<view class="clickCount">{{'浏览：'+goodDetail.clickCount}}</view>
			
		</view>
		<view class="divide"></view>
		<!-- 卖家信息 -->
		<view class="information">
			<image :src="goodDetail.portrait" mode="" class="portrait"></image>
			<view class="name">{{goodDetail.master}}</view>
			<view class="school">{{goodDetail.school}}</view>
			<view class="time">{{leaveTime | getLeaveDays()}}前来过</view>
		</view>
		<view class="divide"></view>
		<!-- 留言 -->
		<view class="message">
			<text>全部留言：{{messageBoard.length}}</text>
			<view v-for="item in messageBoard" class="content">
				<view class="head">
					<image :src="item.portrait" mode=""></image>
					<view class="commentId">{{item.userId}}</view>
					<view class="commentTime">{{(currentTime - item.time) | getLeaveDays()}}前</view>
				</view>
				<view class="body">
					{{item.message}}
				</view>
				<view class="foot">
					<view class="box">
						<image src="../../static/icon/good.png" mode="" v-show="!item.isGood" @click="goodClick"></image>
						<image src="../../static/icon/good_fill.png" mode="" v-show="item.isGood" @click="goodClick"></image>
						<text>{{item.good}}</text>
					</view>
					<view class="box">
						<image src="../../static/icon/bad.png" mode="" v-show="!item.isBad" @click="badClick"></image>
						<image src="../../static/icon/bad_fill.png" mode="" v-show="item.isBad" @click="badClick"></image>
						<text>{{item.bad}}</text>
					</view>
					<view class="box">
						<image src="../../static/icon/message.png" mode="" @click="commentClick"></image>
						<text>{{item.comment.length}}</text>
					</view>
					<view class="comment">
						<view v-for="m in item.comment">
							{{m.userId}}:{{m.message}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="interactionBar">
			<view class="bottom_item">
				<image src="../../static/icon/like.png" mode="" v-show="!isLike" @click="likeClick"></image>
				<image src="../../static/icon/like_fill.png" mode="" v-show="isLike" @click="likeClick"></image>
				<view>喜欢</view>
			</view>
			<view class="bottom_item">
				<image src="../../static/icon/collection.png" mode="" v-show="!isCollected" @click="collectClick"></image>
				<image src="../../static/icon/collection_fill.png" mode="" v-show="isCollected" @click="collectClick"></image>
				<view>收藏</view>
			</view>
			<view class="bottom_item">
				<image src="../../static/icon/message.png" mode="" @click="leaveMessage"></image>
				<view>留言</view>
			</view>
			<view class="bottom_item" @click="contact">
				<text>联系卖家</text>
			</view>
		</view>
		<input type="tel" :style="isTyping ? '' : 'display:none;'">
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
				id: null,
				goodDetail: {},
				currentTime: 0,
				leaveTime: 0,
				messageLength: 0,
				messageBoard: [],
				isTyping: false,
				isLike: false,
				isCollected: false
			}
		},
		filters: {
			getLeaveDays(time) {
				let t = time/86400000
				if(t>365) {
					return parseInt(t/365)+'年'
				} else if(t>30) {
					return parseInt(t/30)+'个月'
				} else {
					return parseInt(t)+'天'
				}
				
			}
		},
		methods: {
			async getGoodDetail() {
				const res = await this.$myRequest({
					url: '/getGood?id=' + this.id
				})
				
				this.goodDetail = res.data.messages
				console.log(this.goodDetail)
				this.leaveTime = this.currentTime - this.goodDetail.lastTime
				this.messageBoard = this.goodDetail.messageBoard
				
			},
			goodClick() {
				
			},
			badClick() {
				
			},
			likeClick() {
				this.isLike = !this.isLike
			},
			leaveMessage() {
				
			},
			collectClick() {
				this.isCollected = !this.isCollected
			},
 			commentClick() {
				this.isTyping = !this.isTyping
				console.log(this.isTyping)
			},
			async contact() {
				uni.navigateTo({
					url: '../chat/chat?goodId=' + this.id
				})
			}
 		},
		onLoad(options) {
			this.id = options.id
			this.getGoodDetail()
			this.currentTime = this.$store.state.currentTime
		}
	}
</script>


<style lang="scss">
	.interactionBar {
		position: fixed;
		bottom: 0px;
		height: 88rpx;
		width: 100%;
		background-color: #fff;
		font-size: 25rpx;
		.bottom_item {
			display: inline-block;
			text-align: center;
			height: 88rpx;
			width: 88rpx;
			padding: 5rpx;
		}
		.bottom_item:last-child {
			position: absolute;
			right: 0;
			width: 200rpx;
			height: 56rpx;
			font-size: 32rpx;
			background-color: red;
			border-radius: 1em;
			margin: 16rpx;
			color: #fff;
			line-height: 56rpx;
		}
		image {
			width: 40rpx;
			height: 40rpx;
		}
	}
	.detail{
		margin: 20rpx 24rpx;
		padding-top: 20rpx;
		font-size: 35rpx;
		.price {
			color: red;
		}
		.clickCount {
			margin-left: 550rpx;
			font-size: 20rpx;
			color: #ccc;
		}
		.main-image {
			margin-top: 20rpx;
			width: 700rpx;
			image {
				width: 100%;
			}
		}
	}
	.divide {
		height: 20rpx;
		width: 100%;
		background-color: $uni-color-background;
	}
	.information {
		padding: 20rpx;
		.portrait {
			float: right;
			width: 88rpx;
			height: 88rpx;
		}
		.name {
			
		}
		.school {
			font-size: 26rpx;
		}
		.time {
			font-size: 20rpx;
			color: #ccc;
		}
	}
	.message {
		margin: 20rpx 25rpx;
		margin-bottom: 88rpx;
		.content {
			position: relative;
			margin: 10rpx 0;
			.head {
				image{
					float: left;
					width: 70rpx;
					height: 70rpx;
					margin-right: 20rpx;
				}
				.commentId {
					font-size: 30rpx;
				}
				.commentTime {
					color: #ccc;
					font-size: 18rpx;
				}
			}
			.body {
				margin-left: 88rpx;
				font-size: 30rpx;
			}
			.foot {
				margin-left: 88rpx;
				width: calc(100vh-88rpx);
				.box {
					display: inline-block;
					width: 140rpx;
					image {
						vertical-align: middle;
						width: 32rpx;
						height: 32rpx;
					}
					text {
						font-size: 24rpx;
					}
				}
				.comment {
					border-radius: 0.2em;
					width: 600rpx;
					background-color: $uni-color-background;
					font-size: 30rpx;
				}
			}
			
		}
	}
	
</style>
