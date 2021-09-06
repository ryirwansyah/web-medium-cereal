var express = require('express');
var router = express.Router();
var serialize = require('node-serialize')

/* GET users listing. */
router.get('/', function(req, res, next) { 
  console.log(req.cookies.token)
  if (!req.cookies.token) res.cookie("token", "eyJpZCI6IDY2NiwgInVzZXJuYW1lIjogImpvaG4gcGFudGF1IiwgImFsYW1hdCI6Ik1hbXBhbmcsIEpha2FydGEgU2VsYXRhbiIsICJ0ZWxwIjoiMDg1MjIxMjMxMjMxMiJ9Cg==", {
    maxAge: 900000,
    httpOnly: true
  });
    
  var token = req.cookies.token
  var str = atob(token);
  var obj = serialize.unserialize(str);
    if (obj.username) {
      res.send("Selamat Datang " + obj.username + " !!!");
    }
 });

module.exports = router;
