Component({
  //组件的属性列表
  properties: {

  },

  //组件的初始数据
  data: {
    sum:0
  },
  //组件中的方法
  methods:{
    increaseSum(num){
      this.setData({
        sum: this.data.sum + num
      })
    }
  }
})
