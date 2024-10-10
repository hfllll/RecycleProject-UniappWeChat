<template>
	<!-- <view class="template-container"> -->
		<!-- 顶部手机状态栏 -->
		<view class="top-status">
			<view class="">
				信号
				wifi
			</view>
			<p>我是状态栏</p>
			<view class="res-ele">
				我是剩余电流
			</view>
		</view>
		
		<!-- 顶部页面栏 -->
		<view class="top-banner">
			<p>我是页面栏</p>
		</view>
		
		<!-- 用户中心 -->
		<view class="user-banner">
			<img src="@/static/avatar.png" alt="" />
			<p class="p1">username</p>
			<p class="p2">尊敬的客户你好</p>
		</view>
		
		<!-- 我的订单 -->
		<view class="my-order">
				<p class="p1">我的订单</p>
				<p class="p2">查看订单</p>
				<view class="icon1"></view>
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
				<li>
					<view class="icon func-icon"></view>
					<p class="func-p">我的地址</p>
				</li>
				<li>
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
				<li>
					<view class="icon func-icon"></view>
					<p class="func-p">招聘回收员</p>
				</li>
				<li>
					<view class="icon func-icon"></view>
					<p class="func-p">我是回收员</p>
				</li>
				<li>
					<view class="icon func-icon"></view>
					<p class="func-p">商务合作</p>
				</li>
			</ul>
		</view>
	<!-- </view> -->
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
		
		}
	}
</script>

