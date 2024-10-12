<template>
  <view class="navBarBox">
  			<!-- 状态栏占位 -->
  			<view class="statusBar" :style="{ paddingTop: statusBarHeight + 'px' }"></view>
  			<!-- 真正的导航栏内容 -->
  			<view class="navBar">
  				
  				<view>{{location}}</view>
          <image class="logo" src="/static/images/pull-left.png" mode="scaleToFill" @click="imagetap"></image>
  			</view>
  		</view>

  <view class="container">
    <view v-if="showModal" class="overlay" @click="handleReject"></view>
    
        <!-- 弹出层 -->
        <view v-if="showModal" class="modal">
          <view class="modal-header">
            <image :src="userAvatar" class="avatar" mode="aspectFill" />
            <text class="app-name">{{ appName }}</text>
            <text class="app-apply">申请</text>
          </view>
          <text class="info-title">获取你的具体位置信息</text>
          <text class="info-description">将获取你的具体位置信息，用于上门回收。</text>
          
          <view class="button-group">
            <button class="btn reject-btn" @click="handleReject" type="default" size="mini">拒绝</button>
            <button size="mini" class="btn allow-btn" :disabled="!accepted" @click="handleAllow" type="primary">允许</button>
          </view>
    
          <view class="checkbox-container">
            <radio value="isCheck" class="radio1">已阅读并接受
            </radio>
            <navigator url="" class="protect">《小程序名称隐私保护指引》</navigator>
          </view>
        </view>
    <view class="container1">
      <map class="map" :latitude="latitude" :longitude="longitude" :scale="14"></map>
       <view class="scroll-view">
          <view class="section section1">
            <image src="/static/images/location.png" mode=""></image>
            <text class="location">当前位置</text>
            <text class="main">主营：家电|废纸</text>
            <button type="primary" style="width: 75%;">去下单</button>
          </view>
          <view class="section section2">
            <view class="recycle">
              <text class="recycle-text">回收指南</text>
            </view>
           <view class="icons">
             <view class="item1">
               <image style="width: 60rpx; height: 60rpx;" class="images" src="/static/images/ordertime.png"></image>
               <view>在线下单</view>
             </view>
             <view class="separator">...</view>
             <view class="item2">
               <image style="width: 60rpx; height: 60rpx;" class="images" src="/static/images/opendoor.png"></image>
               <view>免费上门</view>
             </view>
             <view class="separator">...</view>
             <view class="item3">
               <image style="width: 60rpx; height: 60rpx;" class="images" src="/static/images/transition.png"></image>
               <view>进行交易</view>
             </view>
             <view class="separator">...</view>
             <view class="item4">
               <image style="width: 60rpx; height: 60rpx;" class="images" src="/static/images/orders.png"></image>
               <view>完成订单</view>
             </view>
           </view>

          </view>
          <view class="section section3">
            <view class="detail">
              <text class="text-detail">详情咨询</text>
            </view>
            <view class="main-detail">
              <view class="text-header">扫码加微信</view>
              <image class="code" style="width: 120rpx;height:120rpx" src="/static/images/code.jpg"></image>
              <view class="text-main">或</view>
              <image class="phone" style="width: 50rpx;height: 50rpx;" src="/static/images/phone.png"></image>
              <view class="text-footer">15777777777</view>
            </view>
          </view>
        </view>
        
    </view>
  </view>
</template>

<script>
  export default {
    data() {
    		return {
          isCheck:false,
          location: '南平市',
          statusBarHeight: 24,
          				// 导航栏高度
          navBarHeight: 15,
           showModal: true, // 弹出层是否显示
           accepted: true,//单选框状态
           userAvatar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.HVdWPbF8w9RDzR_VFdskegAAAA?rs=1&pid=ImgDetMain', // 用户头像URL
           appName: '小程序名称',
           latitude: 40.7128,
                 longitude: -74.0060,
                 scale: 14, // 设置地图的缩放级别
    		}
    	},
       methods: {
           handleReject() {
             // 直接退出小程序
             wx.exitMiniProgram(); // 退出小程序的方法
           },
           handleAllow() {
             if (this.accepted) {
               this.showModal = false; // 关闭弹出层
               // 可以在这里跳转到首页
               // wx.navigateTo({ url: '/pages/home/home' }); // 根据你的首页路径修改
             }
           },
           imagetap() {
             console.log('city')
             wx.navigateTo({
               url:'/pages/city/city'
             })
           }
         },
      
  }
</script>

