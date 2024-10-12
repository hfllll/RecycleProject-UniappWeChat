<template>
<<<<<<< HEAD
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
		font-size: 34.34rpx;
		text-align: left;
		font-family: SourceHanSansSC-regular;
		margin: 19.08rpx 0.00rpx 11.45rpx 0.00rpx;
	}
	.pay-way{
		box-sizing: border-box;
		width: 749.84rpx;
		height: 118.47rpx;
		border-radius: 19.08rpx;
		background-color: rgba(255,255,255,1);
		// color: rgba(255,255,255,1);
		font-size: 30.53rpx;
		text-align: center;
		font-family: Roboto;
		border: 1.91rpx solid rgba(187,187,187,1);
		
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.00rpx 11.45rpx 0.00rpx 43.88rpx;
		margin-bottom: 20.38rpx;
		.left{
			// box-sizing: border-box;
			display: flex;
			align-items: center;
			text{
				margin-left: 47.70rpx;
				font-size: 26.71rpx;
				text-align: center;
				font-family: SourceHanSansSC-regular;
			}
		}
		button{
			width: 135.47rpx;
			height: 51.52rpx;
			padding: 0.00rpx;
			line-height: 51.52rpx;
			border-radius: 41.98rpx;
			background-color: rgba(255,255,255,1);
			color: rgba(16,16,16,1);
			font-size: 26.71rpx;
			text-align: center;
			font-family: Roboto;
			border: 1.91rpx solid rgba(187,187,187,1);
		}
	}
	.comfire{
		margin-top: 64.87rpx;
		width: 627.73rpx;
		height: 68.69rpx;
		line-height: 68.69rpx;
		border-radius: 7.63rpx;
		background-color: rgba(46,192,118,1);
		color: rgba(255,255,255,1);
		font-size: 26.71rpx;
		text-align: center;
		font-family: Roboto;
	}
=======
  <view>
    订单
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">

>>>>>>> 08aa5d0280af08f8b12c190751a69d5aafb46b9a
</style>
