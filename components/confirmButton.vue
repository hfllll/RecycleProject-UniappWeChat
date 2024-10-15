<template>
	<view>
		<button class="comfire" @click="$emit('click')">{{ value }}</button>	
	</view>
	
</template>

<script>
export default{
	props:{
		value:{
			type:String
		}
	}
}

</script>

<style scoped lang="scss">
	.comfire{
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
</style>