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
      <button class="btn primary-btn" @click="reorder">重新下单</button>
      <button class="btn secondary-btn" @click="goHome">返回首页</button>
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
  padding: 20px;
  background-color: #f5f5f5;
}

.navbar {
  background-color: #00c800;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.success-icon {
  margin-top: 30px;
}

.icon {
  width: 80px;
  height: 80px;
}

.success-text {
  text-align: center;
  margin-top: 20px;
}

.title {
  font-size: 22px;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.buttons {
  width: 100%;
  padding: 20px;
  margin-top: 30px;
}

.btn {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
}

.primary-btn {
  background-color: #00c800;
  color: white;
}

.secondary-btn {
  background-color: white;
  border: 1px solid #ccc;
  color: #333;
}
</style>