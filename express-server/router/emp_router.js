const express = require('express');
const router = express.Router();
const { query } = require('../mapper/emp-map.js');

// 단건조회 GET + '/emps/100
router.get('/emps/:empId', (req, res)=> { // : 이거는 &..
  let searchId = req.params.empId
  let info = query('SELECT', null, { id : searchId});
  res.send(info[0]);
});

// app.post() , 등록. => 등록은 전체 정보가 필요함
router.post('/emps', (req, res)=> {
  let addInfo = req.body;
  query('INSERT', addinfo);
  res.send({'result' : 'success'});
});

// app.put , 수정
router.put('/emps/:empd', (res, req)=> {
  let searchId = req.params.empd;
  let updateInfo = req.body;
  query('UPDATE', updateInfo, {id : searchId});
  res.send({'result' : 'success', 'id' : searchId});
});

// app.delete(); 삭제
router.delete('/emps/:empId', (req, res)=> {
  let searchId = req.params.empId;
  query('DELETE', null, {id : searchId});
  res.status(204).send('Complete');
});

module.exprots = router;