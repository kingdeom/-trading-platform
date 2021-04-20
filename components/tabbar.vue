<template>
	<view class="tabbar">
		<view v-for="(item,index) in list" class="items" @click="changeMethods(item.id,index)">
			<u-image width="100%" height="60rpx" :src="index == showNavIndex ? item.selectedIconPath :item.iconPath" style="margin: auto;"></u-image>
			<view :class="{'actives':index == showNavIndex}" >{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	/* 
	 * 自定义底部导航栏
	 */
	export default {
		name:"tabbar",
		props:{
			// 配置参数
			list: {
				type: Array,
				default () {
					return []
				}
			},
		},
		data() {
			return {
				showNavIndex:0,
			};
		},
		methods:{
			//底部导航选择操作
			changeMethods(id,index){
				// console.log(id);
				this.showNavIndex = index;
				this.$emit('showIndex',id)
			}
		}
	}
</script>

<style lang="scss">
	.tabbar{
		background-color: #26272F;
		color: #FFFFFF;
		padding: 20rpx;
		margin: 0rpx 5%;
		border-radius: 80rpx;
		position: fixed;
		bottom: 0rpx;
		width: 90%;
		text-align: center;
	}
	.items{
		margin: 1% 8%;
		float:left;
	}
	.actives{
		color: #18b566;
	}
</style>