<style lang="scss">
  .navBarBox{
    background-color: #2ec076;
  }
  .navBarBox .statusBar {}
  .navBarBox .navBar {
  	padding: 3rpx 50rpx;
  	padding-bottom: 8rpx;
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
  	align-items: center;
  }
  .navBarBox .navBar .logo {
  	width: 28rpx;
  	height: 28rpx;
  	margin-right: 10rpx;
  }

 .container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
 }
 
 .overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
   z-index: 1000; /* 确保在其他内容之上 */
 }
 
 .modal {
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 35%; /* 占页面的35% */
   background-color: white;
   border-radius: 10px 10px 0 0;
   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
   z-index: 1001; /* 确保在遮罩层之上 */
 }
 
 .modal-header {
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   margin-top: 40rpx;
 }
 
 .avatar {
   margin-left: 40rpx;
   width: 40px;
   height: 40px;
   border-radius: 50%; /* 圆形头像 */
   margin-right: 10px;
 }
 
 .app-name {
   font-size: 32rpx;
   font-weight: bold;
   float: flex;
 }
 .app-apply {
   font-size: 32rpx;
   margin-left: 30rpx;
   
 }
 
 .info-title {
   margin:10rpx 0rpx 10rpx 40rpx;
   font-size: 36rpxpx;
   font-weight: bold;
   display: flex;
 }
 
 .info-description {
   margin-left: 40rpx;
   font-size: 28rpx;
    font-weight: bold;
   margin-bottom: 20px;
   color: #868686;
 }
 
 .button-group {
   display: flex;
   justify-content: center;
 }
 
 .btn {
   width: 25%;
   border: none;
   border-radius: 10rpx;
   cursor: pointer;
   text-align: center;
    margin: 0 20rpx;
 }
 
 .reject-btn {
   color: white;
   margin-top: 50rpx;
   margin-bottom: 20rpx;
 }
 
 .allow-btn {
   color: white;
   margin-left: 30rpx;
   margin-top: 60rpx;
   margin-bottom: 20rpx;
 }
 
 .allow-btn:disabled {
   background-color: #a0a0a0; /* 禁用状态的颜色 */
   cursor: not-allowed; /* 禁用时的光标样式 */
 }
 
 .checkbox-container {
   margin-left: 40rpx;
   display: flex;
   align-items: center;
   text-align: center;
   .radio1 {
     float: left;
     .protect {
       
     }
   }
 }
 .container1 {
   display: flex;
   flex-direction: column;
   height: 100%;
   .map {
     width: 100%;
     height: 30%; /* 地图占据页面的30% */
   }
   
   .scroll-view {
  
   }
   
   .section {
     border: 1px solid #c2c2c2; /* 边框 */
     margin-bottom: 8rpx; /* 间距 */
     padding: 16rpx; /* 内边距 */
     border-radius: 45rpx;
   }
   .section:first-child {
     height: 270rpx;
     image {
       width: 50rpx;
       height: 50rpx;
       padding: 16rpx 14rpx;
       float: left;
     }
     .location {
       font-size: 36rpx;
       font-weight: bold;
       display: flex;
       margin-top: 20rpx;
       margin-bottom: 30rpx;
     }
     .main {
       font-size: 28rpx;
       color: #949494;
       margin-bottom: 30rpx;
     }
     button {
       margin-top: 40rpx;
       background-color: #2ec076;
       border-radius: 20rpx;
     }
   }
  
 .section2 {
   display: flex;
   flex-direction: column; /* 纵向排列子元素 */
   align-items: center; /* 水平居中对齐 */
 }
 
 .recycle {
   width: 300rpx; /* 设置宽度 */
   height: 80rpx; /* 设置高度 */
   background-color: #2ec076; /* 设置背景色 */
   display: flex; /* 使用 flexbox 来布局 */
   justify-content: center; /* 水平居中 */
   align-items: center; /* 垂直居中 */
   margin-top: 15rpx;
   margin-bottom: 40rpx; /* 下方间距 */
   border-radius: 80rpx;
   font-weight: bold;
   
 }
 
 .recycle-text {
   font-size: 28rpx; /* 可以根据需要调整字体大小 */
   color: white; /* 字体颜色为白色 */
 }
 
 .icons {
   display: flex; /* 使用 flexbox 来布局 */
   justify-content: center; /* 水平居中 */
   align-items: center; /* 垂直居中 */
   margin-bottom: 50rpx;
 }
 
 .item1, .item2, .item3, .item4 {
   display: flex;
   flex-direction: column; /* 垂直排列图片和文字 */
   align-items: center; /* 水平居中对齐 */
   margin: 0 10rpx; /* 图片间的间距 */
   font-size: 24rpx;
 }
 
 .separator {
   margin: 0 10rpx; /* 省略号的间距 */
   font-size: 28px; /* 可根据需要调整省略号的大小 */
   line-height: 50rpx; /* 与图片的高度一致，保持垂直居中 */
   font-weight: bold;
 }
 
 .section3 {
   margin-top: 20rpx; /* 为 section3 设置上边距，防止与上面重叠 */
   display: flex;
   flex-direction: column; /* 纵向排列子元素 */
   align-items: center; /* 水平居中对齐 */
 }

   .section:nth-child(3) {
     height: 270rpx;
     margin-bottom: 0; /* 移除最后一部分底部间距 */
   
     .detail {
        width: 300rpx; /* 设置宽度 */
        height: 80rpx; /* 设置高度 */
        background-color: #2ec076; /* 设置背景色 */
        display: flex; /* 使用 flexbox 来布局 */
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        margin-top: 15rpx;
        margin-bottom: 40rpx; /* 下方间距 */
        border-radius: 80rpx;
        font-weight: bold;
       .text-detail {
         font-size: 28rpx;
         color: white;
         font-weight: bold;
       }
     }
     .main-detail {
        display: flex;
        align-items: center;
        justify-content: center;
        .text-header {
          
          margin-right: 10rpx;
        }
        .code {
          margin: 0 10rpx;
        }
        .text-main {
          margin: 0 10rpx;
        }
        .phone {
          margin: 0 10rpx;
        }
        .text-footer {
          
        }
     }
   }
 }
 
 
</style>
