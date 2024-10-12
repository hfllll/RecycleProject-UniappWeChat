<template>
	<view class="account">
		<!-- vant组件引入的输入框 -->
		<van-cell-group>
		  <van-field
		    :value= "value"
		    placeholder="请输入姓名"
			label="姓名"
			clickable
			input-align="right"
			border=false
		  />
		  </van-cell-group>
		  
		  <view class="border"></view>
		  
		  <van-cell-group>
		  <van-field
		    :value= "value"
		    placeholder="请输入支付宝账号"
			label="支付宝账号"
			clickable
			input-align="right"
		  />
		</van-cell-group>
	</view>
	
	<!-- 注意事项 -->
	<view class="attention">
			<view>
				注意事项
			</view>
			<view>
				请确保提供的信息准确无误以免1到账失败
			</view>
			<view>
				因此导致的导致失败，本平台不承担责任
			</view>
	</view>
	
	<!-- 确认按钮 -->
	<confirmButton></confirmButton>

</template>

<script setup>
	import confirmButton from '@/components/confirmButton.vue';
	const value = ''
</script>

<style scoped lang="scss">
	.account{
		box-sizing: border-box;
		padding: 3px 0px;
		width: 100%;
		// height: 91px;
		line-height: 20px;
		border-radius: 10px;
		background-color: rgba(255,255,255,1);
		color: rgba(255,255,255,1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
		border: 1px solid rgba(187,187,187,1);
		.border {
			margin: 0 auto;
			width: 366px;
			height: 1px;
			// background-color: rgba(255,255,255,1);
			border-top: 1px solid rgba(187,187,187,1);
		}
	}
	
	.attention{
		margin-top: 26px;
		text-align: center;
		line-height: 20px;
		color: rgba(187,187,187,1);
		font-size: 12px;
		text-align: center;
		font-family: SourceHanSansSC-regular;
		// line-height: 15px;
	}
	
</style>