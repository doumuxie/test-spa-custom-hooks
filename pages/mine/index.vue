<template>
  <view class="page">


  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  onTokenLoad() {
    console.log("onTokenLoad 触发")
    this.log()
  },
  methods: {
    click(name) {
      this.$refs.uToast.success(`点击了第${name}个`)
    },
    log() {
      console.log("触发自定义方法")
    },
  }
}
</script>


<style lang="scss">
.top_view {
  width: calc(95% - 0rpx);
  height: calc(32vh - 40rpx);
  background-color: rgb(59, 59, 59);
  margin: 10px auto;
  border-radius: 8px;
  position: relative;

  .heard_row {
    display: flex;
    align-items: center;
    padding: 20rpx;

    .heard_circle {
      width: 100rpx;
      height: 100rpx;
      background-color: #fff;
      border-radius: 50%;
    }

    .heard_text {
      margin-left: 5px;
      color: #fff;
      font-size: 30rpx;
    }
  }

  .info_view {
    background-color: rgb(63, 63, 63);
    position: absolute;
    bottom: 0;
    border-radius: 8px;

    .num_view {
      color: #fff;
    }
  }

  .withdraw {
    // width: 100px;
    display: flex;
    background: linear-gradient(to right, #e78e40, #f7d58e);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: absolute;
    right: 0;
    top: 25px;
    color: #fff;
    font-size: 30rpx;
    padding: 2px 10px;

    .img_view {
      width: 30rpx;
      height: 30rpx;
      margin-right: 5px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.grid-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  padding: 5rpx 0 10rpx 0rpx;
  /* #ifndef APP-PLUS */
  box-sizing: border-box;
  /* #endif */
}

.cont_view {
  width: calc(95% - 40rpx);
  height: 62vh;
  background: #fff;
  border-radius: 8px;
  // margin-top: 10px;
  margin: 10px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20rpx;

  .set_list_view {
    width: 100%;
    padding: 12px 0;
    // border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img_class {
      width: 40rpx;
      height: 40rpx;
      margin-right: 20rpx;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .left {
      display: flex;
      align-items: center;
    }
  }
}
</style>