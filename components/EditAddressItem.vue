<template>
	<!-- 搜索框 -->
	<view class="search">
		<input type="text" placeholder="点击黏贴地址,  帮您自动填充"  />
		<text>粘贴</text>
	</view>
	
	<!-- 详细信息 -->
	<view class="detail">
		<view class="item">
			<view class="text">
				<text>地址<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="请输入地址" 
			v-model="msg" />
			<uni-icons type="right"></uni-icons>
		</view>
		<view class="item">
			<view class="text">
				<text>门牌号<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入详细地址与门牌号" 
			v-model="roomNumber" />
			
		</view>
		<view class="item">
			<view class="text">
				<text>楼层<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入详细楼层"
			v-model="floor" />
		</view>
		<view class="item">
			<view class="text">
				<text>联系人<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入联系人姓名"
			v-model="consignee" />
		</view>
		<view class="item">
			<view class="text">
				<text>电话<text class="red">*</text></text>	
			</view>
			<input type="text" placeholder="输入联系电话" 
			v-model="phone" />
		</view>
		<ConfirmButton :value="value" @click="openModal()"></ConfirmButton>
	</view>
	<uv-modal ref="modal"
	 showCancelButton="true"
	 title="是否保存地址"
	content=''
	 @confirm="confirm(obj)"></uv-modal>
</template>

<script>
import ConfirmButton from '@/components/confirmButton.vue';
import { setAddAddress } from '@/api/order';
import { useAddressStore } from '@/stores/order';

export default{
	setup() {
		const useAddress = useAddressStore()
		const confirm = (obj) =>{
			console.log(111);
			console.log(obj);
			// 判断两种情况下的不同功能
			const pages = getCurrentPages()  // 获取页面栈
			const currentPage = pages[pages.length - 1]  // 当前页面
			const route = currentPage.route  //获取当前页面的路由
			console.log(route);
			if (route === 'pages/order/fillOrderInformation'){
				console.log('这是增加地址');
				useAddress.addAddress(obj);
			}else if(route === 'pages/my/editAddress') {
				useAddress.changeAddress({...obj, })
			}
		}
		return {
			confirm
		}
	},
	data(){
		return {
			value:'保存并使用',
			roomNumber:'1',
			floor:'2',
			consignee:'3',
			phone:'4',
			msg:'奥克斯广场',
			id:''
		}
	},
	components:{
		ConfirmButton
	},
	computed:{
		obj(){
			return{
				msg: this.msg,
				consignee: this.consignee,
				roomNumber: this.roomNumber,
				floor: this.floor,
				phone: this.phone
			}
		}
	},
	methods:{
		openModal() {
			this.$refs.modal.open();
		},
	},
	onLoad(option) {
		// options 是 navigateTo 中的参数
		
		console.log(options);
	}
}
</script>

<style lang="scss" scoped> 
	.search{
		width: 393px;
		height: 44px;
		line-height: 20px;
		background-color: rgba(239,239,245,1);
		color: rgba(16,16,16,1);
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0px 10.48px 0px 13px;
		input{
			width: 328.02px;
			height: 28px;
			line-height: 20px;
			background-color: rgba(255,255,255,1);
		}
		text{
			width: 33.54px;
			height: 24px;
			line-height: 24px;
			color: rgba(52,204,95,1);
			font-size: 16px;
		}
	}
	.detail{
		width: 100%;
		height: 342px;
		border-radius: 10px 10px 10px 10px;
		background-color: rgba(255,255,255,1);
		font-size: 14px;
		border: 1px solid rgba(134,134,134,1);
		.item{
			height: 59px;
			display: flex;
			align-items: center;
			padding-left: 19px;
			input{
				margin-left: 11px;
				width: 268px;
				height: 20px;
				line-height: 20px;
				color: rgba(0,0,0,0.96);
				font-size: 14px;
				font-family: PingFangSC-bold;
			}
			.text{
				width: 50px;
				.red{
					color: red;
				}
			}
		}
	}
</style>