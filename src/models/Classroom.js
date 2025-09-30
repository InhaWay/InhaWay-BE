const mongoose = require('mongoose');

// 강의실 스키마 정의 
const classroomsSchema = new mongoose.Schema({
  building_id: {
    type: mongoose.Schema.Types.ObjectId,
    // 'Building' 모델의 ObjectId를 참조
    ref: 'Building',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  floor: {
    type: Number, 
    required: true
  }
});

const Classroom = mongoose.model('Classroom', classroomsSchema);
module.exports = Classroom;