<template>
	<view class="login-form">
		
		<u-form>
			
			<view class="form-header">
				<text>欢迎</text>
				<view class="">
					见证收益的精彩
				</view>
			</view>

			<u-form-item :label-position="labelPosition" label="账号" label-width="120" >
				<u-input :password-icon="true" v-model="username" :border="border" type="text" placeholder="请输入账户"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="密码" label-width="120" >
				<u-input :border="border" v-model="upwd" type="password" placeholder="请确认密码"></u-input>
			</u-form-item>
			
			<view class="forget">
				<text class="forget-text">忘记密码</text>
				<text class="reg-text" @click="reg()">注册</text>
			</view>
			
			
			<view class="form-btn" @click="login()">
				登陆
			</view>
			
			<view class="agreement">
				<u-checkbox v-model="check" @change="checkboxChange"></u-checkbox>
				<view class="agreement-text">
					勾选代表同意协议
				</view>
			</view>
		
		</u-form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'left',
				border: false,
				codeTips: '',
				check: true,
				username:'',
				upwd:''
			};
		},
		methods:{
			// 勾选版权协议
			checkboxChange(e) {
				this.model.agreement = e.value;
			},
			//跳转到注册页面
			reg(){
				uni.navigateTo({
					url: '/pages/reg/reg'
				});
			},
			//发送登录请求
			login(){
				var me = this;
				this.$request.send('login/login', {
					username: me.username,
					upwd: me.upwd,
				},'POST').then(res => {
					// 打印调用成功回调
					console.log(res.data.token)
					if(res.status == '1'){
						uni.setStorageSync('tokens', res.data.token);
						uni.reLaunch({
						    url: '/pages/index/index'
						});
					}else{
						this.$u.toast(res.message);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.login-form{
		.u-form{
			padding: 100upx;
			.form-header{
				color: #FFFFFF;
				font-size: 50upx;
				font-weight: bold;
				margin-bottom: 200upx;
			}
			.u-form-item{
				background-color: #FFFFFF;
				padding: 10upx 50upx;
				border-radius: 50upx;
				border-width: 0;
				margin-bottom: 40upx;
				
			}
			.u-border-bottom::after{
				border-width: 0;
			}
			.u-form-item--left__content__label{
				color: #060518;
			}
			.send-code{
				background: linear-gradient(90deg, #F0D8A6 0%, #EBC181 100%);
				color: #060518;
				border-radius: 30upx;
				padding: 10upx 30upx;
			}
			.form-btn{
				background: linear-gradient(90deg, #F0D8A6 0%, #EBC181 100%);
				text-align: center;
				padding: 25upx 30upx;
				border-radius: 50upx;
			}
			.forget{
				color: #979797;
				.forget-text{
					float: left;
				}
				.reg-text{
					float: right;
				}
				height: 60upx;
			}
			
			.agreement {
				display: flex;
				align-items: center;
				margin: 40rpx 0;

				.agreement-text {
					padding-left: 8rpx;
					color: $u-tips-color;
				}
			}
			.u-checkbox__icon-wrap--checked{
				background-color: #EECF98;
				border-color: #EECF98;
			}
		}
	}
</style>
