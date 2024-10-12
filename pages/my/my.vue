<template>
	<view class="template-container">
		<!-- 用户中心 -->
		<view class="user-banner">
			<img src="@/static/avatar.png" alt="" />
			<p class="p1">username</p>
			<p class="p2">尊敬的客户你好</p>
		</view>
		
		<!-- 我的订单 -->
		<view class="my-order">
				<p class="p1">我的订单</p>
				<p class="p2" @click="gotoOrder">查看订单</p>
				<view class="icon1" @click="gotoOrder"></view>
				<view class="icon2"></view>
				<view class="border1"></view>
				<p class="p3">0个待接单</p>
				<view class="border2"></view>
				<p class="p4">0个进行中</p>
				<view class="border3"></view>
				<p class="p5">0个待评价</p>
				<view class="border4"></view>
		</view>
		
		<!-- 功能服务 -->
		<view class="serve-func func">
			<h5 class="func-h5">功能服务</h5>
			<ul>
				<li @click="gotoAddress">
					<view class="icon func-icon"></view>
					<p class="func-p">我的地址</p>
				</li>
				<li @click="callPhone('18959878842')">
					<view class="icon func-icon"></view>
					<p class="func-p">联系客服</p>
				</li>
				<li>
					<view class="icon func-icon"></view>
					<p class="func-p">收款方式</p>
				</li>
				<li>
					<view class="icon func-icon"></view>
					<p class="func-p">常见问题</p>
				</li>
			</ul>
		</view>
		
		<!-- 联系我们 -->
		<view class="contact-func func">
			<h5 class="func-h5">联系我们</h5>
			<ul>
				<li @click="callPhone('18959878842')">
					<view class="icon func-icon"></view>
					<p class="func-p" @click="callPhone('18959878842')">招聘回收员</p>
				</li>
				<li @click="gotoUniapp">
					<view class="icon func-icon"></view>
					<p class="func-p">我是回收员</p>
				</li>
				<li @click="callPhone('18959878842')">
					<view class="icon func-icon"></view>
					<p class="func-p">商务合作</p>
				</li>
			</ul>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
		const href = 'https://uniapp.dcloud.io/component/README?id=uniui'
		const appId = ''
		const gotoAddress = () => {
			uni.navigateTo({
				url: '/pages/my/myAddress'  // 请确认路径正确
			}).catch(err => {
				console.error('导航错误:', err);
			});
		}
		const callPhone = (phoneNumber) =>{
			uni.makePhoneCall({
				phoneNumber,
				success() {
					console.log('拨号成功')
				},
				fail(err){
					console.error('拨号失败', err)
				}
			})
		}
		const gotoUniapp = ()=>{
			wx.navigateToMiniProgram({
				appId,
				envVersion: 'develop',
				success(){
					console.log('跳转到回收上门成功');
				},
				fail(err){
					console.log('跳转到回收上门失败');
				}
			})
		}
		const gotoOrder = () =>{
			uni.navigateTo({
				url: '/pages/order/order'
			})
		}
</script>

