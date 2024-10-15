// 引入封装的请求库
import {get, post} from '@/common/request.js';

// 回收物品二级接口
export const getStatus = (categoryRecycleId) =>{
	return get(
	'/user/orders/category/recycle/sf',
	{ categoryRecycleId })
}

// 获取默认地址
export const getAddress = (userId) =>{
	return get(
	'/user/orders/address/page',
	{ userId })
}

// 设置默认地址
export const setAddress = (id) =>{
	return post(
	'/user/orders/address/default',
	{ id })
}

// 新增地址
export const setAddAddress = (obj) => {
	return post(
	'/user/orders/address/save',
	{ ...obj })
}