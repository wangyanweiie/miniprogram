// pages/home/home.js
Page({
  //*****************页面的初始数据*****************
  data: {
    name: "wangyanwei",
    movies: [
      {id: 110, name: '大话西游', star: '周星驰'},
      {id: 111, name: '澳门风云', star: '周润发'},
      {id: 112, name: '唐人街探案', star: '王宝强'},
      {id: 113, name: '肖申克的救赎', star: 'Tim Robbins'}
      ],
    count:0,
  },
  addCount(){
    //1.错误方法: 无法监听到内部属性的变化(直接修改无法实时响应)
    //this.data.count++;
    //2.正确方法: 通过this.setData({})
    this.setData({
        count: this.data.count + 1
    })
  },
  subCount(){
    this.setData({
        count: this.data.count - 1
    })
  },


  //*****************生命周期函数--监听页面加载*****************
  onLoad: function (options) {

  },

  //生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  //生命周期函数--监听页面显示
  onShow: function () {

  },

  //生命周期函数--监听页面隐藏
  onHide: function () {

  },

  //生命周期函数--监听页面卸载
  onUnload: function () {

  },

  //***********页面相关事件处理函数--监听用户下拉动作***********
  onPullDownRefresh: function () {

  },

  //页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  //用户点击右上角分享
  onShareAppMessage: function () {

  }
})