<style>
	/* 公共样式或者大样式 */
	.template-container{
		/* position: relative; */
		/* top: 0; */
		/* left:0; */
		background-color: red;
		width:100%;
		height: 100%;
	}
	li{
		list-style: none;
	}
	.func-p{
		width: 112rpx;
		height: 40rpx;
		line-height: 40rpx;
		color: rgba(0,0,0,1);
		font-size: 28rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.func-icon{
		width: 48rpx;
		height: 48rpx;
	}
	.func{
		width: 754rpx;
		height: 266rpx;
		border-radius: 30rpx;
		background-color: rgba(255,255,255,1);
		border: 2rpx solid rgba(187,187,187,1);
	}
	.func-h5{
		width: 128rpx;
		height: 46rpx;
		line-height: 46rpx;
		color: rgba(0,0,0,1);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-bold;
	}
	
	.top-status{
		position: absolute;
		left: -0.26rpx;
		top: 0rpx;
		width: 786rpx;
		height: 48rpx;
		line-height: 48rpx;
		background-color: rgba(46,192,118,1);
		color: rgba(16,16,16,1);
		font-size: 24rpx;
		text-align: center;
		font-family: Roboto;
		border: 0rpx solid rgba(232,232,232,1);
		
		display: flex;
		justify-content: space-between;
	}
	.top-banner{
		position: absolute;
		left: -0.26rpx;
		top: 48rpx;
		width: 786rpx;
		height: 88rpx;
		line-height: 88rpx;
		background-color: rgba(46,192,118,1);
		color: rgba(255,255,255,1);
		font-size: 32rpx;
		text-align: center;
		font-family: Roboto;
		border: 0rpx solid rgba(232,232,232,1);
	}
	
	.user-banner {
		position: absolute;
		left: 0rpx;
		top: 0rpx;
		width: 786rpx;
		height: 194rpx;
		background-color: rgba(255,255,255,1);
		background-image: url('@/static/user-banner.png');
		display: flex;
	}
	.user-banner img{
		position: absolute;
		left: 24rpx;
		top: 48rpx;
		width: 96rpx;
		height: 96rpx;
		border-radius: 184rpx;
		background-color: rgba(157,157,157,1);
	}
	.user-banner .p1{
		position: absolute;
		left: 136rpx;
		top: 48rpx;
		width: 136rpx;
		height: 46rpx;
		line-height: 46rpx;
		color: rgba(0,0,0,1);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.user-banner .p2{
		position: absolute;
		left: 136rpx;
		top: 98rpx;
		width: 224rpx;
		height: 46rpx;
		line-height: 46rpx;
		color: rgba(0,0,0,1);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	
	.my-order .p1{
		position: absolute;
		left: 20rpx;
		top: 226rpx;
		width: 128rpx;
		height: 46rpx;
		line-height: 46rpx;
		color: rgba(0,0,0,1);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-bold;
	}
	.my-order .p2{
		position: absolute;
		left: 574rpx;
		top: 220rpx;
		width: 104rpx;
		height: 38rpx;
		line-height: 38rpx;
		color: rgba(0,0,0,1);
		font-size: 26rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .p3{
		position: absolute;
		left: 132rpx;
		top: 304rpx;
		width: 148rpx;
		height: 46rpx;
		line-height: 46rpx;
		color: rgba(0,0,0,1);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .p4{
		position: absolute;
		left: 332rpx;
		top: 304rpx;
		width: 148rpx;
		height: 46rpx;
		line-height: 46rpx;
		color: rgba(0,0,0,1);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .p5{
		position: absolute;
		left: 542rpx;
		top: 304rpx;
		width: 148rpx;
		height: 46rpx;
		line-height: 46rpx;
		color: rgba(0,0,0,1);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .icon1{
		position: absolute;
		left: 686rpx;
		top: 218rpx;
		width: 34rpx;
		height: 34rpx;
		/* background-color: rgba(16,16,16,1); */
		background-image: url('../../static/ze-arrow1@1x.png');
	} 
	.my-order .icon2{
		position: absolute;
		left: 38rpx;
		top: 304rpx;
		width: 56rpx;
		height: 56rpx;
		/* background-color: rgba(46,192,118,1); */
		background-image: url('../../static/iconPark-align-text-right-one 1@1x.png');
	}
	.my-order .border1{
		position: absolute;
		left: 110rpx;
		top: 292rpx;
		width: 2rpx;
		height: 64rpx;
		background-color: rgba(255,255,255,1);
		border-left: 2rpx solid rgba(187,187,187,1);
	}
	.my-order .border2{
		position: absolute;
		left: 298rpx;
		top: 292rpx;
		width: 2rpx;
		height: 64rpx;
		background-color: rgba(255,255,255,1);
		border-left: 2rpx solid rgba(187,187,187,1);
	}
	.my-order .border3{
		position: absolute;
		left: 502rpx;
		top: 292rpx;
		width: 2rpx;
		height: 64rpx;
		background-color: rgba(255,255,255,1);
		border-left: 2rpx solid rgba(187,187,187,1);
	}
	.my-order .border4{
		position: absolute;
		left: 706rpx;
		top: 292rpx;
		width: 2rpx;
		height: 64rpx;
		background-color: rgba(255,255,255,1);
		border-left: 2rpx solid rgba(187,187,187,1);
	}
	
	.serve-func{
		position: absolute;
		left: 16rpx;
		top: 394rpx;
		
	}
	.serve-func h5{
		position: absolute;
		left: 14rpx;
		top: 20rpx;
	}
	.serve-func .icon {
		position: absolute;
		top: 84rpx;
		left: 92rpx;
		background-image: url('../../static/arcoDesign-location 1@1x.png');
	}
	.serve-func li:nth-child(2) .icon {
		left: 256rpx;
		background-image: url('../../static/riFill-customer-service-fill 1@1x.png');
	}
	.serve-func li:nth-child(3) .icon {
		left: 412rpx;
		background-image: url('../../static/ze-after-sale 1@1x.png');
	}
	.serve-func li:nth-child(4) .icon {
		left: 590rpx;
		background-image: url('../../static/ze-label-o 1@1x.png');
	}
	.serve-func p{
		position: absolute;
		top: 150rpx;
		left: 60rpx;
	}
	.serve-func li:nth-child(2) p{
		left: 220rpx;
	}
	.serve-func li:nth-child(3) p{
		left: 380rpx;
	}
	.serve-func li:nth-child(4) p{
		left: 556rpx;
	}
	
	.contact-func{
		position: absolute;
		left: 24rpx;
		top: 692rpx;
	}
	.contact-func h5{
		position: absolute;
		left: 8rpx;
		top: 24rpx;
	}
	.contact-func .icon {
		position: absolute;
		top: 92rpx;
		left: 88rpx;
		background-image: url('../../static/ze-manager-o 1@1x.png');
	}
	.contact-func li:nth-child(2) .icon {
		left: 274rpx;
		background-image: url('../../static/ze-user-o 1@1x.png');
	}
	.contact-func li:nth-child(3) .icon {
		left: 456rpx;
		background-image: url('../../static/ze-phone-circle-o 1@1x.png');
	}
	.contact-func p{
		position: absolute;
		top: 162rpx;
		left: 48rpx;
		width: 140rpx;
	}
	.contact-func li:nth-child(2) p{
		left: 232rpx;
	}
	.contact-func li:nth-child(3) p{
		left: 428rpx;
		/* width: {1*2}px; */
	}

</style>

