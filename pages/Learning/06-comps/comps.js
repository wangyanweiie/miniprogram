
Page({
  data: {
    count: 0
  },
  //监听到自定义事件的响应事件: 参数自动保存在event对象中
  addCount(event){
    this.setData({
      count: this.data.count + 1
    });
    console.log(event);
  }
})