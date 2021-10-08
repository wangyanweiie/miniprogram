
Component({
  methods: {
    addCount(){
      //通过 triggerEvent 发出自定义事件,让使用该组件的页面监听到;
      //* this.triggerEvent('事件名',{参数对象},{options})
      this.triggerEvent('addCount',{name:'July',age:18})
    }
  }
})
