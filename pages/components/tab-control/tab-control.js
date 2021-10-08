
Component({
  //组件通信: 传递要显示的标题
  properties: {
    titles:{
      type:Array,
      value:[],
    }
  },
  data:{
    currentIndex:0,
  },
  methods:{
    itemClick(event){
      this.setData({
        //更新currentIndex: 传递的index索引保存在event对象中
        currentIndex: event.currentTarget.dataset.index
      })
    }
  }
})
