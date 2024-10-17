// stores/counter.js
import { defineStore } from 'pinia';
import { getAddress, setAddAddress, setAddress, setChangeAddress } from '@/api/order';

// 定义 Store
export const useAddressStore = defineStore('order', {
  state: () => ({
    addressItem:[],
	text:'122334444'
  }),
  actions: {
	  // 获取地址函数
    async fetchAddress(userId) {
      const {data} = await getAddress(userId) 
	   // 检查是否为数组
	  this.addressItem = data;
    },
	
	// 新增地址函数
	async addAddress(obj) {
		await setAddAddress(obj)
		// 在新增地址后重新获取重新获取地址list
		this.fetchAddress(1)
	},
	
	// 设置默认地址函数
	async setDefault(id) {
		await setAddress(id)
		// 在设置默认后重新获取地址list
		this.fetchAddress(1)
	},
	
	// 修改地址函数
	async changeAddress(obj) {
		await setChangeAddress(obj)
		// 在设置默认后重新获取地址list
		this.fetchAddress(1)
	}
  }
});
