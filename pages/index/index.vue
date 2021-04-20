<template>
	<view>
		<!-- 首页 -->
		<view class="u-page" v-if="pages == 1">
			<index></index>
		</view>
		<!-- 客服 -->
		<view class="u-page" v-else-if="pages == 2">
			kehu
		</view>
		<!-- 持仓 -->
		<view class="u-page" v-else-if="pages == 3">
			<position></position>
		</view>
		<!-- 我的 -->
		<view class="u-page" v-else="pages == 4">
			<user></user>
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<tabbars :list="list" @showIndex="getShowId" ></tabbars>
		
	</view>
</template>

<script>
	import tabbars from "@/components/tabbar.vue"
	import index from "@/components/index.vue"
	import user from "@/components/user.vue"
	import position from "@/components/position.vue"
	export default {
		components:{
			tabbars,
			index,
			user,
			position
		},
		data() {
			return {
				list: [{
						iconPath: "/static/index.png",
						selectedIconPath: "/static/center.png",
						text: '主页',
						id: '1'
					},
					{
						iconPath: "/static/message.png",
						selectedIconPath: "/static/center.png",
						text: '客服',
						id: '2'
					},
					{
						iconPath: "/static/chicang.png",
						selectedIconPath: "/static/center.png",
						text: '持仓',
						id: '3'
					},
					{
						iconPath: "/static/my.png",
						selectedIconPath: "/static/center.png",
						text: '我的',
						id: '4'
					},
				],
				pages:1
			}
		},
		onLoad() {
			if(!this.checkLogin()){
				uni.reLaunch({
				    url: '/pages/login/login'
				});
			}
		},
		onShow() {
/* 			this.$request.sendToken('/api/news', {
			// 传参参数名：参数值,如果没有，就不需要传
			},'POST').then(res => {
			// 打印调用成功回调
			console.log(res)
			}) */
		},
		methods: {
			getShowId(id){
				console.log('切换首页的'+id);
				this.SwitchPages(id);
			},
			//切换页面
			SwitchPages(index){
				this.pages = index;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
