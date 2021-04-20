<template>
	<view class="login-form">
		<view class="form-header">
			<u-icon name="arrow-left" size="40" color="#ffffff" @click="back()"></u-icon>
			<text>充值记录</text>
		</view>
		
		<view class="content" v-for="(item,index) in list" :key="index">
			<view class="con_son">
				<view class="con_l_parent">
					<view class="con_l">
					</view>
				</view>
				<view class="pic">
					<u-image width="90%" height="120rpx" src="/static/user/jinbi.png.png" style="margin: 0 auto;margin-bottom: 15rpx;"></u-image>
				</view>
			</view>
			<view class="con_bot" >
				<view class="box1">
					<view class="son1">
						<text>下单:</text>
						<text>{{item.money}}元</text>
					</view>
					<view class="son2">
						<text>余额:</text>
						<text>{{item.num}}元</text>
					</view>
				</view>
				<view class="box2">
					<view class="son1">
						<text></text>
						<text>{{item.time2}}</text>
					</view>
					<view class="son2">
						<text></text>
						<text>{{item.change}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list:[
				{money:'999999',time2:'2021–03-27 16:45:55',num:'102',change:'下单成功'},
				{money:'999999',time2:'2021–03-27 16:45:55',num:'102',change:'下单成功'},
				{money:'999999',time2:'2021–03-27 16:45:55',num:'102',change:'下单成功'},
				{money:'999999',time2:'2021–03-27 16:45:55',num:'102',change:'下单成功'},
				{money:'999999',time2:'2021–03-27 16:45:55',num:'102',change:'下单成功'},
			]
	}},
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
.content{
width: 90%;
min-height: 280upx;
background: linear-gradient(251deg, #36373F 0%, #36373F 100%);
border-radius: 20upx;
margin-bottom: 20upx;
	// display: flex;
	// box-sizing: content-box;
}
.content text{
	height: 34upx;
	font-size: 26upx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #FFFFFF;
	line-height: 34upx;
}
.con_l_parent{
	display: flex;
	align-items: center;
	min-height: 200upx;
	// background: red;
	width: 10upx;
	
}
.con_l{
	width: 10upx;
	height: 140upx;
	background: #51C4A7;
	border-radius: 0px 10upx 10upx 0px;
}
.con_son{
	width: 100%;
	height: 170upx;
	display: flex;
}
.pic{
	width: 100%;
	margin-top: 30upx;
}
.box1,.box2{
	display: flex;
	justify-content: space-between;
	padding-left: 15upx;
	padding-right: 15upx;
}
.box2{
	margin-top: 10upx;
}


</style>
