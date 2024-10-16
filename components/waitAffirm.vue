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
              <view class="order-status">待确认</view>
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
            <view class="acture-recycle">实际回收信息</view>
            <view class="recycle-money">
              <view class="recycle-money-text">回收金额:</view>
              <input class="recycle-money-input" type="number" v-model="amount"></input>
              <view class="recycle-money-dollar">元</view>
            </view>
            <view class="form-item">
              <label class="acture-pay">实际付款方式:</label>
              <view class="select-pay">
                <view class="select">
                    <uni-data-select
                      v-model="value"
                      :localdata="range"
                      @change="change"
                       :clear="false"
                    ></uni-data-select>
                  </view>
              </view>
            </view>
            <view class="acture-recylce-view">
              <view class="acture-recycle-info">实际回收信息:</view>
              <view class="acture-recycle-text">电视机 &ensp; 24寸 &ensp; 可正常工作</view>
            </view>
            <view class="location">
              <image class="location-image" src="/static/images/order-location.png"></image>
              <view class="location-text">xx街道xxxxx78号</view>
            </view>
            <view class="button-group">
              <button class="cancel-order">确认订单</button>
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
      amount:0,
       value: 1,
        range: [
          { value: 0, text: "支付宝" },
          { value: 1, text: "微信" },
          { value: 2, text: "现金" },
        ],
    };
  },
   methods: {
      change(e) {
        console.log("e:", e);
      },
    },
};
</script>

<style lang="scss" scoped>
.container {
 margin: 5rpx 0;
 padding:0 6rpx;
 width: 100%;
 height: 1100rpx;
 border: 1px solid #dddddd;
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


.acture-recycle {
  font-size: 30rpx;
  font-weight: bold;
  margin-left: 30rpx;
  margin-top: 8rpx;
  margin-bottom: 20rpx;
}
.recycle-money {
  margin-bottom: 25rpx;
  .recycle-money-text {
    font: 28rpx;
    float: left;
    margin-right: 20rpx;
    margin-left: 70rpx;
  }
  .recycle-money-input {
    width: 400rpx;
    height: 45rpx;
    float: left;
    border: 2rpx solid #000;
    margin-right: 15rpx;
  }
  .recycle-money-dollar {
    font-size: 28rpx;
  }
}
  
.form-item {
  margin-left: 25rpx;
  .acture-pay {
    font-size: 28rpx;
    margin-left: 20rpx;
    float: left;
  }
  .select-pay {
      width: 400rpx;
      height: 40rpx;
    
  }
  
}



.acture-recylce-view {
  margin-top: 30rpx;
  margin-bottom: 30rpx;
  margin-left: 20rpx;
  .acture-recycle-info {
    font-size: 28rpx;
    margin-left: 30rpx;
    float: left;
    margin-right: 20rpx;
  .acture-recycle-text {
    font-size: 28rpx;
    margin-left: 20rpx;
  }
  }
}
.location {
  display: flex;
  justify-content: center;
  line-height: 35rpx;
  margin-bottom: 50rpx;
  .location-image {
    width: 30rpx;
    height: 30rpx;
    float: left;
  } 
  .location-text {
    font-size: 28rpx;
    margin-left: 10rpx;
  }
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