<template>
	<view class="item">
		<view class="isdefault" 
		:style="{color: colorBasedOnDefault}"
		@click="openModal"
		>
			{{obj.isDefault === 0? '默认地址':'设为默认'}}
		</view>
		<view class="detail">
			<text class="area">{{obj.msg}}</text>
			<br/>
			<text class="name">{{obj.consignee}}</text>
			<text class="phone">&nbsp;&nbsp;{{obj.phone}}</text>	
		</view>
		<van-icon name="edit" color="blue" size="25px"
		 @click="gotoEdit" />
		<uv-modal ref="modal" 
		title="是否设置为默认地址？" 
		content=''
		 @confirm="confirm(obj.id)"></uv-modal>
	</view>
</template>

<script>
import { useAddressStore } from '@/stores/order';
export default{
	setup() {
		const useAddress = useAddressStore()
		// 定义设置默认的方法
		const confirm = (id) => {
			useAddress.setDefault(id)
		}
		return{
			confirm,
		}
	},
	methods:{
		openModal(){
			this.$refs.modal.open();
		},
		gotoEdit(){
			uni.navigateTo({
				url:'/pages/my/editAddress?witchWay=1'
			})
		}
	},
	props:{
		obj:{
			type: Object
		}
	},
	computed:{
		colorBasedOnDefault(){
			return this.obj.isDefault === 0? 
			'rgba(255,0,0,1)': 
			'rgba(28,140,242,1)'
		}
	},
}
</script>

<style scoped lang="scss">
	.item{
		display: flex;
		height: 75px;
		align-items: center;
		border-bottom: 1px solid rgba(187,187,187,1);
		padding: 0px 20px 0px 17px;
		.isdefault{
			margin-right: 10px;
			font-size: 14px;
		}
		.detail{
			width: 250px;
			.area{
				font-size: 18px;
				font-weight: 600;
			}
		}
	}
</style>
