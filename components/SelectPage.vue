<template>
  <view class="container">
    <!-- 标题和关闭按钮 -->
    <view class="header">
      <text>选择回收物品</text>
      <text class="close-icon" @click="$emit('close')">×</text>
    </view>

    <!-- 分类选择 -->
    <view class="section">
      <text class="section-title">分类</text>
      <view class="category-options">
        <view 
          v-for="category in categories" 
          :key="category.id" 
          class="category-item" 
          :class="{ active: selectedCategory === category.name }"
          @click="selectCategory(category)">
          {{ category.name }}
        </view>
      </view>
    </view>

    <!-- 具体物品选择 -->
    <view class="section" v-if="selectedCategory && subcategories.length">
      <text class="section-title">选择具体{{ selectedCategory === '家用电器' ? '家电' : '废纸' }}</text>
      <view class="subcategory-options">
        <view 
          v-for="(item, index) in subcategories" 
          :key="item" 
          class="subcategory-item" 
          :class="{ active: selectedSubcategory === item }"
          @click="selectSubcategory(item)">
          {{ item }}
        </view>
      </view>
    </view>

    <!-- 规格选择 -->
    <view class="section" v-if="selectedSubcategory && specifications.length">
      <text class="section-title">规格</text>
      <view class="spec-options">
        <view 
          v-for="(spec, index) in specifications" 
          :key="spec" 
          class="spec-item" 
          :class="{ active: selectedSpec === spec }"
          @click="selectSpec(spec)">
          {{ spec }}
        </view>
      </view>
    </view>

    <!-- 估计重量输入 (仅在废纸选项时显示) -->
    <view class="section" v-if="selectedCategory === '废纸'">
      <text class="section-title">输入预计重量</text>
	   <view class="weight-selector">
	      <!-- 减少重量按钮 -->
	      <button class="weight-btn" @click="decreaseWeight">-</button>
	  
	      <!-- 显示重量范围 -->
	      <text class="weight-display">{{ weightRange }}</text>
	  
	      <!-- 增加重量按钮 -->
	      <button class="weight-btn" @click="increaseWeight">+</button>
	    </view>
    </view>

	<!-- 是否可正常使用 -->
	<view class="section" v-if="selectedCategory === '家用电器' && specifications.length">
		<!-- 标题 -->
		<text class="section-title">是否可正常使用</text>
		
		<view class="radio-group">
		  <!-- 第一个选项 -->
		  <label class="radio-item" @click="selectOption('正常使用')">
			<text>可正常使用</text>
			<view class="radio-circle">
			  <view v-if="selectedOption === '正常使用'" class="selected"></view>
			</view>
		  </label>
		  <!-- 第二个选项 -->
		  <label class="radio-item" @click="selectOption('不可正常使用')">
			<text>不可正常使用</text>
			<view class="radio-circle">
			  <view v-if="selectedOption === '不可正常使用'" class="selected"></view>
			</view>
		  </label>
		</view>
	</view>

    <!-- 图片上传框 -->
    <view class="section" v-if="selectedCategory">
      <text class="section-title">上传图片</text>
      <view class="image-upload-container">
        <!-- 前三个已有的图片占位符 -->
        <view class="image-placeholder" v-for="item in imageRange" :key="n">
          <image :src="item" alt="已上传图片" class="image-preview" />
        </view>
        <!-- 图片上传按钮 -->
        <view class="upload-placeholder" @click="openSheet">
			upload
        </view>
      </view>
    </view>
	
    <!-- 确定按钮 -->
    <view class="confirm-btn" v-if="selectedCategory" @click="submitForm">确定</view>
  </view>
  
  <!-- 拍照弹出 -->
  <view>
  		<uv-action-sheet 
  		ref="actionSheet"
  		:actions="list" 
  		@select="select"
		cancelText="取消"
		safeAreaInsetBottom="true"
		round="10px"
  		@close="close">
  		</uv-action-sheet>
  	</view>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: '废纸' },
        { id: 2, name: '家用电器' }
      ],
      subcategories: [],
      selectedCategory: '', // 初始时没有选中任何分类
      selectedSubcategory: '',
      weight: '10-15', // 默认重量
      specifications: [],
      selectedSpec: '',
      applianceOptions: {
        '家用电器': ['电视机', '洗衣机', '冰箱','.......'],
        '废纸': ['纸壳', '报纸']
      },
      specOptions: {
        '电视机': ['14寸', '17寸', '19寸', 
		'21寸','23寸','25寸','27寸',
		'29寸','31寸','33寸','35寸','37寸','39寸'],
        '冰箱': ['小型', '中型', '大型'],
        '洗衣机': ['滚筒', '波轮']
      },
      imageRange: ['../static/下单页默认货品图@1x.png',
	  '../static/下单页默认货品图@1x.png',
	  '../static/下单页默认货品图@1x.png'], // 图片预览的 URL
	   // 重量范围数组
	  weightRanges: ['0-5kg', '5-10kg', '10-15kg', '15-20kg', '20-25kg'],
	  currentIndex: 2, // 默认显示 '10-15kg'
	  selectedOption: '正常使用', // 默认选中 "正常使用"
	  list: [{
			name: '拍照',
			fontSize: '18'
		  }, {
			name: '从手机相册选择',
			fontSize: '18'
		  }]
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category.name;
      this.subcategories = this.applianceOptions[category.name] || [];
      this.selectedSubcategory = '';
      this.specifications = [];
      this.selectedSpec = '';
    },
    selectSubcategory(item) {
      this.selectedSubcategory = item;
      this.specifications = this.specOptions[item] || [];
    },
    selectSpec(spec) {
      this.selectedSpec = spec;
    },
    openSheet() {
		this.$refs.actionSheet.open();
	},
	select(e){
		console.log('选中该项：',e);
	},
	close(){
		console.log('关闭');
	},
    submitForm() {
		this.$emit('close')
      console.log('提交表单:', {
        selectedCategory: this.selectedCategory,
        selectedSubcategory: this.selectedSubcategory,
        selectedSpec: this.selectedSpec,
        weight: this.weight,
        imageRange: this.imageRange,
		selectedOption:this.selectedOption
      });
    },
	// 减少重量
	decreaseWeight() {
	  if (this.currentIndex > 0) {
		this.currentIndex--;
	  }
	},
	// 增加重量
	increaseWeight() {
	  if (this.currentIndex < this.weightRanges.length - 1) {
		this.currentIndex++;
	  }
	},
    selectOption(option) {
        this.selectedOption = option;
    }
  },
  computed: {
      // 当前显示的重量范围
      weightRange() {
        return this.weightRanges[this.currentIndex];
      }
    },
};
</script>

