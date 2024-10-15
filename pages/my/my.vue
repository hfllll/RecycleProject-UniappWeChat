<template>
  <view class="profile">
    <!-- 顶部用户信息 -->
    <view class="user-info">
		<view class="user-info-content">
			<image src="@/static/avatar.png" mode=""></image>
			<view class="left">
				<text class="user-name">wukuwuli</text>
				<br />
				<text class="user-greeting">尊敬的用户您好</text>	
			</view>			 
		</view>
    </view>

    <!-- 我的订单 -->
    <view class="my-orders">
      <text class="orders-title">我的订单</text>
      <text class="view-orders">查看订单 &gt;</text>
      <view class="orders-summary">
		  
        <view class="order-item">
          <uni-icons type="bars" size="28px" color="rgba(46,192,118,1)"></uni-icons>
        </view>
		<uv-line direction="col" length="32px" hairline="false"
		 color="#BBBBBB 100%"></uv-line>
		<view class="order-item">
          <text>0个待接单</text>
        </view>
		<uv-line direction="col" length="32px" hairline="false"
		 color="#BBBBBB 100%"></uv-line>
        <view class="order-item">
          <text>0个进行中</text>
        </view>
		<uv-line direction="col" length="32px" hairline="false"
		 color="#BBBBBB 100%"></uv-line>
        <view class="order-item">
          <text>0个待评价</text>
        </view>
		<uv-line direction="col" length="32px" hairline="false"
		 color="#BBBBBB 100%"></uv-line>
      </view>
    </view>

    <!-- 功能服务 -->
    <view class="services">
      <text class="services-title">功能服务</text>
      <view class="services-grid">
        <view class="service-item">
		  <uni-icons type="location" size="24px"></uni-icons>
          <view>我的地址</view>
        </view>
        <view class="service-item">
			<uni-icons type="headphones" size="24px"></uni-icons>
          <view>联系客服</view>
        </view>
        <view class="service-item">
			<uni-icons type="wallet-filled" size="24px"></uni-icons>
          <view>收款方式</view>
        </view>
        <view class="service-item">
			<uni-icons type="chat-filled" size="24px"></uni-icons>
          <view>常见问题</view>
        </view>
      </view>
    </view>

    <!-- 联系我们 -->
    <view class="contact-us">
      <text class="contact-title">联系我们</text>
      <view class="contact-grid">
        <view class="contact-item">
			<uni-icons type="staff" size="24px"></uni-icons>
          <view>招聘回收员</view>
        </view>
        <view class="contact-item">
			<uni-icons type="staff-filled" size="24px"></uni-icons>
          <view>我是回收员</view>
        </view>
        <view class="contact-item">
			<uni-icons type="phone-filled" size="24px"></uni-icons>
          <view>商务合作</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 16px;
  background-color: #f7f7f7;

  .user-info {
    background-color: #fff;
	background-image: url('@/static/user-banner.png');
    padding: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
	height: 97px;
    .user-info-content {
	  display: flex;
	  align-items: center;
		image{
			width: 48px;
			height: 48px;
			margin-right: 8px;
		}
      .user-name {
        font-size: 18px;
        font-weight: bold;
      }

      .user-greeting {
        font-size: 14px;
        color: #888;
      }
    }
  }

  .my-orders {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;

    .orders-title {
      font-size: 16px;
      font-weight: bold;
    }

    .view-orders {
      font-size: 13px;
      float: right;
    }

    .orders-summary {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;

      .order-item {
        flex: 1;
		// padding: 0px 4px;
		display: flex;
		justify-content: center;
		align-items: center;
        font-size: 14px;
        color: #333;
      }
    }
  }

  .services {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;

    .services-title {
      font-size: 16px;
      font-weight: bold;
    }

    .services-grid {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;

      .service-item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #333;
        padding: 10px 0;
		view{
			margin-top: 8px;
		}
      }
    }
  }

  .contact-us {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;

    .contact-title {
      font-size: 16px;
      font-weight: bold;
    }

    .contact-grid {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;

      .contact-item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #333;
        padding: 10px 0;
		view{
			margin-top: 8px;
		}
      }
    }
  }
}
</style>
