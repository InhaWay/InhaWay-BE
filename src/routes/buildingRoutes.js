/*
* Routes 
* 주소(URL) 설정하는 곳
* 어떤 주소로 요청이 오면 어떤 컨트롤러(기능)를 실행할지 설정
*/

const express = require('express');
const router = express.Router();
const buindingController = require('../controllers/buildingController');

// GET /api/buildings - 전체 건물 목록 조회
router.get('/', buildingController.getAllBuildings);

// GET /api/buildings/:id - 특정 건물 조회
router.get('/:id', buildingController.getBuildingById);

module.exports = router;