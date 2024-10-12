<template>
    <view class="content">
      <map style="width: 100%; height: 90vh;" :layer-style='5'  :style="{height:mapheight}" :show-location='true'  :latitude="latitude" :longitude="longitude" :scale="scale">
    
       </map>
    </view>
</template>

<script>
    export default {
        data() {
            return {
              latitude:23.106574, //纬度
              longitude:113.324587,//经度
              scale:13,//缩放级别
              bottomData:false,
          }
  }                                          
}       
</script>
