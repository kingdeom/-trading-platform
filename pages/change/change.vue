<template>
	<view class="login-form">
		
		<u-form>
			
			<view class="form-header">
				<u-icon name="arrow-left" size="40" color="#ffffff" @click="back()"></u-icon>
				<text>注册</text>
			</view>

			<u-form-item :label-position="labelPosition" label="手机"  label-width="120" >
				<u-input :password-icon="true" v-model="username" :border="border" type="text" placeholder="请输入手机号"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="密码" label-width="120" >
				<u-input :border="border" v-model="upwd" type="password" placeholder="请确认密码"></u-input>
			</u-form-item>
			
			<u-form-item :label-position="labelPosition" label="密码" label-width="120" >
				<u-input :border="border" v-model="upwd2" type="password" placeholder="请确认密码"></u-input>
			</u-form-item>

			<u-form-item :label-position="labelPosition" label="验证码" prop="code" label-width="120">
				<u-input :border="border" v-model="code" placeholder="验证码" type="text"></u-input>
				<u-toast ref="uToast"></u-toast>
				<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" 
				@change="codeChange" :startText="startText" :changeText="changeText" 
				:endText="endText"></u-verification-code>
				<!-- <u-button @click="getCode">{{tips}}</u-button> -->
				<u-button slot="right" class="send-code" type="success" size="mini" @click="getCode">{{tips}}</u-button>
			</u-form-item>
			
			<u-form-item :label-position="labelPosition" right-icon="scan" label="邀请码" label-width="120">
				<u-input :border="border" v-model="oid" type="text" placeholder="请输入邀请码"></u-input>
			</u-form-item>
			
			<view class="form-btn" @click="reg()">
				立即注册
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
				tips: '',
				seconds: 60,
				refCode: null,
				startText: '获取',
				changeText: 'X秒获取',
				endText: '重新获取',
				username:'',
				upwd:'',
				upwd2:'',
				code:'',
				oid:''
			};
		},
		methods:{
			// 获取验证码
			codeChange(text) {
				// console.log(text);
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
						this.$request.send('Login/sendmsm', {
							phone: this.username,
						},'POST').then(res => {
							// 打印调用成功回调
							console.log(res)
							//提示是否发送成功
							this.$u.toast(res.status);
						})
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			secondsChange(index) {
				this.seconds = index == 0 ? 60 : index == 1 ? 10 : 5;
			},
			textChange(index) {
				if(index == 0) {
					this.startText = '点一下获取',
					this.changeText = '重新获取Xs',
					this.endText = '再次获取'
				} else {
					this.startText = '获取',
					this.changeText = 'X秒获取',
					this.endText = '重新获取'
				}
			},
			end() {
				// this.$u.toast('倒计时结束');
			},
			start() {
				// this.$u.toast('倒计时开始');
			},
			reset() {
				// this.$refs.uCode.reset();
			},
			//注册账户
			reg(){
				var me = this;
				this.$request.send('login/register', {
					username: me.username,
					upwd: me.upwd,
					upwd2: me.upwd2,
					oid: me.oid,
					utel: me.username,
					code: me.code,
				},'POST').then(res => {
					// 打印调用成功回调
					console.log(res)
					if(res.status == '1'){
						// uni.setStorageSync('tokens', 'hello');
						uni.reLaunch({
						    url: '/pages/login/login'
						});
					}else{
						this.$u.toast(res.message);
					}
				})
			},
			//返回登录页面
			back(){
				uni.reLaunch({
				    url: '/pages/login/login'
				});
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
				margin-bottom: 50upx;
				text{
					padding: 10upx 30upx;
				}
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
		}
	}
</style>
