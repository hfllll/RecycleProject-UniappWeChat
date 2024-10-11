<template>
	<view class="account">
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
</template>

<script setup>
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
	/* small 尺寸 */
	
</style>