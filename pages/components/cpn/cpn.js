
Component({

  /* styleIsolation: 设置组件内样式与引入组件的页面样式是否相互影响
   * isolated      默认值,两者互不影响;
   * shared        两者相互影响;
   * apply-shared  引入组件的页面样式可以影响到组件内部,反之不可以;
  */
  options:{
    styleIsolation:"isolated"
  },

  /* 组件通信: 传递数据
   * 方式1=> title:String   设置类型
   * 方式2=> title:{}       对象中可以设置类型与默认值,监听值的改变;*/
  properties: {
    title:{
      type:String,
      value:"Hello",
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal);
      }
    }
  },
  //组件通信: 传递样式
  externalClasses:['title-class'],

  //组件的初始数据
  data: {

  },

  // 组件的方法列表
  methods: {

  }
})
