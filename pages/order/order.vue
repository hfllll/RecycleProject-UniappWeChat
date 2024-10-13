<template>
	<view class="common">
	<!-- 地图 -->
	<!-- <map class="map" :latitude="latitude" :longitude="longitude" :scale="14"></map> -->
	
	<!-- 信息入口 -->
	<view class="">
		<view class="address" @click="openPopup">
			<view class="left">
				<uni-icons type="location-filled" size="30" color="rgba(28,140,242,1)"  ></uni-icons>
				<text class="location">奥斯可广场</text>	
			</view>
			<uni-icons type="right" size="24" ></uni-icons>		
		</view>
		
		<view class="address">
			<view class="left">
				<uni-icons type="home" color="rgba(28,140,242,1)"  size="30" ></uni-icons>
				<text class="location">填写上门信息</text>	
			</view>
			<uni-icons type="right" size="24" ></uni-icons>		
		</view>
		
		<view class="address">
			<view class="left">
				<uni-icons type="close" size="30" color="rgba(28,140,242,1)"  ></uni-icons>
				<text class="location">立即上门</text>
				<uni-icons type="right" size="24" class="icon1"></uni-icons>		
			</view>
			<view class="right">
				<uni-icons type="shop-filled" size="30" color="rgba(28,140,242,1)" class="icon1"></uni-icons>		
				<text>请选择物品信息</text>
				<uni-icons type="right" size="24"></uni-icons>	
			</view>
					
		</view>
		
	</view>
	
	<!-- 支付入口 -->
	<view class="">
		<!-- 收款方式 -->
		<view class="pay-way">
			<view class="left">
				<text>收款方式</text>
			</view>
			<view class="right">
				<uni-icons type="weixin" size="24" color="rgba(46,192,118,1)" class="wei-pay" ></uni-icons>	
				<text>微信支付</text>
				<uni-icons type="right" size="24" ></uni-icons>	
			</view>
		</view>
		
		<!-- 号码保护 -->
		<view class="pay-way">
			<view class="left">
				<text>号码保护</text>
			</view>
			<view class="middle">
				<text>隐藏真实手机号码 保护隐私</text>	
			</view>
			<view class="right">
				<text class="self-msg">保护隐私中</text>
				<uni-icons type="checkmarkempty" size="24" ></uni-icons>	
			</view>
		</view>
		
		<!-- 添加备注 -->
		<view class="pay-way">
			<view class="left">
				<text>添加备注</text>
			</view>
			<view class="right">
				<text class="self-msg">可备注物品描述、上门要求等</text>
				<uni-icons type="right" size="24" ></uni-icons>	
			</view>
		</view>
	</view>
	</view>
	
	<!-- 用户协议和去下单 -->
	<view class="to-order-pact">
		<!-- 协议 -->
		<view class="pact">
			<uni-icons type="checkmarkempty" size="22"></uni-icons>
			<text>已阅读并同意<text class="green">《用户协议》</text></text>
		</view>
		
		<view class="to-order">
			<view class="left">
				<uni-icons type="gift-filled" size="24" color="white"></uni-icons>
				选择物品后预估价格
			</view>
			<view class="right">
				去下单
			</view>
		</view>
		<view class="to-order">
			<view class="left">
				<uni-icons type="gift-filled" size="24" color="white"></uni-icons>
				预估回收价格￥18888
			</view>
			<view class="right">
				去下单
			</view>
		</view>
		<uni-popup ref="popup" type="bottom"  
		border-radius="10px 10px 0 0">底部弹出 Popup 自定义圆角</uni-popup>
	</view>
	
	
	<view>
	    <button @click="openPopup">打开底部弹出1层</button>
	    <uni-popup ref="popup" type="bottom" background-color="#fff">
			<SearchAddress @close="handleclose" ></SearchAddress>
		</uni-popup>
	  </view>
</template>

<script>
import SearchAddress from '@/components/SearchAddress.vue';

export default {
	components:{
		SearchAddress
	},
	methods: {
		openPopup(){
           // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
           this.$refs.popup.open()
		},
		handleclose(){
			this.$refs.popup.close()
		}
	}
}
</script>

<style scoped lang="scss">
	// 地图
	.map{
		width: 100rpx;
		height: 100rpx;
	}
	
	// 信息入口
	.address{
		box-sizing: border-box;
		padding: 25.99rpx 49.61rpx 12.34rpx 41.98rpx;
		width: 100% ;
		background-color: rgba(255,255,255,1);
		color: rgba(255,255,255,1);
		font-family: Roboto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1.91rpx solid rgba(187,187,187,1);
		.left{
			display: flex;
			align-items: center;
			.location{
				margin-left: 26.71rpx;
				color: rgba(0,0,0,0.96);
				font-size: 30.53rpx;
				font-family: PingFangSC-bold;
			}
			.icon1{
				margin-left: 22rpx;
			}
		}
		.right{
			display: flex;
			align-items: center;
			text{
				color: rgba(215,46,46,1);
				font-size: 30.53rpx;
				text-align: left;
				font-family: PingFangSC-regular;
				margin-right: 17rpx;
			}
		}
	}
	.address:first-of-type {
	    border-radius: 32.44rpx 32.44rpx 0 0;
	}
	.address:nth-of-type(3) {
	    border-radius:  0 0 32.44rpx 32.44rpx;
	}
	
	// 支付入口
	.pay-way{
		box-sizing: border-box;
		width: 100%;
		height: 83.95rpx;
		background-color: rgba(255,255,255,1);
		padding: 0px 20px 0px 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.right{
			display: flex;
			align-items: center;
			.wei-pay{
				margin-right: 21rpx;
			}
			.self-msg{
				color: rgba(134,134,134,1);
				font-size: 12px;
				text-align: left;
				font-family: PingFangSC-regular;
			}
		}
		.middle{
			color: rgba(134,134,134,1);
			font-size: 12px;
			text-align: left;
			font-family: PingFangSC-regular;
		}
	}
	.pay-way:first-of-type{
		border-radius: 32.44rpx 32.44rpx 0.00rpx 0.00rpx;
		border: 1.91rpx solid rgba(187,187,187,1);
	}
	.pay-way:nth-of-type(3){
		border-radius:  0.00rpx 0.00rpx 32.44rpx 32.44rpx;
		border: 1.91rpx solid rgba(187,187,187,1);
		border-top: 0px;
	}

	// 协议
	.to-order-pact{
		padding: 18px 21px 0px 27px;
		.pact{
			display: flex;
			align-items: center;
			text{
				margin-left: 4px;
				font-size: 12px;
			}
			.green{
				color: rgba(46,192,118,1);
			}
		}
		.to-order{
			margin-top: 16px;
			display: flex;
			.left{
				padding-left: 18px;
				width: 270px;
				height: 36px;
				border-radius: 15px 0px 0px 15px;
				background-color: rgba(16,16,16,0.79);
				border: 1px solid rgba(187,187,187,1);
				
				color: rgba(255,255,255,1);
				font-size: 12px;
				
				display: flex;
				align-items: center;
			}
			.right{
				// margin-top: 1px;
				width: 76px;
				height: 37px;
				line-height: 36px;
				border-radius: 0px 15px 15px 0px;
				background-color: rgba(46,192,118,1);
				color: rgba(255,255,255,1);
				font-size: 14px;
				text-align: center;
				font-family: Roboto;
			}
		}
	}
</style>