<style>
	/* 公共样式或者大样式 */
	.template-container{
		
		/* position: absolute; */
		/* top: 0; */
		/* left:0; */
		width: 100%;
		height: 100%;
	}
	li{
		list-style: none;
	}
	.func-p{
		width: 56px;
		height: 20px;
		line-height: 20px;
		color: rgba(0,0,0,1);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.func-icon{
		width: 24px;
		height: 24px;
	}
	.func{
		width: 377px;
		height: 133px;
		border-radius: 15px;
		background-color: rgba(255,255,255,1);
		border: 1px solid rgba(187,187,187,1);
	}
	.func-h5{
		width: 64px;
		height: 23px;
		line-height: 23px;
		color: rgba(0,0,0,1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-bold;
	}
	
	.top-status{
		position: absolute;
		left: -0.13px;
		top: 0px;
		width: 393px;
		height: 24px;
		line-height: 24px;
		background-color: rgba(46,192,118,1);
		color: rgba(16,16,16,1);
		font-size: 12px;
		text-align: center;
		font-family: Roboto;
		border: 0px solid rgba(232,232,232,1);
		
		display: flex;
		justify-content: space-between;
	}
	.top-banner{
		position: absolute;
		left: -0.13px;
		top: 24px;
		width: 393px;
		height: 44px;
		line-height: 44px;
		background-color: rgba(46,192,118,1);
		color: rgba(255,255,255,1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
		border: 0px solid rgba(232,232,232,1);
	}
	
	.user-banner {
		position: absolute;
		left: 0px;
		top: 64px;
		width: 393px;
		height: 97px;
		background-color: rgba(255,255,255,1);
		background-image: url('@/static/user-banner.png');
		display: flex;
	}
	.user-banner img{
		position: absolute;
		left: 12px;
		top: 24px;
		width: 48px;
		height: 48px;
		border-radius: 92px;
		background-color: rgba(157,157,157,1);
	}
	.user-banner .p1{
		position: absolute;
		left: 68px;
		top: 24px;
		width: 68px;
		height: 23px;
		line-height: 23px;
		color: rgba(0,0,0,1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.user-banner .p2{
		position: absolute;
		left: 68px;
		top: 49px;
		width: 112px;
		height: 23px;
		line-height: 23px;
		color: rgba(0,0,0,1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	
	.my-order .p1{
		position: absolute;
		left: 10px;
		top: 177px;
		width: 64px;
		height: 23px;
		line-height: 23px;
		color: rgba(0,0,0,1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-bold;
	}
	.my-order .p2{
		position: absolute;
		left: 287px;
		top: 174px;
		width: 52px;
		height: 19px;
		line-height: 19px;
		color: rgba(0,0,0,1);
		font-size: 13px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .p3{
		position: absolute;
		left: 66px;
		top: 216px;
		width: 74px;
		height: 23px;
		line-height: 23px;
		color: rgba(0,0,0,1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .p4{
		position: absolute;
		left: 166px;
		top: 216px;
		width: 74px;
		height: 23px;
		line-height: 23px;
		color: rgba(0,0,0,1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .p5{
		position: absolute;
		left: 271px;
		top: 216px;
		width: 74px;
		height: 23px;
		line-height: 23px;
		color: rgba(0,0,0,1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.my-order .icon1{
		position: absolute;
		left: 343px;
		top: 173px;
		width: 17px;
		height: 17px;
		/* background-color: rgba(16,16,16,1); */
		background-image: url('../../static/ze-arrow1@1x.png');
	} 
	.my-order .icon2{
		position: absolute;
		left: 19px;
		top: 216px;
		width: 28px;
		height: 28px;
		/* background-color: rgba(46,192,118,1); */
		background-image: url('../../static/iconPark-align-text-right-one 1@1x.png');
	}
	.my-order .border1{
		position: absolute;
		left: 55px;
		top: 210px;
		width: 1px;
		height: 32px;
		background-color: rgba(255,255,255,1);
		border-left: 1px solid rgba(187,187,187,1);
	}
	.my-order .border2{
		position: absolute;
		left: 149px;
		top: 210px;
		width: 1px;
		height: 32px;
		background-color: rgba(255,255,255,1);
		border-left: 1px solid rgba(187,187,187,1);
	}
	.my-order .border3{
		position: absolute;
		left: 251px;
		top: 210px;
		width: 1px;
		height: 32px;
		background-color: rgba(255,255,255,1);
		border-left: 1px solid rgba(187,187,187,1);
	}
	.my-order .border4{
		position: absolute;
		left: 353px;
		top: 210px;
		width: 1px;
		height: 32px;
		background-color: rgba(255,255,255,1);
		border-left: 1px solid rgba(187,187,187,1);
	}
	
	.serve-func{
		position: absolute;
		left: 8px;
		top: 261px;
		
	}
	.serve-func h5{
		position: absolute;
		left: 7px;
		top: 10px;
	}
	.serve-func .icon {
		position: absolute;
		top: 42px;
		left: 46px;
		background-image: url('../../static/arcoDesign-location 1@1x.png');
	}
	.serve-func li:nth-child(2) .icon {
		left: 128px;
		background-image: url('../../static/riFill-customer-service-fill 1@1x.png');
	}
	.serve-func li:nth-child(3) .icon {
		left: 206px;
		background-image: url('../../static/ze-after-sale 1@1x.png');
	}
	.serve-func li:nth-child(4) .icon {
		left: 295px;
		background-image: url('../../static/ze-label-o 1@1x.png');
	}
	.serve-func p{
		position: absolute;
		top: 75px;
		left: 30px;
	}
	.serve-func li:nth-child(2) p{
		left: 110px;
	}
	.serve-func li:nth-child(3) p{
		left: 190px;
	}
	.serve-func li:nth-child(4) p{
		left: 278px;
	}
	
	.contact-func{
		position: absolute;
		left: 12px;
		top: 410px;
	}
	.contact-func h5{
		position: absolute;
		left: 4px;
		top: 12px;
	}
	.contact-func .icon {
		position: absolute;
		top: 46px;
		left: 44px;
		background-image: url('../../static/ze-manager-o 1@1x.png');
	}
	.contact-func li:nth-child(2) .icon {
		left: 137px;
		background-image: url('../../static/ze-user-o 1@1x.png');
	}
	.contact-func li:nth-child(3) .icon {
		left: 228px;
		background-image: url('../../static/ze-phone-circle-o 1@1x.png');
	}
	.contact-func p{
		position: absolute;
		top: 81px;
		left: 24px;
		width: 70px;
	}
	.contact-func li:nth-child(2) p{
		left: 116px;
	}
	.contact-func li:nth-child(3) p{
		left: 214px;
		/* width: 56px; */
	}

</style>
