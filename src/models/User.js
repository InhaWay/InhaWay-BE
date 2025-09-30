const mongoose = require('mongoose');

// 사용자 스키마 정의
const userSchema = new mongoose.Schema({
  kakao_id : {
    type: String,
    required: true,
    unique: true
  },
  name : {
    type: String,
    required: true
  },
  created_at : {
    type: Date,
    default: Date.now
  }
});

// 모델 생성 및 export
const User = mongoose.model('User', userSchema);
module.exports = User;