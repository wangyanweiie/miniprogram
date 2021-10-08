//获取app.js文件中的App({})产生的示例对象,可以获取全局数据;
const app = getApp();
const name = app.globalData.name;

//注册一个页面
Page({
  //*****************页面的初始数据*****************
  data: {
    name: "网易云音乐",
    count:0,
    homeData:{},      //保存从服务器请求的用户数据
    imagePath:[],     //保存用户上传的图片路径
  },

  //*****************1.页面的生命周期函数*****************
  //监听页面加载
  onLoad(options) {
    //1.发送网络请求获取服务器数据(箭头函数获取到正确的this指向)
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
      success: (res)=>{
        this.setData({
          homeData: res.data.data
        })
      }
    })

  },

  //监听页面初次渲染完成
  onReady() {
  },

  //监听页面显示
  onShow() {
  },

  //监听页面隐藏
  onHide() {
  },

  //监听页面卸载
  onUnload() {
  },

  //*****************2.页面相关事件处理函数*****************
  //监听用户下拉动作
  onPullDownRefresh() {
  },

  //页面上拉触底触发
  onReachBottom() {
  },

  //用户点击右上角分享
  onShareAppMessage() {
  },

  //页面滚动触发: 默认传参滚动的距离
  onPageScroll(obj){
  },

   //*****************3.自定义事件处理函数*****************
   //1.错误方法: this.data.count++; 直接修改无法监听到内部属性的变化(无法实时响应)
   //2.正确方法: 通过this.setData({})修改存放在data中的属性
  addCount(){
    this.setData({
      count: this.data.count + 1
    })
  },
  //通过button获取用户信息
  getUserBtn(event){
    console.log(event)
  },
  //监听图片加载完成
  imgLoad(){
  },
  //通过调用系统API,让用户选择相册图片或拍照;
  getphoto(){
    wx.chooseImage({
      success: (res)=>{
        //保存图片路径
        this.setData({
          imagePath: res.tempFilePaths
        })
      }
    })
  },
  //监听局部滚动的位置
  getScroll(event){
    console.log(event.detail.scrollTop)
  },
  //监听滚动到顶部或者左侧
  scrollToTop(){
    console.log("滚动到顶部")
  },
  //监听滚动到底部或者右侧
  scrollToDown(){
    console.log("滚动到底部")
  }
})