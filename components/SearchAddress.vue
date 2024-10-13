<template>
	<view class="box">
		<!-- 下拉按钮 -->
		<view class="drop-down" @click="$emit('close')">
			<uni-icons type="down" size="21"></uni-icons>
		</view>
		<!-- 搜索框组件 -->
		<view class="search">
			<uni-icons type="search" size="21" color="#868686"></uni-icons>
			<input type="text" placeholder="搜索地点" />
		</view>
		<!-- 地点组件 -->
		<view class="address-list">
			<view class="address-item">
				<view class="left">
					<text class="top">
						奥克斯广场
					</text>
					<br />
					<text class="bottom">
						100m | xx省xx市xxxxxxxxxx
					</text>
				</view>
				
				<uni-icons v-if="true" type="checkmarkempty" color="#2EC076" size="30" ></uni-icons>
			</view>
		</view>
		<view class="address-list">
			<view class="address-item">
				<view class="left">
					<text class="top">
						奥克斯广场
					</text>
					<br />
					<text class="bottom">
						100m | xx省xx市xxxxxxxxxx
					</text>
				</view>
				
				<uni-icons v-if="false" type="checkmarkempty" color="#2EC076" size="30" ></uni-icons>
			</view>
		</view>
		<view class="address-list">
			<view class="address-item">
				<view class="left">
					<text class="top">
						奥克斯广场
					</text>
					<br />
					<text class="bottom">
						100m | xx省xx市xxxxxxxxxx
					</text>
				</view>
				
				<uni-icons v-if="true" type="checkmarkempty" color="#2EC076" size="30" ></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 557px;
		border: 1px solid rgba(187,187,187,1);
		
		.drop-down{
			margin: 0px auto;
			margin-top: 5px;
			width: 46px;
			height: 24px;
			border-radius: 25px 25px 25px 25px;
			background-color: rgba(187,187,187,1);
			border: 1px solid rgba(187,187,187,1);
			text-align: center;
		}
		
		.search{
			margin: 0 auto;
			margin-top: 11px;
			margin-bottom: 5px;
			padding-left: 110px;
			width: 343px;
			height: 36px;
			border-radius: 10px 10px 10px 10px;
			background-color: rgba(187,187,187,0.72);
			border: 1px solid rgba(187,187,187,1);
			display: flex;
			align-items: center;
			input{
				margin-left: 10px;
			}
		}
		
		.address-list{
			.address-item{
				border-bottom: 1px solid #BBBBBB;
				height: 66px;
				width: 362px;
				margin: 0 auto;
				padding: 0px 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.top{
					line-height: 28px;
				}
				.bottom{
					color: #868686;
					font-size: 14px;
					font-family: PingFangSC-regular;
					line-height: 33px;
				}
			}
		}
	}
</style>