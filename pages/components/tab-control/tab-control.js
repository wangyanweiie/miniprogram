
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
      const index = event.currentTarget.dataset.index;
      const title = this.properties.titles[index];
      //1.更新currentIndex: 传递的index索引保存在event对象中
      this.setData({
        currentIndex: index
      })
      //2.通知home页面发生了点击,并传递点击的索引与标题
      this.triggerEvent('itemClick',{index,title})
    }
  }
})
