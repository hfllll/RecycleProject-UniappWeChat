<template>
	<view class="box">
		<!-- 标题 -->
		<view class="text"> 
			<text>添加备注</text> 
			<uni-icons
			 type="closeempty"
			 size="24"
			 @click="$emit('close')"
			 ></uni-icons>
		</view> 
		
		<!-- textarea -->
		<uv-textarea v-model="value1" 
		placeholder="请输入物品描述或其他要求，请勿填写敏感信息"
		count
		></uv-textarea>
		
		<!-- 确认按钮 -->
		<button type="primary" @click="$emit('close')">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		padding: 14px 20px 0px 20px;
		width: 100%;
		height: 332px;
		border-radius: 15px 15px 0px 0px;
		background-color: rgba(255,255,255,1);
		border: 1px solid rgba(187,187,187,1);
		.text{
			margin-bottom: 21px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		button{
			margin-top: 40px;
		}
	}
</style>