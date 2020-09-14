<template>
	<view class="cate">
		<view class="left">
			<view v-for="(item, index) in cate"
					:key="item.id"
					:class="{selected: selectedId==index}"
					@click="itemClick(item)">{{item.name}}</view>
		</view>
		<scroll-view class="right" scroll-y="true" >
			<view v-for="item in goods" class="goods">
				<image :src="item.img" mode=""></image>
				<view class="message">{{item.message}}</view>
				<view class="price">{{"￥" + item.price}}</view>
				<view class="master">{{item.master}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageIndex: 1,
				selectedId: 0,
				cate: [
					{id: 0, 
					name: "数码产品",
					
					},
					{id: 1,
					name: "数码产品",
					},
					{id: 2,
					name: "数码产品",
					},
					{id: 3,
					name: "数码产品",
					},
					{id: 4,
					name: "数码产品",
					},
					{id: 5,
					name: "数码产品",
					},
					
					{id: 6,
					name: "数码产品",
					},
					{id: 7,
					name: "数码产品",
					},
					{id: 8,
					name: "数码产品",
					},
					{id: 9,
					name: "数码产品",
					},
					{id: 10,
					name: "数码产品",
					},
					{id: 11,
					name: "数码产品",
					},
					{id: 12,
					name: "数码产品",
					},
				],			
				goods: []
			}
		},
		methods: {
			itemClick(item) {
				this.selectedId = item.id
			},
			async getGoods() {
				const res = await this.$myRequest({
					url: '/getList?pageindex=' + this.pageIndex
				})
				this.pageIndex++
				console.log(res)
				this.goods = [...this.goods, ...res.data.messages]
				console.log(this.goods)
				if(!res.data) {
					console.log('没有更多了！')
				}
			},
				
 		},
		onLoad() {
			this.getGoods()
			console.log(this.$route)
		}
	}
</script>

<style lang="scss">
	page {
		
		height: 100%;
		.cate {
			display: flex;
			height: 100%;
			.left {
				height: 100%;
				width: 200rpx;
				border-right: #ccc 1px solid;
				box-sizing: border-box;
				overflow: scroll;
				view {
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-size: 30rpx;
					border-top: #ccc solid 1px;
				}
				view:first-child {
					border-top: none;
				}
				.selected {
					background-color: $uni-color-primary
				}
			}
			.right {
				height: 100%;
				width: 510rpx;
				padding: 0 20rpx;
				.goods {
					margin-bottom: 10rpx;
					padding-bottom: 10rpx;
					border-bottom: 1rpx solid #ccc;
					image {
						width: 500rpx;
						height: 500rpx;
					}
					.message {
						font-size: 30rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						text-overflow: ellipsis;
						overflow: hidden;
					}
					.price {
						margin-top: 10rpx;
						font-size: 30rpx;
						color: red;
					}
					.master {
						font-size: 30rpx;
						color: #ccc;
					}
				}
			}
		}
		
		
	}
</style>
