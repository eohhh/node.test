// app.js
const express = require('express'); // express의 모듈을 불러옴.
// 예시.. 카카오톡 앱을 깔면 메시지를 보낼 수 있음 (require)
const app = express();

app.listen(5000, ()=> { // listen(5000)은 **"5000번 포트에서 요청을 기다린다"**
  console.log('5000port Start!!')
  console.log('localhost:5000')
});

// 미들웨어 등록. // app.use() => 미들웨어 등록하는 역할. // express.urlencoded => 폼 데이터를 파싱.
app.use(express.urlencoded({ extended : false })); // 폼데이터 처리용 // extende가가 false기 때문에 객체 안에 객체를 사용 X 
app.use(express.json()); // json 데이터 처리용. (json데이터 파싱.)

// 라우터 고유 경로 설정
const empRouter = requirE('./router/emp_router.js');
app.use('/', empRouter);








/**************************************** Router 쓰기전전******************************************/
// 단건조회 GET + '/emps/100
// app.get('/emps/:empId', (req, res)=> { // : 이거는 &..
//   let searchId = req.params.empId
//   let info = query('SELECT', null, { id : searchId});
//   res.send(info[0]);
// });

// // app.post() , 등록. => 등록은 전체 정보가 필요함
// app.post('/emps', (req, res)=> {
//   let addInfo = req.body;
//   query('INSERT', addinfo);
//   res.send({'result' : 'success'});
// });

// // app.put , 수정
// app.put('/emps/:empd', (res, req)=> {
//   let searchId = req.params.empd;
//   let updateInfo = req.body;
//   query('UPDATE', updateInfo, {id : searchId});
//   res.send({'result' : 'success', 'id' : searchId});
// });

// // app.delete(); 삭제
// app.delete('/emps/:empId', (req, res)=> {
//   let searchId = req.params.empId;
//   query('DELETE', null, {id : searchId});
//   res.status(204).send('Complete');
// });
/**************************************** Router 쓰기전전******************************************/