<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import '@/uni_modules/uv-ui-tools/index.scss';
	// 带入vant样式组件
	@import "/wxcomponents/vant-weapp/common/index.wxss";
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* App.vue 或全局样式文件 */
	/* 在 App.vue 中 */
	/* app.wxss */
	view, text, image, button, input, textarea {
	  box-sizing: border-box;
	}

	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>