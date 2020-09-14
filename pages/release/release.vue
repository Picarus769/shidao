<template>
	<view class="release">
		<!-- <guests :v-show="!login"></guests> -->
		<view class="text">商品描述</view>
		<textarea type="text"
					placeholder="品牌型号,新旧程度,入手渠道,转手原因等..."
					maxlength="500"
					@input="onInput" />
		<view class="text">添加图片</view>
		<view class="images">
			<view v-for="(item, index) in images" :key="index">
				<image :src="item" mode="" @click="previewImage(index)"></image>
				<image src="../../static/icon/删除.png" mode="" @click="deleteImage(index)" class="delete"></image>
			</view>
			<image src="../../static/icon/添加.png" mode="" @click="addImages"></image>
		</view>
		
		<view class="price">
			<label for="p">价格￥</label>
			<input type="number" placeholder="0.00" value="" />
			<view class="categroy">
				<picker mode="selector" :value="selectValue" :range="selectRange" @change="selectChange">
					
					<view>发布到：{{selectRange[selectValue]}}</view>
				</picker>
			</view>
		</view>
		<button size="mini" type="default" @click="release">发布</button>
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
				describe: '',
				selectRange: ['其他', '数码产品', '二手书籍', '合租出租'],
				selectValue: 0,
				images: ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=198068294,2376610613&fm=26&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=198068294,2376610613&fm=26&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=198068294,2376610613&fm=26&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=198068294,2376610613&fm=26&gp=0.jpg'
				]
			}
		},
		computed: {
			...mapState(['avatarUrl', 'login', 'userName'])  
		},
		onLoad() {
			
		},
		methods: {
			//文字输入
			onInput(e) {
				this.describe = e.target.value
			},
			//预览图片
			previewImage(current) {
				const urls = this.images
				console.log(current)
				uni.previewImage({
					current,
					urls,
					indicator: 'default',
					success() {
						console.log("预览图片")
					},
					fail(err) {
						console.log(err.errMsg);
					}
				})
			},
			//选择分区
			selectChange(event) {
				this.selectValue = event.detail.value
			},
			//添加图片
			addImages() {
				uni.chooseImage({
					success: (res) => {
						this.images = [...this.images, ...res.tempFilePaths]
						this.previewImage(this.images.length-1)
					}
				})
			},
			//删除图片
			deleteImage(index) {
				this.images.splice(index, 1)
			}
		}
	}
</script>

<style lang="scss">
	.release {
		.text {
			font-size: 30rpx;
			width: 700rpx;
			margin: auto;
			
		}
		textarea {
			width: 700rpx;
			height: 400rpx;
			margin: auto;
			border-bottom: 1px solid #eee;
		}
		.images {
			width: 700rpx;
			margin: auto;
			border-bottom: 1px solid #eee;
			view {
				display: inline-block;
				.delete {
					margin-left: -30rpx;
					margin-bottom: 180rpx;
					width: 34rpx;
					height: 34rpx;
				}
			}
			image {
				margin: 5rpx;
				width: 200rpx;
				height: 200rpx;
			}
		}
		.price {
			width: 680rpx;
			height: 60rpx;
			line-height: 60rpx;
			margin: auto;
			padding: 10rpx;
			border-bottom: 1px solid #eee;
			color: red;
			.categroy {
				float: right;
				color: #fff;
				display: inline-block;
				text-align: center;
				font-size: 30rpx;
				padding: 0 10rpx;
				border-radius: 1em;
				background-color: #ddd;
			}
			input {
				display: inline-block;
				vertical-align: top;
				height: 60rpx;
				width: 200rpx;
				line-height: 60rpx;
			}
		}
		
		button {
			margin: 25rpx;
			color: #fff;
			background-color: $uni-color-primary;
		}
	}
	
	
</style>
