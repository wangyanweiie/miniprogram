
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
  * 方式1：直接访问属性
    - 首先获取组件对象: const cpn = this.selectComponent("#id/.class")
    - 其次调用其setData方法: cpn.setData({..})
  * 方式2：直接访问方法
    - 首先将需操作的属性通过方法统一暴露出去
    - 其次获取组件对象: const cpn = this.selectComponent("#id/.class")
    - 最后调用其自身的方法: cpn.方法名
  **/
  increase(){
    const mySel = this.selectComponent('#my-sel')
    //mySel.setData({sum: mySel.data.sum + 1})
    mySel.increaseSum(5)
  }
})