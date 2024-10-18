import {get, post, put} from '@/common/request.js';
export const userLogin = (code) => {
    return post('/user/login', { code });
}