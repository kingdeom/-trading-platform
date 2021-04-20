<template>
	<view style="padding-bottom: 150rpx;">
		<u-subsection 
			class="subsection"
			:list="list" 
			:current="current" 
			 @change="sectionChange"
			height="100"
			button-color="#EBC384"
			active-color="red"
			inactive-color="#FFFFFF"
			bg-color="#36373F"></u-subsection>
			
			<view class="lists" v-for="item in 10">
				<u-row gutter="16">
					<u-col span="6">
						<view class="custom">澳洲红酒</view>
						<view class="custom">2021-04-05 12:50:00</view>
						<view class="custom">2021-04-05 12:50:00</view>
					</u-col>
					<u-col span="6" style="text-align: right;">
						<view>
							<u-row gutter="16">
								<u-col span="4">
									<u-image width="50rpx" height="50rpx" src="/static/index/down.png" style="float: right;"></u-image>
								</u-col>
								<u-col span="8" class="upturn" style="text-align: right;">
									<text >买跌(￥100)</text>
								</u-col>
							</u-row>
							
							
						</view>
						<view style="font-size: 50rpx; font-weight: bold;">0</view>
						<view>0.9078976976786</view>
					</u-col>
				</u-row>
			</view>
	</view>
</template>

<script>
	export default {
		name:"position",
		data() {
			return {
				list: [
					{
						name: '持仓明细'
					}, 
					{
						name: '历史明细'
					}
				],
				current: 0
			};
		},
		methods:{
			sectionChange(index) {
				this.current = index;
				console.log(index);
			}
		}
	}
</script>

<style lang="scss">

	.subsection{
		margin: 100rpx 50rpx 40rpx 40rpx;
		border-radius: 20rpx;
	}
	.lists{
		color: #FFFFFF;
		margin: 20rpx 40rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		// background-color: #36373F;
		background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
	}
	.custom{
		margin: 10rpx 0rpx;
	}
	.upturn{
		color: red;
		font-weight: bold;
	}
</style>
