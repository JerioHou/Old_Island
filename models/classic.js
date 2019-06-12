import {
  HTTP
} from '../utils/http.js'

class ClassicModel extends HTTP {
  getLatest(sCallBack) {
    this.request({
      url: 'classic/latest',
      success: (data) => {
        this._setLatestIndex(data.index)
        sCallBack(data)
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallBack) {
    this.request({
      url: 'classic/' + index + '/' + nextOrPrevious,
      success: (res) => {
        sCallBack(res)
      }
    })
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    return wx.getStorageSync('latest')
  }

  isFirst(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true :false
  }


}

export {
  ClassicModel
}