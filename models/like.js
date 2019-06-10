import {
  HTTP
} from '../utils/http.js'

class LikeModel extends HTTP {

  like(like_or_cancel, art_id, type) {
    let url = like_or_cancel == 'like' ? "like" : "like/cancel"
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: art_id,
        type: type
      },
      success: (res) => {
        console.log(res)
      }
    })
  }
}

export {
  LikeModel
}