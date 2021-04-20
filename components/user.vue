<template>
	<view style="padding-bottom: 150rpx;">
		<view class="tops">
			<text>可用余额</text>
			<view>￥8000000000</view>
			<!-- 菜单 -->
			<u-row class="tool-quick">
				<u-col :span="6" >
					<image src="/static/index/cz.png" mode="widthFix" class="btn" @click="recharge()"></image>
				</u-col>
				<u-col :span="6" >
					<image src="/static/index/tx.png" mode="widthFix" class="btn" @click="withdraw()"></image>
				</u-col>
			</u-row>
		</view>
		
		<view class="lists" v-for="item in menuList">
			<u-row gutter="16">
				<u-col span="2">
					<u-image width="50rpx" height="50rpx" :src="item.image"></u-image>
				</u-col>
				<u-col span="9">
					<text @click="actions(item.page)">{{item.title}}</text>
				</u-col>
				<u-col span="1" @click="actions(item.page)">
					>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		name:"user",
		data() {
			return {
				menuList: [{
						image: '/static/index/icon.png',
						title: '签约',
						page: "logout"
					},
					{
						image: '/static/index/icon.png',
						title: '资金流水',
						page: "logout"
					},
					{
						image: '/static/index/icon.png',
						title: '提现记录',
						page: "logout"
					},
					{
						image: '/static/index/icon.png',
						title: '充值记录',
						page: "logout"
					},
					{
						image: '/static/index/icon.png',
						title: '历史订单',
						page: "logout"
					},
					{
						image: '/static/index/icon.png',
						title: '修改信息',
						page: "logout"
					},
					{
						image: '/static/index/icon.png',
						title: '联系客户',
						page: "logout"
					},
					{
						image: '/static/index/icon.png',
						title: '退出',
						page: "logout"
					},
				],
			};
		},
		methods:{
			//退出登录
			logout(){
				uni.removeStorageSync('tokens');
				uni.reLaunch({
				    url: '/pages/login/login'
				});
			},
			//提现页面
			withdraw(){
				uni.navigateTo({
				    url: '/pages/money/withdraw'
				});
			},
			//充值页面
			recharge(){
				uni.navigateTo({
				    url: '/pages/money/recharge'
				});
			},
			actions(page){
				console.log(page);
				if(page == "logout"){
					this.logout();
				}
			}
		}
	}
</script>

<style lang="scss">
	.tops{
		background-color: #3A3A3E;
		height: 420rpx;
		text-align: center;
		color: #FFFFFF;
		padding-top: 100rpx;
		font-weight: bold;
		border-bottom: 5rpx solid #979797;
	}
	.tops view{
		margin-top: 20rpx;
		font-size: 50rpx;
	}
	.tool-quick{
		.btn{
			width: 90%;
			height: 50upx;
		}
		margin: 50upx 50upx;
	}
	.lists{
		// background-color: #434655;
		background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
		color: #FFFFFF;
		margin: 20rpx 50rpx;
		padding: 20rpx 40rpx;
		border-radius: 40rpx;
	}
</style>
