//index.js
//获取应用实例
const app = getApp()

Page({
  
  onLoad(){
    wx.request({
      url: 'https://ch3nnn.cn/api/petLostCode/v1/getPetInfo',
      enableCache: true,
      enableHttp2: true,
      enableQuic: true,
      header:  {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      timeout: 0,
      success: (result) => {
        this.setData(result.data)
        console.info(result)
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  }
  
})
