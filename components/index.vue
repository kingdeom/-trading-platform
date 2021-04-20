<template>
	<view class="index">
		
		<view class="u-u-swiper">
			<u-swiper @change="change" :height="250" :list="list" :title="title" :effect3d="effect3d" 
			:indicator-pos="indicatorPos" :mode="mode" :interval="3000" @click="click"></u-swiper>
		</view>
		
		<!-- 菜单 -->
		<u-row class="tool-quick">
			<u-col :span="6" :offset="0">
				<image src="/static/index/cz.png" mode="widthFix" class="btn" @click="recharge()"></image>
			</u-col>
			<u-col :span="6" :offset="0">
				<image src="/static/index/tx.png" mode="widthFix" class="btn" @click="withdraw()"></image>
			</u-col>
		</u-row>	
		
		<!-- 余额 -->
		<view class="balance">
			<text class="title">可用余额</text>
			<view class="money">
				<text>￥</text>
				888888888888
			</view>
		</view>
		
		<!-- 商品列表 -->
		<view class="product-list">
			<text>商品列表</text>
			
			<view class="list-body">
				
				<u-row class="item down" v-for="(item,index) in goodList" @click="buys()">
					<u-col :span="2" :offset="0" class="icon-line">
						<image src="/static/index/icon.png" mode="widthFix" class="icon"></image>
					</u-col>
					<u-col :span="4" class="item-name">
						<text>{{item.ptitle}}</text>
						<view>{{item.en}}</view>
					</u-col>
					<u-col :span="2" :offset="0" class="diff-icon">
						<image src="/static/index/down.png" mode="widthFix" class="icon"></image>
					</u-col>
					<u-col :span="4" class="item-price">
						<view>￥{{item.Price}}</view>
						<text class="btn">交易中</text>
					</u-col>
				</u-row>
				
				
			</view>
		</view>
			
	</view>
</template>

<script>
	/* 
	 * 自定义底部导航栏
	 */
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				title: false,
				mode: 'round',
				indicatorPos: 'bottomCenter',
				effect3d: false,
				goodList:[]
			};
		},
		created() {
			this.getIndex();
		},
		methods:{
			titleChange(index) {
				this.title = index == 0 ? true : false;
			},
			modeChange(index) {
				this.mode = index == 0 ? 'round' : index == 1 ? 'rect' : index == 2 ? 'number' : 'none';
			},
			indicatorPosChange(index) {
				this.indicatorPos = index == 0 ? 'topLeft' : index == 1 ? 'topRight' : index == 2 ? 'bottomLeft' : index == 3 ? 'bottomCenter'  : 'bottomRight';
			},
			effect3dChange(index) {
				this.effect3d = index == 0 ? true : false;
			},
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}张图片`,
					type: 'success'
				})
			},
			change(index) {
				// console.log(index);
			},
			//获取首页数据
			getIndex(){
				uni.showLoading({
					title: '正在加载'
				})
				this.$request.sendToken('/index/index', {
					'token': uni.getStorageSync('tokens')
				},'POST').then(res => {
					uni.hideLoading();
					// 打印调用成功回调
					console.log(res.data)
					this.goodList = res.data;
				})
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
			//下单页面
			buys(){
				uni.navigateTo({
				    url: '/pages/order/buys'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index{
		padding: 50upx;
		padding-top: 150upx;
		.tool-quick{
			.btn{
				width: 90%;
				height: 60upx;
			}
			margin: 50upx 0;
		}
		.balance{
			background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
			border: 4upx solid #979797;
			border-radius: 30upx;
			// min-height: 200upx;
			text-align: center;
			overflow: hidden;
			padding: 15upx;
			color: #FFFFFF;
			.title{
				color: #FFFFFF;
				margin: 20upx 0 ;
			}
			.money{
				padding: 20upx 0 ;
				text{
					font-size: 24upx;
				}
				font-size: 34upx;
			}
		}
		.product-list{
			padding: 30upx 0;
			color: #FFFFFF;
			margin-bottom: 120upx;
			
			.item{
				margin: 30upx 0;
				border-radius: 30upx;
				padding: 20upx;
				background: linear-gradient(275deg, rgba(45, 45, 53, 0.1) 0%, #505058 100%);
				.icon-line{
					border-right: 2upx dashed #979797;
					overflow: hidden;
				}
				.icon{
					width: 60upx;
				}
				.item-name{
					padding: 20upx !important;
					text-align: center !important; 
				}
				.diff-icon{
					.icon{
						width: 50upx;
					}
				}
				.item-price{
					text-align: center !important; 
					color: #FB736B;
					.btn{
						background-color: #FB736B;
						color: #FFFFFF;
						border-radius: 10upx;
						padding: 4upx 20upx;
					}
					view{
						margin: 10upx 0;
					}
				}
			}
			
			.down{
				
			}
		}
		
		
		
	}
</style>
