<template>
	<!-- 标题 请选择收款方式 -->
		<view class="text">
			<text>请选择收款方式</text>
		</view>
		
		<!-- 四种支付方式 -->
		<view class="pay-way">
			<view class="left">
					<uni-icons type="weixin" size="30" color="green"></uni-icons>
					<text>微信</text>
			</view>
			<view class="right">
			<button>使用中</button>
			</view>
		</view>
		<view class="pay-way">
			<view class="left">
					<uni-icons type="weibo" color="rgba(28,140,242,1)" size="30" ></uni-icons>
					<text>支付宝</text>
			</view>
			<view class="right">
				<button>添加账号</button>
			</view>
		</view>
		<view class="pay-way">
			<view class="left">
					<uni-icons type="trash-filled" size="30" color="green"></uni-icons>
					<text>现金</text>
			</view>
			<view class="right">
			<button>使用</button>
			</view>
		</view>
		<view class="pay-way">
			<view class="left">
					<uni-icons type="vip-filled" size="30" color="rgba(242,223,5,1)"></uni-icons>
					<text>积分</text>
			</view>
			<view class="right">
			<button>使用</button>
			</view>
		</view>
		
		<!-- 确认按钮 -->
		<button class="comfire"> 确认 </button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.text{
		font-size: 18px;
		text-align: left;
		font-family: SourceHanSansSC-regular;
		margin: 10px 0px 6px 0px;
	}
	.pay-way{
		box-sizing: border-box;
		width: 393px;
		height: 62.09px;
		border-radius: 10px;
		background-color: rgba(255,255,255,1);
		// color: rgba(255,255,255,1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
		border: 1px solid rgba(187,187,187,1);
		
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0px 6px 0px 23px;
		margin-bottom: 10.68px;
		.left{
			// box-sizing: border-box;
			display: flex;
			align-items: center;
			text{
				margin-left: 25px;
				font-size: 14px;
				text-align: center;
				font-family: SourceHanSansSC-regular;
			}
		}
		button{
			width: 71px;
			height: 27px;
			padding: 0px;
			line-height: 27px;
			border-radius: 22px;
			background-color: rgba(255,255,255,1);
			color: rgba(16,16,16,1);
			font-size: 14px;
			text-align: center;
			font-family: Roboto;
			border: 1px solid rgba(187,187,187,1);
		}
	}
	.comfire{
		margin-top: 34px;
		width: 329px;
		height: 36px;
		line-height: 36px;
		border-radius: 4px;
		background-color: rgba(46,192,118,1);
		color: rgba(255,255,255,1);
		font-size: 14px;
		text-align: center;
		font-family: Roboto;
	}
</style>
