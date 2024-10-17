<template>
	<view class="box">
		<!-- 标题 -->
		<view class="text">
			<text>上门时间</text> 
			<uni-icons
			 type="closeempty"
			 size="24"
			 @click="$emit('close')"
			 ></uni-icons>
		</view>
		
		<!-- 多行选择器 -->
		<van-picker 
		@cancel="$emit('close')"
		@confirm="$emit('close')"
		:columns="columns" 
		@change="onChange" />
		
		<!-- 确认按钮 -->
		<view>
			<button class="btn" @click="$emit('close')">确认</button>	
		</view>
		
	</view>
</template>

<script>
import ConfirmButton from '@/components/confirmButton.vue';
// 在组件内部定义 citys 数据
const citys = {
  今天: ['立即上门', '13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00'],
  明天: ['9:00-11:00','11:00-13:00','13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00'],
  后天: ['9:00-11:00','11:00-13:00','13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00'],
};

export default {
  data() {
    return {
      columns: [
        {
          values: Object.keys(citys), // 省份列
          className: 'column1',
        },
        {
          values: citys['今天'], // 城市列，默认显示浙江省的城市
          className: 'column2',
          defaultIndex: 0, // 默认选择第三个城市
        },
      ],
    };
  },
  methods: {
    // Picker 改变时的回调
    onChange(event) {
      const { picker, value, index } = event.detail;
      // 根据选中的省份更新城市列的数据
      picker.setColumnValues(1, citys[value[0]]);
    },
  },
};
</script>


<style lang="scss" scoped >
	.box{
		border-radius: 15px 15px 0px 0px;
		border: 1px solid rgba(187,187,187,1);
		.text{
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0px 10px;
		}
		.btn{
			margin: 20px auto;
			width: 329px;
			height: 36px;
			line-height: 36px;
			border-radius: 4px;
			background-color: rgba(46,192,118,1);
			color: rgba(255,255,255,1);
			font-size: 14px;
			text-align: center;
			font-family: Roboto;
		}
	}
</style>