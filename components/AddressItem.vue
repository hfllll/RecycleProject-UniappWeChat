<template>
  <view class="box">
	<text v-if="isShow" class="text">常用地址</text>
	<view class="item-list">
		<view class="item">
			<view class="isdefault">
				默认地址
			</view>
			<view class="detail">
				<text class="area">奥克斯广场</text>
				<br/>
				<text class="name">陈晨晨  </text>
				<text class="phone">18959878842</text>	
			</view>
		</view>
		<view class="item">
			<view class="isdefault">
				默认地址
			</view>
			<view class="detail">
				<text class="area">奥克斯广场</text>
				<br/>
				<text class="name">陈晨晨  </text>
				<text class="phone">18959878842</text>	
			</view>
		</view>
		<view class="item">
			<view class="isdefault">
				默认地址
			</view>
			<view class="detail">
				<text class="area">奥克斯广场</text>
				<br/>
				<text class="name">陈晨晨  </text>
				<text class="phone">18959878842</text>	
			</view>
			<van-icon name="edit" color="blue"/>
		</view>
		
	</view>
	
  </view>
</template>

<script setup>
	defineProps({
		isShow:{
			type:String
		}
	})
</script>

<style scoped lang="scss">
	.box{
		width: 393px;
		// height: 174px;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid rgba(187,187,187,1);
		padding-top: 8px;
		.text{
			margin-left: 10px;
		}
		.item-list{
			padding: 0px 20px 0px 17px;
			.item{
				display: flex;
				height: 75px;
				align-items: center;
				
				border-bottom: 1px solid rgba(187,187,187,1);
				.isdefault{
					margin-right: 10px;
					color: rgba(255,0,0,1);
					font-size: 14px;
				}
				.area{
					font-size: 18px;
					font-weight: 600;
				}
			}
			.item:last-of-type {
			    /* 选择最后一个 <div> 元素 */
			    border: 0px;
			}
		}
		

		
	}
</style>
