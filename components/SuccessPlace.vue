<template>
	<view class="container">
	  <!-- 成功图标 -->
	  <view class="icon-container">
	    <uni-icons type="checkbox-filled" size="81px" color="#2EC076"></uni-icons>
	    <text class="status-text">下单成功，等待回收</text>
	  </view>
	
	  <!-- 信息部分 -->
	  <view class="info-section">
	    <view class="info-item">
	      <van-icon name="clock-o" color="24px" />
	      <text class="info-text">2024-07-29  11:00~13:00</text>
	    </view>
	
	    <view class="info-item">
	      <van-icon name="phone-circle-o" color="24px"/>
	      <text class="info-text">陈xx 15777777777</text>
	    </view>
	
	    <view class="info-item">
	      <uni-icons type="location" color="24px"></uni-icons>
	      <text class="info-text">xx街道xxxxx78号xxxx</text>
	    </view>
	  </view>
	
	  <!-- 底部按钮 -->
	  <view class="button-container">
	    <button class="btn continue-btn" >继续下单</button>
	    <button class="btn view-order-btn">查看订单</button>
	    <button class="btn home-btn">返回首页</button>
	  </view>
	</view>

</template>

<script>
</script>

<style scoped>
	.container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: flex-end;
	  width: 100%;
	  height: 99%;
	  padding-bottom: 20px;
	  background-color: #ffffff;
	  border-radius: 15px;
	  border: 1px solid rgba(187,187,187,1);
	}
	
	.icon-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  margin-bottom: 20px;
	}
	
	.success-icon {
	  width: 60px;
	  height: 60px;
	}
	
	.status-text {
	  font-size: 14px;
	  color: #333333;
	}
	
	.info-section {
	  width: 100%;
	  padding: 10px 30px;
	}
	
	.info-item {
	  display: flex;
	  align-items: center;
	  margin-bottom: 10px;
	}
	
/* 	.info-icon {
	  margin-right: 10px;
	} */
	
	.info-text {
	  margin-left: 10px;
	  font-size: 14px;
	  color: #666666;
	}
	
	.button-container {
	  display: flex;
	  justify-content: space-between;
	  width: 100%;
	  padding: 10px 20px;
	}
	
	.btn {
	  flex: 1;
	  margin: 0 10px;
	  font-size: 14px;
	  line-height: 32px;
	  color: #ffffff;
	  background-color: #00b16a;
	  border-radius: 5px;
	  text-align: center;
	  width: 85px;
	  height: 32px;
	}

</style>