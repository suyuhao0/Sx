// pages/achieve/achieve.js
Page({
  data: {
    achieve:[],
  },
upda(e){
  console.log(e)
  let indx=e.target.dataset.ind
  console.log(indx)
  this.data.achieve[indx].check=!this.data.achieve[indx].check
  this.setData({
    achieve:this.data.achieve
  })
      wx.setStorage({
      data:this.data.achieve, 
      key: 'msg',
    })
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var msg =wx.getStorageSync('msg')
    console.log(msg)
    if(msg!=[]){
      this.setData({
        achieve:msg,
      })
    }
  },
// 页面隐藏生命周期函数
  onHide: function () {

  },
  //生命周期函数--监听页面卸载
  onUnload: function () {

  },
})