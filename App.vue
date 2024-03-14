<script>
import {wxLogin} from './api/api'

export default {
  onLaunch: function () {
    let that = this
    console.log('App Launch')
    uni.getProvider({
      service: "oauth",
      success: function (res) {
        setTimeout(function () {
          that.$store.commit('setToken', "test_token");
          console.log("this.$store.getToken", that.$store.getters.getToken)
        }, 2000)
      }
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/*每个页面公共css */
.page {
  width: 100%;
  height: 100vh;
  background-color: #f3f4f6;
  overflow: auto;

  .no_more_style {
    font-size: 22rpx;
    color: rgba(0, 0, 0, .2);
    text-align: center;
    margin: 10px 0;
  }
}
</style>