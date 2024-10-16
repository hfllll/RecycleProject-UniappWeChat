<template>
  <div class="container">
   
    <!-- 星级评分 -->
    <view class="rating-section">
      <text class="star-rate">请给上门回收师傅打分</text>
      <view class="stars">
        <image
          v-for="index in 5"
          :key="index"
          :src="index <= rating ? starFilled : starEmpty"
          @click="setRating(index)"
          class="star"
        />
        <text class="allscore">{{ rating }} 分</text>
      </view>
      
    </view>

    <!-- 评价表单 -->
    <view class="rate-form">
      <view class="title">评价</view>
      <view class="rate-form-service">
        <view class="service">服务态度:</view>
        <radio-group class="group">
          <radio class="item" value="good">好</radio>
          <radio class="item" value="mid">中</radio>
          <radio class="item" value="bad">差</radio>
        </radio-group>
      </view>
      <view class="rate-form-recycle">
        <view class="recycle">回收效率:</view>
        <radio-group class="group">
          <radio class="item" value="good">好</radio>
          <radio class="item" value="mid">中</radio>
          <radio class="item" value="bad">差</radio>
        </radio-group>
      </view>
      <view class="rate-form-ontime">
        <view class="ontime">上门准时度:</view>
        <radio-group class="group">
          <radio class="item" value="good">好</radio>
          <radio class="item" value="mid">中</radio>
          <radio class="item" value="bad">差</radio>
        </radio-group>
      </view>
    </view>

    <!-- 提交按钮 -->
    <button class="submit-btn" @click="submitFeedback">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 星级评分
      rating: 0,
      starFilled: '/static/images/order-start.png', // 替换成你的星星图标链接
      starEmpty: '/static/images/star.png', // 替换成你的空星星图标链接

    };
  },
  methods: {
    // 设置星级评分
    setRating(index) {
      this.rating = index;
    },

    // 提交评价
    submitFeedback() {
      if (this.rating === 0) {
        wx.showToast({
          title: '请给评分',
          icon: 'none'
        });
        return;
      }
      wx.navigateTo({
        url:'/pages/index/finishEvaluate'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
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
  margin: 10px 0;
}

.star {
  width: 30px;
  height: 30px;
  margin: 0 5px;
  cursor: pointer;
  float: left;
}
.allscore {
  font-size: 30rpx;
  display: flex;
  margin-left: 20rpx;
  align-items: center;
}

.feedback-section {
  margin-top: 20px;
}

.feedback-item {
  margin-bottom: 15px;
}

.title {
  margin: 30rpx 10rpx;
  font-size: 34rpx;
}
  .rate-form-service {
    display: flex;
    margin-left: 25rpx;
    margin-bottom:30rpx;
    .service {
      float: left;
      font-size: 28rpx;
      
    }  
  }
  .rate-form-recycle {
    display: flex;
    margin-left: 25rpx;
    margin-bottom:30rpx;
    .recycle {
      float: left;
      font-size: 28rpx;
      
    }
  }
  .rate-form-ontime {
    display: flex;
    margin-bottom: 150rpx; 
    .ontime {
      float: left;
      font-size: 28rpx;
    }
  }
.group {
      font-size: 28rpx;
      margin:0 30rpx;
      .item {
        margin: 0 30rpx;
      }
    }
.submit-btn {
  width: 85%;
  height: 60rpx;
  background-color: #2ec076;
  color: white;
  text-align: center;
  justify-content: center;
  line-height: 60rpx;
  border-radius: 10rpx;
  font-size: 30rpx;
  margin-top: 40rpx;
}
</style>