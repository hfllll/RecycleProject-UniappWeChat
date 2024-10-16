<template>
  <view class="container">
    <view class="orders-list">
          <view class="order-item">
            <view class="personal-info">
              <view class="personal-image">
                <image class="order-image" src="https://tupian.qqw21.com/article/UploadPic/2020-10/2020101722211881489.jpg"></image>
              </view>
              <view class="order-name-score">
                <view class="order-name">李章化 &ensp; 5分</view>
                <view class="score">评分</view> 
              </view>
              <view class="order-status">已接单</view>
              <view class="order-phone">
                <image class="phone-image" src="/static/images/order-phone.png" mode="aspectFit"></image>
              </view>
            </view>
            <view style="width: 100%;height: 1rpx;background-color: #dddddd;"></view>
            <view class="order-details">
              <view class="item" style="margin-bottom: 24rpx;">
                <view class="label">订单编号:</view>
                <view class="content">1232222222222</view>
              </view>
              <view class="item" style="margin-bottom: 24rpx;">
                <view class="label">下单时间:</view>
                <view class="content">2024-07-29</view>
              </view>
              <view class="item" style="margin-bottom: 20rpx;">
                <view class="label">联系人:</view>
                <view class="content">xxx</view>
              </view>
              <view class="item">
                <view class="label" style="margin-bottom:20rpx">联系方式:</view>
                <view class="content">15777777777</view>
              </view>
              <view class="item" style="margin-bottom: 15rpx;">
                <view class="label">回收地址:</view>
                <view class="content">武夷街道百花路358号</view>
              </view>
              <view class="item" style="margin-bottom: 15rpx;">
                <view class="label">预约时间:</view>
                <view class="content">2024-07-29 11:00-13:00</view>
              </view>
              <view class="item" style="margin-bottom: 15rpx;">
                <view class="label">收款方式:</view>
                <image src="/static/images/weixin.png" class="item-image"></image>
                <view class="content" style="margin-left: 5rpx;">微信</view>
              </view>
              <view class="item" style="margin-bottom:15rpx;">
                <view class="label">备注:</view>
                <view class="content">易碎物品</view>
              </view>
              <view class="item" style="margin-bottom: 15rpx;">
                <view class="label">回收物品:</view>
                <view class="content" style="margin-right: 40rpx;">电视机 &ensp; 24寸 &ensp; 可正常工作</view>
                <view bindtap="checkIamge" class="checkimage">查看图片</view>
              </view>
            </view>
            <view style="width: 100%;height: 1rpx;background-color: #dddddd;"></view>
            <view class="button-group">
              <button class="cancel-order" @click="cancelOrder">取消订单</button>
              <button class="contact">联系客服</button>
            </view>
          </view>
        </view>
        <!-- 遮罩层 -->
        <view v-if="isShow" class="overlay" @click="handleReject"></view>
        <!-- 弹出层 -->
        <view v-if="isShow" class="model">
          <view class="cancel">
            <view class="cancel-text">取消订单</view>
            <image @click="closeOrder" class="cancel-image" src="/static/images/cancel.png" mode="scaleToFill"></image>
          </view>
          <view class="popup-body">
            <view class="reason-title">取消原因</view>
            <view v-for="(item, index) in reasons" :key="index" class="reason-item" @click="selectReason(index)">
              <text>{{ item }}</text>
                <view class="radio">
                  <view v-if="selectedReason === index" class="checked"></view>
                </view>
              </view>
          </view>
          <view class="confirm-button">
            <navigator url='/pages/index/cancelOrder' class="confirm-btn" @click="confirmCancel">确认</navigator>
          </view>
      </view>
  </view>
</template>

