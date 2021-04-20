<template>
	<view class="login-form">
		<view class="form-header">
			<u-icon name="arrow-left" size="40" color="#ffffff" @click="back()"></u-icon>
			<text>银行资料</text>
		</view>
		<!-- 		<u-row gutter="16">
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
		 -->

		<view class="name">
			<view class="lists" v-for="item in menuList">
				<u-row gutter="14">
					<u-col span="2"><u-image width="28rpx" height="28rpx" :src="item.image"></u-image></u-col>
					<u-col span="9">
						<text @click="actions(item.page)">{{ item.title }}</text>
					</u-col>
					<u-col span="1" @click="actions(item.page)"><u-image width="28rpx" height="28rpx" :src="item.image2"></u-image></u-col>
				</u-row>
			</view>
		</view>

		<view class="name bot">
			<view class="lists" v-for="item in menuList2">
				<u-row gutter="14">
					<u-col span="2"><u-image width="28rpx" height="28rpx" :src="item.image"></u-image></u-col>
					<u-col span="9">
						<text @click="actions(item.page)">{{ item.title }}</text>
					</u-col>
					<u-col span="1" @click="actions(item.page)"><u-image width="28rpx" height="28rpx" :src="item.image2"></u-image></u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			price: '',
			priceList: [
				{
					price: '100',
					title: '售价100元',
					page: '1'
				},
				{
					price: '500',
					title: '售价500元',
					page: '2'
				},
				{
					price: '1000',
					title: '售价1000元',
					page: '3'
				},
				{
					price: '2000',
					title: '售价2000元',
					page: '4'
				},
				{
					price: '5000',
					title: '售价5000元',
					page: '5'
				}
			],
			menuList: [
				{
					image: '/static/pic1.png',
					image2: '/static/pic9.png',
					title: '银行名称',
					page: 'logout'
				},
				{
					image: '/static/pic2.png',
					image2: '/static/pic9.png',
					title: '省份',
					page: 'logout'
				},
				{
					image: '/static/pic3.png',
					image2: '/static/pic9.png',
					title: '市名',
					page: 'logout'
				}
			],
			menuList2: [
				{
					image: '/static/pic4.png',
					image2: '/static/pic9.png',
					title: '开户支行',
					page: 'logout'
				},
				{
					image: '/static/pic5.png',
					image2: '/static/pic9.png',
					title: '开户名',
					page: 'logout'
				},
				{
					image: '/static/pic6.png',
					image2: '/static/pic9.png',
					title: '卡号',
					page: 'logout'
				},
				{
					image: '/static/pic7.png',
					image2: '/static/pic9.png',
					title: '身份号码',
					page: 'logout'
				},
				{
					image: '/static/pic8.png',
					image2: '/static/pic9.png',
					title: '预留手机',
					page: 'logout'
				}
			],
			pages: '0'
		};
	},
	methods: {
		back() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.login-form {
	padding: 80rpx;
}
.form-header {
	color: #ffffff;
	font-size: 50upx;
	font-weight: bold;
	margin-bottom: 50upx;
	text {
		padding: 10upx 30upx;
	}
}
.name {
	width: 100%;
	min-height: 166upx;
	background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
	border-radius: 16upx;
	// border: 1px solid red;
}
.lists {
	// background-color: #434655;
	// background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
	color: #ffffff;
	margin: 20upx 24upx;
	padding: 20upx 0upx;
	// border-radius: 40rpx;
}
.bot{
	margin-top: 50upx;
}
</style>