<style scoped>
.container {
  padding: 0 15px;
  background: #fff;
  height: 486px;
  overflow-y: auto;
  border-radius: 10px 10px 0px 0px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.close-icon {
  font-size: 24px;
  cursor: pointer;
}

.section {
  margin-top: 20px; /* 加大小标题和内容的间距 */
}

.section-title {
	display: block;
  font-size: 14px;
  color: #888;
  margin-bottom: 10px; /* 增加间距 */
}

.category-options, .subcategory-options, .spec-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-item, .subcategory-item, .spec-item {
  width: 80px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  cursor: pointer;
}

.active {
  border-color: #28a745;
  background-color: #28a745;
  color: white;
}

/* 新增加的重量选项 */
.weight-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 264px;
  height: 35px;
  margin: 0 auto;
}

.weight-btn {
  width: 32px;
  height: 100%;
  background-color: white;
  font-size: 14px;
  text-align: center;
  line-height: 35px;
  border: 0px;
  /* border-right: 1px solid #ddd; */
  cursor: pointer;
}

.weight-btn:last-child {
	
}

.weight-display {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

/* 单选框 */
.radio-group {
  border: 1px solid #101010;
  border-radius: 5px;
  overflow: hidden;
}

.radio-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #101010;
  cursor: pointer;
}

.radio-item:last-child {
  border-bottom: none;
}

.radio-circle {
  width: 24px;
  height: 24px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected {
  width: 17px;
  height: 17px;
  background-color: #2EC076;
  border-radius: 50%;
}

/* 上传图片 */

.image-upload-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 20px;
}

.image-placeholder, .upload-placeholder {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ddd;
}

.image-preview {
  width: 60.26px;
  height: 60.26px;
  object-fit: cover;
  /* border-radius: 4px; */
}

.confirm-btn {
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border-radius: 5px;
}
</style>
