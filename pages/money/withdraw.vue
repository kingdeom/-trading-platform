<template>
	<view class="login-form">
		<view class="form-header">
			<u-icon name="arrow-left" size="40" color="#ffffff" @click="back()"></u-icon>
			<text>出金</text>
		</view>
		<view class="bank_card">
			中国银行储蓄卡
		</view>
		<view class="lists">
			<text @click="logout()">提现金额</text>
		</view>
		<view class="desc">
			<text class="list_word">单次提现金额至少￥100</text>
			<view class="list_word">
				余额：<text style="color: #18B566;margin-right: 20rpx;">99999 </text>
				<text>手续费：0%</text>
			</view>
			<vie class="list_word">实际到账</vie>
		</view>
		<view class="tixian">
			提现
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	.login-form{
		padding: 80rpx;
	}
	.form-header{
		color: #FFFFFF;
		font-size: 50upx;
		font-weight: bold;
		margin-bottom: 50upx;
		text{
			padding: 10upx 30upx;
		}
	}
	.lists{
		// background-color: #434655;
		background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
		color: #FFFFFF;
		margin: 20rpx 0rpx;
		padding: 20rpx 40rpx;
		border-radius: 20rpx;
	}
	.bank_card{
		background-color: #D8543E;
		border-radius: 20rpx;
		height: 250rpx;
		color: #FFFFFF;
		opacity: 0.8;
		padding: 20rpx;
	}
	.desc{
		color: #FFFFFF;
		.list_word{
			margin: 8rpx 2rpx;
		}
	}
	.tixian{
		margin-top: 120rpx;
		background-image: url(../../static/index/tixian_bg.png);
		background-size:contain;
		background-repeat:no-repeat;
		text-align: center;
		color: #77562B;
		line-height: 100rpx;
		font-weight: bold;
		height: 200rpx;
	}
</style>
