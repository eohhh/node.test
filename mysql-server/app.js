// 모듈생성성
const express = require('express');
const app = express();

// 미들웨어
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// 서버설정
app.listen(3000, () => {
  console.log('Server Start!!');
  console.log('http://localhost:3000');
});

// 라우팅
app.get('/', (req,res) => {
  res.send('Wellcome!');
});

