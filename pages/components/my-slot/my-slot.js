// pages/components/my-slot/my-slot.js
Component({
  /**
  组件的配置项
  * multipleSlots: true         设置是否可以使用多插槽
  * styleIsolation:"isolated"   设置组件与页面样式是否相互影响
  **/
  options:{ 
    multipleSlots: true
  },
  //组件通信: 传递数据
  properties: {
  },
  //组件通信: 传递样式
  externalClasses:[
  ],
  //组件内部的初始数据
  data: {
  },
  //组件内部的方法列表
  methods: {
  },
  //监听properties/data中数据的改变
  observer:{
  },
  //监听生命周期函数: 组件本身的生命周期/所在页面的生命周期
  //1.页面的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示时')
    },
    hide(){
      console.log('监听组件所在页面隐藏时')
    },
    resize(){
      console.log('监听组件所在页面尺寸改变时')
    }
  },
  //2.组件本身的生命周期
  lifetimes:{
    created(){
      console.log('监听组件被创建时')
    },
    attached(){
      console.log('监听组件被添加到页面时')
    },
    ready(){
      console.log('监听组件被渲染时')
    },
    moved(){
      console.log('监听组件被移动时')
    },
    detached(){
      console.log('监听组件被移除时')
    }
  }
})
