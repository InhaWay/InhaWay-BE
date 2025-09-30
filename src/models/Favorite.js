const mongoose = require("mongoose");

// 즐겨찾기 스키마 정의
const favoriteSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  target_type: {
    type: String,
    // eunm : 정해진 값만 허용
    enum: ["building", "classroom"],
    required: true,
  },
  target_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "target_type", // target_type에 따라 참조 모델이 동적으로 결정됨
  },
  target_name: {
    type: String,
    required: true,
  },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;