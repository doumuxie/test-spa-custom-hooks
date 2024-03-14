<template>
  <view class="page">
    <view class="tabs_view">
      <u-tabs :list="list1" @click="click"
              itemStyle="width: 25%;padding-left: 0px; padding-right: 0px; height: 34px;"></u-tabs>
    </view>
    <u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png" text='暂无数据'></u-empty>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list1: [{
        name: '全部订单',
      }, {
        name: '待出订单',
      }, {
        name: '出单成功',
      }, {
        name: '失败订单',
      }]
    }
  },
  onToken() {
    console.log("Token 触发")
    this.log()
  },
  methods: {
    click(item) {
      console.log('item', item);
    },
    log() {
      console.log("触发自定义方法")
    },
  }
}
</script>

<style>
.tabs_view {
  width: 100%;
  background-color: #fff;
}
</style>