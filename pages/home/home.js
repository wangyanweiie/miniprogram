Page({
  //*****************页面的初始数据*****************
  data: {
    homeData:{}
  },
  //***自定义事件响应函数***
  //tab-control组件发出自定义事件的响应函数
  titleClick(event){
    console.log(`索引为${event.detail.index}的--${event.detail.title}--发生了点击`);
  },

  //******生命周期函数******
  //监听页面加载
  onLoad(options) {
    //1.发送网络请求获取服务器数据(箭头函数获取到正确的this指向):url地址需要先进行域名配置
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/recommend',
      success: (res)=>{
        this.setData({
          homeData: res.data.data
        })
      }
    })
  }
})