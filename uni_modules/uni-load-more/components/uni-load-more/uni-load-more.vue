<template>
	<view class="uni-load-more" @click="onClick">
		<!-- #ifdef APP-NVUE -->
		<loading-indicator 
			v-if="!webviewHide && status === 'loading' && showIcon"
			:style="{color: color, width: iconSize + 'px', height: iconSize + 'px'}" 
			:animating="true" 
			class="uni-load-more__img uni-load-more__img--nvue">
		</loading-indicator>
		<!-- #endif -->

		<!-- #ifdef H5 -->
		<svg 
			v-if="!webviewHide && (iconType === 'circle' || (iconType === 'auto' && platform === 'android')) && status === 'loading' && showIcon"
			:style="{width: iconSize + 'px', height: iconSize + 'px'}" 
			class="uni-load-more__img uni-load-more__img--android-H5"
			width="24" height="24" viewBox="25 25 50 50">
			<circle cx="50" cy="50" r="20" fill="none" :style="{color: color}" :stroke-width="3"></circle>
		</svg>
		<!-- #endif -->

		<!-- #ifndef APP-NVUE || H5 -->
		<view 
			v-if="!webviewHide && (iconType === 'circle' || (iconType === 'auto' && platform === 'android')) && status === 'loading' && showIcon"
			:style="{width: iconSize + 'px', height: iconSize + 'px'}" 
			class="uni-load-more__img uni-load-more__img--android-MP">
			<view class="uni-load-more__img-icon" :style="{borderTopColor: color, borderTopWidth: iconSize / 12}"></view>
			<view class="uni-load-more__img-icon" :style="{borderTopColor: color, borderTopWidth: iconSize / 12}"></view>
			<view class="uni-load-more__img-icon" :style="{borderTopColor: color, borderTopWidth: iconSize / 12}"></view>
		</view>
		<!-- #endif -->

		<!-- #ifndef APP-NVUE -->
		<view 
			v-else-if="!webviewHide && status === 'loading' && showIcon"
			:style="{width: iconSize + 'px', height: iconSize + 'px'}" 
			class="uni-load-more__img uni-load-more__img--ios-H5">
			<image :src="imgBase64" mode="widthFix"></image>
		</view>
		<!-- #endif -->

		<text 
			v-if="showText" 
			class="uni-load-more__text" 
			:style="{color: color}">
			{{ status === 'more' ? contentdownText : status === 'loading' ? contentrefreshText : contentnomoreText }}
		</text>
	</view>
</template>

<script>
let platform
setTimeout(() => {
    if (uni.getDeviceInfo) {
        platform = uni.getDeviceInfo().platform
    } else {
        platform = uni.getSystemInfoSync().platform
    }
}, 16)

import { initVueI18n } from '@dcloudio/uni-i18n'
import messages from './i18n/index.js'
const { t } = initVueI18n(messages)

export default {
    name: 'UniLoadMore',
    emits: ['clickLoadMore'],
    props: {
        status: {
            type: String,
            default: 'more'
        },
        showIcon: {
            type: Boolean,
            default: true
        },
        iconType: {
            type: String,
            default: 'auto'
        },
        iconSize: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: '#777777'
        },
        contentText: {
            type: Object,
            default() {
                return {
                    contentdown: '',
                    contentrefresh: '',
                    contentnomore: ''
                }
            }
        },
        showText: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            webviewHide: false,
            platform: platform,
            imgBase64: 'data:image/png;base64,...' // 示例图片内容
        }
    },
    methods: {
        onClick() {
            this.$emit('clickLoadMore')
        }
    }
}
</script>