<script>
import accessCancelOrder from './accessCancelOrder.vue'
export default {
  data() {
    return {
      isShow: false,
      isShowModel:false,
      reasons:[
        '计划有变，不需要回收',
        '信息有误，需要重新填写',
        '有其他的回收方式',
        '订单重复'
      ],
      selectedReason:null,
    }
  },
  methods: {
    cancelOrder() {
      this.isShow = true
    },
    closeOrder() {
      this.isShow = false
    },
    confirmCancel() {
      if (this.selectedReason === null) {
        wx.showToast({
          title: '请选择取消原因',
          icon: 'none',
        });
        return;
      }
      this.isShow = false
      this.isShowModel=true
    },
    selectReason(index) {
      this.selectedReason = index
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
 margin: 5rpx 0;
 padding:0 6rpx;
 width: 100%;
 height: 750rpx;
 border: 1px solid #dddddd;
}
// 弹出层，遮罩层
 .overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
   z-index: 1000; /* 确保在其他内容之上 */
 }
 
 .model {
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 50%; /* 占页面的35% */
   background-color: white;
   border-radius: 10px 10px 0 0;
   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
   z-index: 1001; /* 确保在遮罩层之上 */
   padding: 30rpx;
 }
  
.cancel {
  margin-bottom: 40rpx;
  display: flex;
  justify-content: space-between;
  .cancel-text {
    font-size: 32rpx;
    float: left;
    font-weight: bold;
  }
  .cancel-image {
    width: 30rpx;
    height: 30rpx;
  }
}

.popup-body {
  margin-top: 40rpx;
  margin-left: 20rpx;
  margin-bottom: 60rpx;
}

.reason-title {
  font-size: 28rpx;
  margin-bottom: 20rpx;
}

.reason-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 10rpx 0;
  font-size: 28rpx;
  cursor: pointer;
}

.radio {
  width: 40rpx;
  height: 40rpx;
  border: 3rpx solid #2ec076;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checked {
  width: 24rpx;
  height: 24rpx;
  background-color: #2ec076;
  border-radius: 50%;
}
.confirm-button {
  display: flex;
  justify-content: center;
}
.confirm-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 50rpx;
  background-color: #2ec076;
  color: white;
  border: none;
  border-radius: 10rpx;
  margin-top: 120rpx;
  cursor: pointer;
}
.personal-info {
  height: 100rpx;
  .personal-image {
    height: 100rpx;
    display: flex;
    align-items: center;
    float: left;
    .order-image {
      width: 70rpx;
      height: 70rpx;
      border-radius: 50%;
      margin-right: 10rpx;
    }
  }
 .order-name-score {
   height: 100rpx;
   float: left;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-right: 250rpx;
   .order-name {
     // display: flex;
     font-size: 28rpx;
     // flex-direction: column;
   }
   .score {
     // display: flex;
     font-size: 28rpx;
   }
 }
  .order-status {
    height: 100rpx;
    font-size: 28rpx;
    color: #46c785;
    font-weight: bold;
    display: flex;
    align-items: center;
    float: left;
    margin-right:55rpx ;
  }
  .order-phone {
    height: 100rpx;
    display: flex;
    align-items: center;
    .phone-image {
      width: 40rpx;
      height: 40rpx;
    }
  } 
}

.order-details {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  margin-top: 10px; /* 为了美观，可以加一点间距 */
}
.item-image {
  width: 42rpx;
  height: 42rpx;
  float: left;
}
.label {
  text-align: right;
  width: 150rpx;
  margin-right: 30rpx;
  float: left;
  font-size: 28rpx;
}
.content {
  text-align: left;
  font-weight: bold;
  font-size: 28rpx;
  float: left;
}
.checkimage {
  font-size: 28rpx;
  color: #238ff2;
}
.button-group {
  margin-top: 20rpx;
}

.cancel-order,
.contact {
  width: 170rpx;
  height: 50rpx;
  line-height: 50rpx;
  font-size: 28rpx;
  color: #000;
  border: 2rpx solid #dddddd;
  border-radius: 50rpx;
  align-items: center;
}

.cancel-order {
  
  float: left;
  margin-left: 155rpx;
  
}

.contact {
  margin-right: 155rpx;
}
</style>