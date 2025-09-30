const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

// 건물 스키마 정의
const buildingSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  code: {
    type: String,
    required: true,
  },
  // 건물 좌표(위도, 경도)
  coordinates: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  }, 
  entrance_coordinates: {
    name: String,
    lat: Number,
    lng: Number
  }
})

const Building = mongoose.model('Building', buildingSchema);
module.exports = Building;