<template>
	<view class="page">
		<view class="tabs_view">
			 <u-tabs :list="TabList" @click="click" itemStyle="width: 50%;padding-left: 0px; padding-right: 0px; height: 34px;"></u-tabs>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			TabList: [{
					name: '等待出价',
			}, {
					name: '已中标',
			}],
			list: [
				{},{},
			]
		}
	},
  onToken(){
    console.log("Token 触发")
    this.log()
  },
	methods: {
		click(item) {
				console.log('item', item);
		},
    log(){
      console.log("触发自定义方法")
    },
	}
}
</script>

<style lang="scss">
	.tabs_view{
		width: 100%;
		background-color: #fff;
	}
	.list_view_class{
		padding: 10px;
		.list_item_class{
			padding: 10px;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			margin-bottom: 10px;
			background: #fff;
			border-radius: 4px;
			display: flex;
			align-items: center;
			.left{
				width: 190rpx;
				height: 250rpx;
				background: orangered;
				margin-right: 20rpx;
			}
			.right{
				width: calc(100% - 210rpx);
				height: 250rpx;
				.right_row{
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}
		}
	}
</style>