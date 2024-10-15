<template>
	<view class="item">
		<view class="isdefault" 
		:style="{color: colorBasedOnDefault}"
		@click="setDefault"
		>
			{{obj.isDefault === 0? '默认地址':'设为默认'}}
		</view>
		<view class="detail">
			<text class="area">{{obj.msg}}</text>
			<br/>
			<text class="name">{{obj.consignee}}</text>
			<text class="phone">&nbsp;&nbsp;{{obj.phone}}</text>	
		</view>
		<van-icon name="edit" color="blue" size="25px"/>
	</view>
</template>

<script>
import { setAddress, getAddress } from '@/api/order';
export default{
	props:{
		obj:{
			type: Object
		}
	},
	mounted() {
			console.log(this.obj);
	},
	computed:{
		colorBasedOnDefault(){
			return this.obj.isDefault === 0? 
			'rgba(255,0,0,1)': 
			'rgba(28,140,242,1)'
		}
	},
	methods:{
		setDefault(){
			if (this.obj.isDefault === 1){
				this.send()
			}
		},
		async send(){
			const p = await setAddress(this.obj.id)
			console.log(p);
			const p1 = await getAddress(1)
			console.log(p1 );
		}
	}
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
