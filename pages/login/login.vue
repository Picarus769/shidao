<template>
	<view class="content">
		<view class="text">
			邮箱
			<text :class="{flag: !isLogin}" class="selectBottom" @click="isLoginClick">登陆</text>/
			<text :class="{flag: isLogin}" class="selectBottom" @click="isLoginClick">注册</text>
		</view>
		<view class="login">
			<view>
				<input type="email" placeholder="请输入您的邮箱" v-model="loginForm.userName">
			</view>
			<view>
				<input type="password" placeholder="请输入您的密码" v-model="loginForm.password"/>
			</view>
			<view v-show="!isLogin">
				<input type="number" placeholder="请确认您的密码" class="verificationCodeInput" v-model="loginForm.checkPassword">
				
				<!-- <button class="getVerificationCode" @click="getVerificationCode">获取验证码</button> -->
			</view>
			<button v-show="isLogin" class="loginSubmit" @click="loginSubmit">登录</button>
			<button v-show="!isLogin" class="loginSubmit" @click="registerSubmit">注册</button>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				loginForm: {
					userName: '',
					checkPassword: '',
				},
				isLogin: true
			}
		},
		methods: {
			getVerificationCode() {
				
			},
			async loginSubmit() {
				const res = await this.$myRequest({
					url: '/users/getUser',
					method: 'POST',
					data: {
						username: this.loginForm.userName,
						password: this.loginForm.password
					}
				})
				console.log(res)
				// this.$store.commit('login', res.data.data)
				// uni.navigateBack()
			},
			async registerSubmit() {
				if(this.loginForm.password.length<6) {
					console.log(this.loginForm)
				}else if(this.loginForm.checkPassword != this.loginForm.password) {
					uni.showToast({
						title: '两次输入的密码不一致',
						icon: 'none'
					})
				} else {
					const res = await this.$myRequest({
						url: '/users/registerUser',
						method: 'POST',
						data: {
							username: this.loginForm.userName,
							password: this.loginForm.password
						}
					})
					console.log(res)
				}
				
			},
			isLoginClick() {
				this.isLogin = !this.isLogin
			}
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">

	.content {
		
		padding-top: 100rpx;
		height: 100%;
		width: 90%;
		margin: auto;
		.text {
			.selectBottom {
				margin: 5rpx;
				padding: 5rpx 15rpx;
				border-radius: 1em;
			}
			.flag {
				
				background-color: #eee;
			}
		}
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
		// display: inline-block;
		// margin-right: 50rpx;
	}
	.getVerificationCode {
		display: inline-block;
		width: 200rpx;
		font-size: 10rpx;
		background-color: $uni-color-primary
	}
	.loginSubmit {
		
		margin: 10px;
		background-color: #fff;
	}
</style>
