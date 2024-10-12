<template>
  <view class="list">
    <AddressItem></AddressItem>
    <AddressItem></AddressItem>
    <AddressItem></AddressItem>
    <AddressItem></AddressItem>
  </view>
</template>

<script setup>
// 引入 AddressItem 组件
import AddressItem from '@/components/AddressItem.vue';
</script>

<style scoped>
.list {
  margin-top: 11px;
  width: 393px;
  line-height: 20px;
  border-radius: 10px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(187, 187, 187, 1);
}
</style>
