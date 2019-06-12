import { classic_beh } from '../classic-beh.js'

Component({

  behaviors: [classic_beh],
  /**
   * 组件的属性列表 
   */
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
