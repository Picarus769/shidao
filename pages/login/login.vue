<template>
	<view class="content">
		<view class="text">
			手机号登陆/注册
		</view>
		<view class="login">
			<view>
				<input type="number" placeholder="请输入您的手机号" v-model="loginForm.userName">
			</view>
			<view>
				<input type="number" placeholder="请输入验证码" class="verificationCodeInput" v-model="loginForm.verificationCode">
				<button class="getVerificationCode" @click="getVerificationCode">获取验证码</button>
			</view>
			<button class="loginSubmit" @click="loginSubmit">登录/注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					userName: '',
					verificationCode: '',
				}
			}
		},
		methods: {
			getVerificationCode() {
				
			},
			async loginSubmit() {
				const res = await this.$myRequest({
					url: '/user',
					method: 'POST',
					data: {
						'username': loginForm.userName,
						'password': loginForm.verificationCode
					}
				})
				this.$store.commit('login', res.data.data)
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">

	.content {
		padding-top: 100rpx;
		height: 100%;
		width: 90%;
		margin: auto;
	}

	.login {
		
		background-color: #fff;
	}

	.login text {
		margin: auto;
		padding: 5px;
		text-align: center;
	}

	input {
		margin-top: 20px;
		padding: 7px;
		border: none;
		border-bottom: 1px solid #ddd;
		outline: none;
	}
	.verificationCodeInput {
		display: inline-block;
		margin-right: 50rpx;
	}
	.getVerificationCode {
		display: inline-block;
		width: 200rpx;
		font-size: 10rpx;
		background-color: $uni-color-primary
	}
	.loginSubmit {
		margin-top: 10px;
		background-color: #fff;
	}
</style>
