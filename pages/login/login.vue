<template>
  <view class="container">
    <image
      :src="userAvatar"
      class="avatar"
      mode="aspectFill" 
      style="width: 150rpx;height: 150rpx;"
    >
    </image>
    <text class="username">{{userName}}</text>
    <text class="jurisdiction">该小程序申请获取以下权限</text>
    <text class="info">获取您的公开权限（微信昵称、头像、手机号等）</text>
    <button class="login" @click="authorize">授权登录</button>
    
    <!-- 遮罩层 -->
     <view v-if="showPopup" class="overlay" @click="closePopup"></view>
        <!-- 弹出层 -->
        <view v-if="showPopup" class="popup">
          <view class="popup-header">
            <view class="popup-image">
              <image
                :src="userAvatar"
                class="popup-avatar"
                mode="aspectFill"
                style="width: 100rpx;height: 100rpx;"
              />
            </view>
            <view class="popup-text">
              <text class="greeting">HI,欢迎</text>
              <view class="app-request">
                <text class="app-name">{{userName}}</text>
                <text class="applyuse">申请使用</text>
              </view>
            </view>
          </view>
          <text class="nickname">获取你的昵称、头像、联系方式及地区信息</text>
          <view
            class="line1"
            style="width: 100%;height: 1rpx;background-color: #dddddd;"
            ></view>
          <view class="divider">
            <view class="divider-text">
             <view class="divider-image">
               <image
                 :src="userAvatar"
                 class="divider-avatar"
                 style="width: 100rpx;height: 100rpx;"
               />
             </view>
              <view class="divider-name">
                <text class="wx-name">{{ wxName }}</text>
                <text class="phone-number">{{ phoneNumber }}</text>
              </view>
            </view>
          </view>
           <view
            class="line2"
            style="width: 100%;height: 1rpx;background-color: #dddddd;"
          ></view>
          <view class="button-container">
            <button class="decline-button" @click="decline">拒绝</button>
            <button class="agree-button" @click="agree">同意</button>
          </view>
        </view>
  </view>

    
</template>

<script>
export default {
  data() {
    return {
      userAvatar: 'https://tupian.qqw21.com/article/UploadPic/2020-10/2020101722211881489.jpg', // 替换为动态的用户头像URL
      userName: '小程序名称' ,// 替换为动态的用户名
      showPopup: false,//控制弹出层
      wxName: '微信昵称',     // 微信名称
      phoneNumber: '15777777777', // 用户电话号码
    };
  },
  methods: {
    closePopup() {
          this.showPopup = false;
      },
    authorize() {
        // 授权逻辑
        this.showPopup = true
    },
    decline() {
    // 拒绝逻辑
    this.closePopup();
    },
    agree() {
      // 同意逻辑
      this.closePopup();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  padding-top: 28rpx; /* 距离顶部28rpx */
  height: 100vh; /* 可选，确保整个视图高度充足 */
}

.avatar {
  margin-top: 50rpx;
  margin-bottom:18rpx; /* 图片与用户名之间的间距 */
}

.username {
  font-size: 28rpx; /* 可根据需要调整字体大小 */
  text-align: center; /* 文本居中 */
  margin-bottom: 50rpx; /* 与下一行之间的间距 */
  font-weight: bold;
}

.jurisdiction {
  font-size: 28rpx; /* 可根据需要调整字体大小 */
  text-align: center; /* 文本居中 */
  margin-bottom: 8rpx; /* 与下一行之间的间距 */
  color: #525252;
}

.info {
  font-size: 28rpx; /* 可根据需要调整字体大小 */
  text-align: center; /* 文本居中 */
  margin-top: 20rpx;
  margin-bottom: 20rpx; /* 与按钮之间的间距 */
  color: rgba(134,134,134,1)
}

.login {
  width: 500rpx; /* 按钮宽度 */
  height: 70rpx; /* 按钮高度 */
  margin-top: 150rpx;
  background-color: #2ec076; /* 按钮背景颜色，可根据需要更改 */
  color: white; /* 按钮文本颜色 */
  border: none; /* 无边框 */
  border-radius: 35rpx; /* 圆角按钮 */
  text-align: center; /* 文本居中 */
  line-height: 70rpx; /* 使文本垂直居中 */
  font-size: 28rpx; /* 可根据需要调整字体大小 */
}

// 弹出层
.container {
  padding: 20rpx;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.popup {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45%;
  background: #fff;
  border-top-left-radius: 45rpx;
  border-top-right-radius: 45rpx;
  padding: 30rpx;
  z-index: 1001;
}

.popup-header {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}

.popup-avatar {
  width: 50rpx;
  height: 50rpx;
  margin-right: 10rpx;
}

.popup-text {
  flex: 1;
}

.greeting {
  font-size: 28rpx;
  font-weight: bold;
  display: flex;
}

.app-request {
  margin-top: 10rpx;
  font-size: 26rpx;
  float: left;
}
.app-name {
  font-weight: bold;
  margin-right: 10rpx;
}
.applyuse {
  font-size: 26rpx;

}

.nickname {
  font-weight: bold;
  margin-top: 30rpx;
  font-size: 26rpx;
  margin-bottom: 20rpx
}
.line1 {
  margin-top: 20rpx;
}
.line2 {
  margin-bottom:60rpx;
}
.divider {
  display: flex;
  align-items: center;
  margin: 20rpx 0;
}


.divider-name {
  flex: 1;
}
.divider-text {
  display: flex;
  align-items: center;
  margin: 0 10rpx;
}

.divider-avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  margin-right: 10rpx;
}

.wx-name {
  font-weight: bold;
 font-size: 26rpx;
 display: flex;
}
.phone-number {
  font-size: 26rpx;
}

.button-container {
  margin-top: 20rpx;
}

.decline-button,
.agree-button {
  width: 180rpx;
  height: 60rpx;
  border: none;
  border-radius: 8rpx;
  display: flex;
  justify-content: center;
}

.decline-button {
  align-items: center;
  font-size: 30rpx;
  background: #a8bfd5;
  color: white;
  float: left;
  margin-left: 155rpx;
}

.agree-button {
  align-items: center;
  font-size: 30rpx;
  background: #35ad1a;
  color: white;
  margin-right: 155rpx;
}
</style>