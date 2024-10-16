<template>
		<EditAddressItem></EditAddressItem>
	
	<view class="box">
		<text class="text">常用地址</text>
		<view class="item-list">
			<AddressItem v-for="ele in addressItem" 
			:obj="ele" :id="ele.id" ></AddressItem>
		</view>
	</view>
	
</template>

<script>
import AddressItem from '@/components/AddressItem.vue';
import EditAddressItem from '@/components/EditAddressItem.vue';
import { getAddress } from '@/api/order.js';
import { useAddressStore } from '@/stores/order';
import { storeToRefs } from 'pinia';

export default{
	setup() {
		const useAddress = useAddressStore()
		
		// 结构出 addressItem，使其为响应式数据
		const { addressItem } = storeToRefs(useAddress)
		
		// 在组件初始化时调用获取地址的方法
		useAddress.fetchAddress(1)
		
		return {
			addressItem
		}
	},
	components:{
		AddressItem,
		EditAddressItem
	},
	data(){
		return{
			
		}
	}
}

</script>

<style scoped lang="scss">
	.box{
		width: 393px;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid rgba(187,187,187,1);
		padding-top: 8px;
		.text{
			margin-left: 10px;
		}
	}
</style>