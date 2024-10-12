<template>
	<EditAddressItem></EditAddressItem>
	<AddressItem :isShow="true"></AddressItem>
</template>

<script setup >
	import AddressItem from '@/components/AddressItem.vue';
	import EditAddressItem from '@/components/EditAddressItem.vue';
</script>

<style scoped lang="scss">
</style>