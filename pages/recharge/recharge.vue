<template>
	<view class="login-form">
		<view class="form-header">
			<u-icon name="arrow-left" size="40" color="#ffffff" @click="back()"></u-icon>
			<text>充值记录</text>
		</view>
		
		<view class="content" v-for="item in list">
			<view class="time">
				<view class="txt1">{{item.time1}}</view>
				<view class="txt2">{{item.time2}}</view>
			</view>
			<view class="bg">
				
			</view>
			<view class="extract">
				<view class="act_l">
					
				</view>
				<view class="act_r">
					<view class="txt3">
						{{item.num}}
					</view>
					<view class="txt4">
						{{item.change}}
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
				{time1:'03-28',time2:'10:00',num:'+2334',change:'提取中'},
				{time1:'03-28',time2:'10:00',num:'+2334',change:'提取中'},
				{time1:'03-28',time2:'10:00',num:'+2334',change:'提取中'},
				{time1:'03-28',time2:'10:00',num:'+2334',change:'提取中'},
				{time1:'03-28',time2:'10:00',num:'+2334',change:'提取中'},
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
	width: 100%;
    display: flex;
	margin-top: 30upx;
	
}
.time{
	width: 25%;
	height: 140upx;
	float: right;
	
}
.txt1{
	// width: 39upx;
	height: 17upx;
	font-size: 26upx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #FFFFFF;
	line-height: 17upx;
	margin-top: 50upx;
	text-align: right;
}
.txt2{
	font-size: 24upx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #FFFFFF;
	line-height: 16upx;
	margin-top: 30upx;
	text-align: right;
}
.bg{
	float: right;
}
.extract{
	float: right;
	width: 90%;
	height: 140upx;
	background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
	border-radius: 9upx;
	margin-left: 60rpx;
	display: flex;
	align-items: center;
}
.act_l{
	width: 10upx;
	height: 80upx;
	background: #51C4A7;
	border-radius: 0px 10upx 10upx 0px;
}
.act_r{
	margin-left: 50upx;
}
.txt3{
	font-size: 32upx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #FFFFFF;
	line-height: 42upx;
	margin-tottom: 10upx;
	text-align: center;
}
.txt4{
	font-size: 26upx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #FFFFFF;
	line-height: 34upx;
	margin-top: 10upx;
	text-align: center;
}

</style>
