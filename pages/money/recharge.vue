<template>
	<view class="login-form">
		<view class="form-header">
			<u-icon name="arrow-left" size="40" color="#ffffff" @click="back()"></u-icon>
			<text>充值</text>
		</view>
		<u-row gutter="16">
			<u-col span="6">
				<view class="lists" @click="pages = 'zidingyi'">
					<u-image width="100rpx" height="100rpx" src="/static/user/jinbi.png" style="margin: 0 auto;margin-bottom: 15rpx;"></u-image>
					<text>自定义价格</text>
					<u-input v-model="price" type="text" placeholder="请输入价格" input-align="center"/>
					<vie v-show="pages == 'zidingyi'">
						<u-image width="60rpx" height="60rpx" src="/static/user/duigou.png" style="margin: 0 auto;margin-bottom: 15rpx;"></u-image>
					</vie>
				</view>
			</u-col>
			<u-col span="6" v-for="(item,index) in priceList">
				<view class="lists" @click="pages = index">
					<u-image width="100rpx" height="100rpx" src="/static/user/jinbi.png" style="margin: 0 auto;margin-bottom: 15rpx;"></u-image>
					<text class="words">{{item.price}}</text>
					<view class="words">{{item.title}}</view>
					<vie v-show="pages == index">
						<u-image width="60rpx" height="60rpx" src="/static/user/duigou.png" style="margin: 0 auto;margin-bottom: 15rpx;"></u-image>
					</vie>
				</view>
			</u-col>
		</u-row>
		<view class="recharge">
			充值
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:'',
				priceList:[{
							price: '100',
							title: '售价100元',
							page: "1"
						},
						{
							price: '500',
							title: '售价500元',
							page: "2"
						},
						{
							price: '1000',
							title: '售价1000元',
							page: "3"
						},
						{
							price: '2000',
							title: '售价2000元',
							page: "4"
						},
						{
							price: '5000',
							title: '售价5000元',
							page: "5"
						},
					],
				pages:'0'	
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
		background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
		margin: 10rpx;
		padding: 10rpx;
		border-radius: 30rpx;
		height: 300rpx;
		text-align: center;
		color: #FFFFFF;
	}
	.words{
		margin: 10rpx 0rpx;
	}
	.recharge{
		margin-top: 50rpx;
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
