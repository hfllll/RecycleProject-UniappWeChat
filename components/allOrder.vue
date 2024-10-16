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
                <view class="score">
                  <view class="stars">
                    <image
                      v-for="index in 5"
                      :key="index"
                      :src="index <= rating ? starFilled : starEmpty"
                      @click="setRating(index)"
                      class="star"
                    />
                  </view>
                </view> 
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
              <button class="cancel-order">取消订单</button>
              <button class="contact">联系客服</button>
            </view>
          </view>
        </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rating: 3,
      starFilled: '/static/images/order-start.png', // 替换成你的星星图标链接
      starEmpty: '/static/images/star.png', // 替换成你的空星星图标链接
    }
  },
  methods: {
    setRating(index) {
      this.rating = index;
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
.star-rate {
  margin-bottom: 40rpx;
}
.rating-section {
  font-size: 30rpx;
  margin-top: 20px;
  margin-left: 15rpx;
  margin-bottom:30rpx;
}

.stars {
  display: flex;
  margin: 10rpx 0;
}

.star {
  width: 30rpx;
  height: 30rpx;
  margin: 0 5rpx;
  cursor: pointer;
  float: left;
}
.allscore {
  font-size: 30rpx;
  display: flex;
  margin-left: 20rpx;
  align-items: center;
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