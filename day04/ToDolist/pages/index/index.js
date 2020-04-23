//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    list:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //添加
  add(){
    const obj=new Object()
    obj.text=this.data.msg,
    obj.check=false
    this.data.list.push(obj)
    this.setData({
      list:this.data.list,
      msg:''
    })
    wx.setStorage({
      data: this.data.list,
      key: 'msg',
    })
  },
  //选中，取消
  updata(e){
    let ind=e.target.dataset.val
      this.data.list[ind].check=!this.data.list[ind].check
      this.setData({
        list:this.data.list
      })
      wx.setStorage({ //本地存储
        data:this.data.list, 
        key: 'msg',
      })
  },
  // 页面显示
  onShow: function () {
    var msg =wx.getStorageSync('msg')
    if(msg!=[]){
      this.setData({
        list:msg
      })
    }

  },







  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
