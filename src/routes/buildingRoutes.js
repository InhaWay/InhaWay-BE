const express = require('express');
const router = express.Router();
const buindingController = require('../controllers/buildingController');

// GET /api/buildings - 전체 건물 목록 조회
router.get('/', buildingController.getAllBuildings);

// GET /api/buildings/:id - 특정 건물 조회
router.get('/:id', buildingController.getBuildingById);

module.exports = router;