var express = require('express');
var router = express.Router();
var serialize = require('node-serialize')

/* GET users listing. */
router.get('/', function(req, res, next) { 
  
 
  try {
    console.log(req.cookies.token)
    if (!req.cookies.token) res.cookie("token", "eyJpZCI6IDY2NiwgInVzZXJuYW1lIjogImpvaG4gcGFudGF1IiwgImFsYW1hdCI6Ik1hbXBhbmcsIEpha2FydGEgU2VsYXRhbiIsICJ0ZWxwIjoiMDg1MjIxMjMxMjMxMiJ9Cg==", {
      maxAge: 900000,
      httpOnly: true
    });
    var token = req.cookies.token
    var str = new Buffer(token, "base64").toString();
    var obj = serialize.unserialize(str);
      if (obj.username) {
        res.send("Selamat Datang " + obj.username + " !!!");
      }else {
        res.json({'status' : '500', 'message' : 'its an error'})
      }
  } catch (error) {
    res.json({'status' : '500', 'message' : 'its an error'})
    next(error)
  }
 
 });

module.exports = router;
