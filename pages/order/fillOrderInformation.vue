<template>
		<EditAddressItem></EditAddressItem>
	
	<view class="box">
		<text class="text">常用地址</text>
		<view class="item-list">
			<AddressItem v-for="ele in data" :obj="ele" @handleEvent="modifyAddress" ></AddressItem>
		</view>
	</view>
	
</template>

<script>
import AddressItem from '@/components/AddressItem.vue';
import EditAddressItem from '@/components/EditAddressItem.vue';
import { getAddress } from '@/api/order.js';

export default{
	components:{
		AddressItem,
		EditAddressItem
	},
	data(){
		return {
			data:[]
		}
	},
	async created() {
	  const p = await getAddress(1)
	  const {data} = p
	  this.data = data
	  console.log(p);
	},
	// methods:{
	// 	modifyAddress(){
	// 		const p = await this.
	// 	}
	// }
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