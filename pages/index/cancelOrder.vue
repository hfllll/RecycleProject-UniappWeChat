<template>
  <view class="container">
    <!-- 成功图标 -->
    <view class="success-icon">
      <image src="/static/images/true.png" class="icon"></image> <!-- 这里替换成实际的图标链接 -->
    </view>

    <!-- 取消成功提示 -->
    <view class="success-text">
      <text class="title">取消成功</text>
      <text class="subtitle">
        感谢您的下单，期待下次有您为您做的更新，祝您生活愉快。
      </text>
    </view>

    <!-- 操作按钮 -->
    <view class="buttons">
      <navigator url="/pages/order/order" class="btn primary-btn" @click="reorder">重新下单</navigator>
      <navigator url="/pages/home/home" class="btn secondary-btn" @click="goHome">返回首页</navigator>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    // 点击重新下单按钮的处理
    reorder() {
      wx.showToast({
        title: '重新下单功能触发',
        icon: 'none'
      });
      wx.switchTab({
        url:'/pages/order/order',
      })
    },
    // 点击返回首页按钮的处理
    goHome() {
      wx.switchTab({
        url: '/pages/home/home', // 这里替换成实际首页的路径
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40rpx;
  background-color: #f5f5f5;
}
.success-icon {
  margin-top: 60rpx;
}

.icon {
  width: 160rpx;
  height: 160rpx;
}

.success-text {
  text-align: center;
  margin-top: 40rpx;
}

.title {
  font-size: 34rpx;
  color: #333;
  display: flex;
  justify-content: center;
  margin-bottom: 20rpx;
}

.subtitle {
  font-size: 28rpx;
  color:#a8a8a8;
  line-height: 1.5;
}

.buttons {
  width: 100%;
  padding: 10rpx;
  margin-top: 60rpx;
  justify-content: center;
}

.btn {
  width: 100%;
  height: 65rpx;
  line-height: 65rpx;
  text-align: center;
  border-radius: 20rpx;
  font-size: 30rpx;
  margin-bottom: 20rpx;
}

.primary-btn {
  background-color: #35ad1a;
  color: white;
  margin-bottom: 20rpx;
}

.secondary-btn {
  background-color: white;
  border: 1px solid #ccc;
  color: #333;
}
</style>s