<template>
	<!-- 搜索框 -->
	<view class="search">
		<input type="text" placeholder="点击黏贴地址,  帮您自动填充"  />
		<text>粘贴</text>
	</view>
	
	<!-- 详细信息 -->
	<view class="detail">
		<view class="item">
			<view class="text">
				<text>地址<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="请输入地址" value="奥克斯广场" />
			<uni-icons type="right"></uni-icons>
		</view>
		<view class="item">
			<view class="text">
				<text>门牌号<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入详细地址与门牌号" />
		</view>
		<view class="item">
			<view class="text">
				<text>楼层<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入详细楼层" />
		</view>
		<view class="item">
			<view class="text">
				<text>联系人<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入联系人姓名" />
		</view>
		<view class="item">
			<view class="text">
				<text>电话<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入联系电话" />
		</view>
		<ConfirmButton :value="value"></ConfirmButton>
	</view>
</template>

<script setup>
	import ConfirmButton from '@/components/confirmButton.vue';
	const value = '保存并使用'
</script>

<style lang="scss" scoped> 
	.search{
		width: 393px;
		height: 44px;
		line-height: 20px;
		background-color: rgba(239,239,245,1);
		color: rgba(16,16,16,1);
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0px 10.48px 0px 13px;
		input{
			width: 328.02px;
			height: 28px;
			line-height: 20px;
			background-color: rgba(255,255,255,1);
		}
		text{
			width: 33.54px;
			height: 24px;
			line-height: 24px;
			color: rgba(52,204,95,1);
			font-size: 16px;
		}
	}
	.detail{
		width: 100%;
		height: 342px;
		border-radius: 10px 10px 10px 10px;
		background-color: rgba(255,255,255,1);
		font-size: 14px;
		border: 1px solid rgba(134,134,134,1);
		.item{
			height: 59px;
			display: flex;
			align-items: center;
			padding-left: 19px;
			input{
				margin-left: 11px;
				width: 268px;
				height: 20px;
				line-height: 20px;
				color: rgba(0,0,0,0.96);
				font-size: 14px;
				font-family: PingFangSC-bold;
			}
			.text{
				width: 50px;
				.red{
					color: red;
				}
			}
		}
	}
</style>