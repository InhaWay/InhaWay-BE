const monngoose = require('mongoose');

// 경로 폴리라인 스키마 정의
const routePathSchema = new mongoose.Schema({
    // 경로 검색용 키(예: 1호관 -> 7호관)
    route_key: {
      type: String,
      required: true,
      unique: true
    },
    // 출발 건물 정보
    start_building: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building',
        required: true
      },
      name: String,
      entrance_name: String,
      coordinates: {
        lat: Number,
        lng: Number,
      }
    },
    // 도착 건물 정보
    end_building: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building',
        required: true,
      },
      name: String, 
      entrance_name: String,
      coordinates: {
        lat: Number,
        lng: Number,
      }
    },
    // 폴리라인 좌표 배열
    path: [{
      lat: Number,
      lng: Number,
      order: Number,
    }],
    distance: Number,
    estimated_time: Number, 
})

const RoutePath = mongoose.model("RoutePath", routePathSchema);
module.exports = RoutePath;