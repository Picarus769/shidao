<template>
	<view class="resumes">
		<view v-for="item in g" class="goodsItem" @click="itemClick(item.id)">
			<view class="master">
				<image :src="item.portrait" mode=""></image>
				<view>{{item.master}}</view>
			</view>
			<view class="info">
				<image :src="item.img" mode=""></image>
				<view class="message">{{item.message}}</view>
				<view class="price">{{item.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goods']
		data() {
			return {
				g: [
					{
						id: 0,
						price: '500000000.00',
						master: 'pcs',
						portrait: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1561220502,3761876494&fm=26&gp=0.jpg',
						school: '哈尔滨商业大学',
						message: '二手歼二十飞机，纯国产，开了一次闲置了。便宜出了。',
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1737854175,1057170981&fm=26&gp=0.jpg'
					 },
					{
						id: 0,
						price: '500000000.00',
						master: 'pcs',
						portrait: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1561220502,3761876494&fm=26&gp=0.jpg',
						school: '哈尔滨商业大学',
						message: '二手歼二十飞机，纯国产，开了一次闲置了。便宜出了。',
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1737854175,1057170981&fm=26&gp=0.jpg'
					}
				]
			};
		},
		methods: {
			itemClick(id) {
				uni.navigateTo({
					url: '../../pages/detail/detail?id' + id
				})
			}
		}
	}
</script>

<style lang="scss">
 .resumes {
	 .goodsList {
		 
	 }
 }
</style>
