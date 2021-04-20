<template>
	<view class="login-form">
		
		<u-form>
			
			<view class="form-header">
				<u-icon name="arrow-left" size="40" color="#ffffff"></u-icon>
				<text>修改密码</text>
			</view>

			<u-form-item :label-position="labelPosition" label="账号">
				<u-input :border="border" type="text" placeholder="请输入账号"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="密码" label-width="150" prop="rePassword">
				<u-input :border="border" type="password" placeholder="请确认密码"></u-input>
			</u-form-item>

			<u-form-item :label-position="labelPosition" label="验证码" prop="code" label-width="150">
				<u-input :border="border" placeholder="请输入验证码" type="text"></u-input>
				<u-button slot="right" class="send-code" type="success" size="mini" @click="getCode">发送</u-button>
			</u-form-item>
			
<!-- 			<u-form-item :label-position="labelPosition" right-icon="scan" label="邀请码" label-width="150">
				<u-input :border="border" type="text" placeholder="请确认密码"></u-input>
			</u-form-item> -->
			
			<view class="form-btn">
				修改密码
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
			};
		},
		methods:{
			// 获取验证码
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
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
				// margin: 40upx;
				margin-top: 100upx;
			}
		}
	}
</style>
