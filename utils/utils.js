export const initNavigation = () => {
  uni.getSystemInfo({
    success: (e) => {
      // 获取右侧胶囊的信息 单位px
      let navbarInfo = {
        navbarPaddingTop: 0,
        navbarHeight: 0
      }
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
      const menuHeight = menuButtonInfo.height
      const menuBottomTo = menuButtonInfo.bottom
      const menuTopTo = menuButtonInfo.top
      navbarInfo.navbarPaddingTop = menuTopTo + 'px'
      navbarInfo.navbarHeight = menuHeight + 'px'
      return JSON.parse(navbarInfo)
    }
  })
}
