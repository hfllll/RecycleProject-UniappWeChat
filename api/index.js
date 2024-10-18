import {get, post, put} from '@/common/request.js';
// 获取订单
export const getOrdersByStatus = (status) =>{
	return get(`/user/orders/${status}`);
}