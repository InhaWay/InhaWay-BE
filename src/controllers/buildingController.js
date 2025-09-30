/*
* Controller 
* 실제 일을 처리하는 곳으로 DB에서 데이터 가져오고 응답 만들어서 보냄
*/

const building = require("../models/Building");

// 전체 건물 목록 조회
exports.getAllBuildings = async (req, res) => {
  try {
    const buildings = await building.find();
    res.json({
      success: true,
      data: buildings,
    });
  } catch (err){
    res.status(500).json({
      success: false,
      message: "건물 목록 조회 실패",
      error: err.message,
    })
  }
};

// 특정 건물 조회
exports.getBuildingById = async(req, res) => {
  try {
    const building = await building.findById(req.params.id);

    if(!building) {
      return res.status(404).json({
        success: false,
        message: "건물을 찾을 수 없습니다."
      });
    }
    res.json({
      success: true,
      data: building
    });
  } catch(err) {
    res.status(500).json({
      sucess: false,
      message: "건물 조회 실패",
      error: err.message
    })
  }
}