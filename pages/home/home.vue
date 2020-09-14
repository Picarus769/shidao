<template>
	<view class="home">
		<!-- 搜索栏 -->
		<view class="search">
			<!-- <view>
				<icon type="search"></icon>
				<text>搜索</text>
			</view> -->
			<uni-search-bar :radius="100" placeholder="请输入想要的商品" cancelButton="none" @confirm="confirm"></uni-search-bar>
		</view>
		<!-- 轮播图 -->
		<swiper indicator-dots="true">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航栏 -->
		<view class="nav">
			<view v-for="item in nav" :key="item.name" class="nav-item" @click="navClick(item.path)">
				<view>
					<image :src="item.img" mode=""></image>
				</view>
				
				<text>{{item.name}}</text>
				
			</view>
		</view>
		<!-- 推荐 -->
		<view class="text">热门好物</view>
		<goodsList :goods="recommendGoods"></goodsList>
		<view v-show="flag" class="is-empty">
			-----我是有底线的-----
		</view>
		<view v-show="isScrolling" @click="backTopClick()">
			<BackTop ></BackTop>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goodsList/goodsList'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import BackTop from '../../components/backTop.vue'

	export default {
		data() {
			return {
				user: [],
				isScrolling: false,
				pageIndex: 1,
				flag: false,
				swipers: [],
				inputContent: '',
				nav: [
					{
						name: '数码产品',
						img: '../../static/icon/electronics.png',
						path: '/pages/electronics/electronics'
					},
					{
						name: '二手书籍',
						img: '../../static/icon/books.png',
						path: '/pages/books/books'
					},
					{
						name: '合租出租',
						img: '../../static/icon/houses.png',
						path: '/pages/houses/houses'
					},
					{
						name: '分类',
						img: '../../static/icon/cate.png',
						path: '/pages/cate/cate'
					}
				],
				recommendGoods: []
			}
		},
		onLoad() {
			this.getSwipers()
			this.getRecommendGoods()
			this.getUserInformation()
			
		},
		onReachBottom() {
			this.pageIndex++
			if (this.recommendGoods.length < (this.pageIndex-1) * 6) {
				
				return this.flag = true
			}
			
			this.getRecommendGoods()
		},
		onPageScroll(res) {
			if(res.scrollTop > 500) {
				this.isScrolling = true
			} else {
				this.isScrolling = false
			}
		},
		components: {
			goodsList,
			uniSearchBar,
			BackTop
		},	
		methods: {
			//请求数据
			async getSwipers() {
				
				const res = await this.$myRequest({
					url: '/images/swiper'
				})
				
				this.swipers = res.data.messages
			},
			async getRecommendGoods() {
				const res = await this.$myRequest({
					// url: '/emp/' + this.pageIndex
					url: '/getList?pageindex=' + this.pageIndex
				})
				
				this.recommendGoods = [...this.recommendGoods, ...res.data.messages]
				// console.log(this.recommendGoods)
			},
			//请求用户信息
			async getUserInformation() {
				if(this.user.length == 0) {
					const res = await this.$myRequest({
						url: '/user',
						method: 'POST',
						data: {
							'username': 18345723769,
							'password': 111112
						}
					})
					this.$store.commit('login', res.data.data)
				} 
				
			},
			//导航点击事件
			navClick(url) {
				uni.navigateTo({
					url
				})
			},
			//点击搜索栏
			confirm(e) {
				console.log(e)
			},
			backTopClick() {
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.home{
		background-color: $uni-color-background;
		.search {
			// background-color: #f8f8f8;
			// padding: 20rpx;
			// position: relative;
			// view {
			// 	border-radius: 1em;
			// 	background-color: #ffffff;
			// 	height: 60rpx;
			// 	position: relative;
			// 	icon {
			// 		position: absolute;
			// 		left: 20rpx;
			// 		top: 10rpx;
			// 	}
			// 	text {
			// 		display: inline-block;
			// 		width: 100%;
			// 		text-align: center;
			// 		color: #ccc;
			// 	}
			// }
			
		}
		swiper{
			width: 750rpx;
			height: 380rpx;
			// border-bottom: 1px solid #F8F8F8;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.nav {
			// border: 1px solid #F8F8F8;
			background-color: #fff;
			margin-top: 10rpx;
			padding: 10rpx;
			display: flex;
			.nav-item {
				
				flex: 1;
				width: 25%;
				text-align: center;
				padding: 10rpx;
				text {
					font-size: 30rpx;
				}
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
		.text {
			margin-top: 10rpx;
			text-align: center;
			height: 2em;
			line-height: 2em;
			background-color: #fff;
		}
		.is-empty {
			text-align: center;
			font-size: 30rpx;
		}
	}
</style>
