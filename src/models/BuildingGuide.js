const mongoose = require("mongoose");

// 건물 내부 안내 스키마 정의
const buildingGuideSchema = new mongoose.Schema({
  building_id: {
    type: mongoose.Schema.Types.ObjectId,
    // 'Building' 모델의 ObjectId를 참조'
    ref: "Building",
    required: true,
  },
  building_name: {
    type: String,
    required: true,
  },
  entrance_guide: {
    main_entrance: String,
    alternative_entrance: [
      {
        name: String,
        description: String,
      },
    ],
  },
  floor_guides: {
    // dictionary 형태로 층별 안내 저장
    type: Map,
    of: new mongoose.Schema(
      {
        from_entrance: String,
        description: String,
        landmarks: [String],
        facilities: [String],
        special_note: String,
        route_steps: [
          {
            step: Number,
            instruction: String,
            location: String,
          },
        ],
      },
      { _id: false }
    ),
  },
  general_guide: String,
});

const BuildingGuide = mongoose.model("BuildingGuide", buildingGuideSchema);

module.exports = BuildingGuide;