require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
// mongoDB는 나중에 연결 할 예정
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB 연결 (나중에 활성화)
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// 기본 라우트 
app.get('/', (req, res) => {
  res.json({message: '인하로운길 백엔드 서버'});
})

// 서버 시작
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행중입니다.`);
})