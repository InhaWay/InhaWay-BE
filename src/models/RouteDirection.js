const mongoose = require("mongoose");

// 경로별 기본 안내 스키마 정의
const routeDirectionSchema = new mongoose.Schema({
  route_key: {
    type: String,
    required: true,
  },
  route_path_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoutePath",
    required: true,
  },
  directions: [
    {
      step: Number,
      instruction: String,
      description: String,
      landmark: String,
      distance_from_start: Number,
      coordinates: {
        lat: Number,
        lng: Number,
      },
      direction_type: String,
      warning: String,
      image_url: String,
    },
  ],
  created_by: {
    type: String,
    default: "admin",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const RouteDirection = mongoose.model("RouteDirection", routeDirectionSchema);

module.exports = RouteDirection;
