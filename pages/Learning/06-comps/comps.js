
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
  },
  /**
  直接操作组件内的属性或者方法
  * 首先获取到组件对象: const cpn = this.selectComponent("#id/.class")
  * 其次调用组件对象的setData方法: cpn.setData({..})
  **/
  increase(){
    const mySel = this.selectComponent('#my-sel')
    mySel.setData({
      sum: mySel.data.sum + 1
    })

  }
})