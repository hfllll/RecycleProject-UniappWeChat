<template>
  <view class="address-item">
	<view class="isdefault">
		默认地址
	</view>
	<view class="datail">
		<text class="detail">奥克斯广场</text>
		<text class="name">陈晨晨</text>
		<text class="phone">18959878842</text>	
	</view>
	<!-- 写道一半 -->
    
  </view>
</template>

<script setup>
</script>

<style scoped>
.address-item {
  /* padding: 10px; */
  border-bottom: 1px solid #ccc;
}
.isdefault{
	margin: 27px 0px 0px 21px;
	line-height: 20px;
	color: rgba(255,0,0,1);
	font-size: 14px;
	text-align: left;
	font-family: PingFangSC-regular;
}
.name {
 line-height: 20px;
 color: rgba(0,0,0,0.96);
 font-size: 14px;
 text-align: left;
 font-family: PingFangSC-regular;
}
.phone {
  line-height: 20px;
  color: rgba(0,0,0,0.96);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.detail {
  margin: 18px 0px 0px 7px;
  line-height: 25px;
  color: rgba(0,0,0,0.96);
  font-size: 18px;
  text-align: left;
  font-family: PingFangSC-bold;
}
</style>
