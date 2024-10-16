<template>
  <view class="container">
    <!-- 搜索框 -->
    <view class="search">
      <image class="search-img" src="/static/images/search.png"></image>
      <input class="search-inp" placeholder="搜索"></input>
    </view>
    <!-- 订单分类 -->
    <view class="order-categories">
      <view
        class="category"
        :class="{ active: selectedCategory === '家电订单' }"
        @click="selectCategory('家电订单')"
      >
        家电订单
        <view class="underline" v-if="selectedCategory === '家电订单'"></view>
      </view>
      <view
        class="category"
        :class="{ active: selectedCategory === '废纸订单' }"
        @click="selectCategory('废纸订单')"
      >
        废纸订单
        <view class="underline" v-if="selectedCategory === '废纸订单'"></view>
      </view>
    </view>
    
    <!-- 订单状态 -->
    <view class="status-container">
      <view
        class="status"
        v-for="status in orderStatuses"
        :key="status"
        :class="{ active: selectedStatus === status }"
        @click="selectStatus(status)"
      >
        {{ status }}
      </view>
    </view>
    
    <!-- 订单信息 -->
    <allOrder></allOrder>
    <!-- 待接单 -->
    <!-- <waitOrder></waitOrder> -->
    <!-- 已取消 -->
    <!-- <cancelOrder></cancelOrder> -->
    <!-- 待确认 -->
    <!-- <waitAffirm></waitAffirm> -->
    <!--  待评价-->
    <!-- <waitEvaluate></waitEvaluate> -->
    <!-- 已结束 -->
    <!-- <finishOrder></finishOrder> -->
    <!-- 已接单 -->
    <!-- <receiveOrder></receiveOrder> -->
  </view>
</template>
<script setup>
import { ref, computed } from 'vue';
import allOrder from '@/components/allOrder.vue'
import waitOrder from '@/components/waitOrder.vue'
import cancelOrder from '@/components/cancelOrder.vue';
import waitAffirm from '@/components/waitAffirm.vue'
import waitEvaluate from '@/components/waitEvaluate.vue';
import finishOrder from '@/components/finishOrder.vue';
import receiveOrder from '@/components/receiveOrder.vue';
// 定义状态
const searchQuery = ref('');
const selectedCategory = ref('家电订单');
const selectedStatus = ref('全部');

const orderStatuses = [
  '全部',
  '待接单',
  '已接单',
  '待确认',
  '已完成待评价',
  '已结束',
  '已取消',
];

// 示例订单数据
const orders = ref([
  { 
    id: 1,
    name: '订单1',
    category: '家电订单',
    status: '待接单',
    userName:'李彰化',
    userAvatar:'https://tupian.qqw21.com/article/UploadPic/2020-10/2020101722211881489.jpg',
    orderId:'1232222222222',//订单编号
    phone:'1547822222',//电话号码
    time: '2024-07-29',//下单时间
    address:'武夷街道百花路358号',//回收地址,
    recycleItem:'电视机',//回收物品
    attention:'易碎物品',//备注
    attach:'张三',//张三
    orderTime:'2024-07-29  11:00-13:00',
    moneyWay:'微信',
    size:24,
    isNormal: true
    
     }
  // 更多订单...
]);

// 选择订单分类
const selectCategory = (category) => {
  selectedCategory.value = category;
  selectedStatus.value = '全部'; // 重置状态
};

// 选择订单状态
const selectStatus = (status) => {
  selectedStatus.value = status;
};

// 过滤订单
const filteredOrders = computed(() => {
  return orders.value.filter(order => {
    return order.category === selectedCategory.value && 
           (selectedStatus.value === '全部' || order.status === selectedStatus.value);
  });
});
//点击查看图片
  
const checkImage = () => {
  console.log('点击了')
}
</script>
<style lang="scss" scoped>

.container {
  padding: 15rpx;
  margin:0 10rpx;
}

.search {
  display: flex;
  align-items: center;
  border-radius: 50rpx;
  border: 2rpx solid #000;
  height: 65rpx;
  margin-bottom:20rpx;
  
}

.search-img {
  width: 50rpx;
  height: 50rpx;
  margin-right: 20rpx;
  margin-left: 10rpx;
}

.search-inp {
  flex: 1;
  font-size: 30rpx;
  height: 60rpx;
  border-radius: 50rpx;
}
.order-categories {
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 100%;
  margin-bottom: 20rpx;
  border-bottom:2rpx solid #dadada;
}

.category {
  position: relative;
  margin-right: 20rpx; /* 设置两个分类之间的距离 */
  padding-bottom: 10rpx; /* 留出空间给下方的横线 */
  cursor: pointer;
  font-weight: bold;
  font-size: 30rpx;
  
 
}

.underline {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60rpx; /* 横线宽度 */
  height: 8rpx; /* 横线高度 */
  background-color: #2ec076; /* 横线颜色 */
  margin-left: 50%; /* 横线居中对齐 */
  transform: translateX(-50%); /* 调整横线的偏移 */
  border-radius: 10rpx;
}

.active {
  font-weight: bold; /* 高亮时加粗字体 */
}

.status-container {
  display: flex;
  flex-wrap: wrap;
}

.status {
  width: 94rpx;
  height: 55rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
  font-weight: bold;
  margin: 4rpx;
  border-radius: 40rpx;
  cursor: pointer;
  border: 2rpx solid #dadada;
}

.status.active {
  background-color: #2ec076; /* 高亮状态 */
}

</style>