// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(newVal,oldVal,changePath) {
        if (newVal < 10) {
            this.setData({
              _index: "0"+newVal
            })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月','十二月'
    ],
    year: Number,
    month: String,
    _index: String
  },

  ready:function() {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    this.setData({
      year: year,
      month: this.data.months[month]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
