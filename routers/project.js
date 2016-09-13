var express = require('express');
var path = require('path');
var app = express();
var project = express.Router();
var Controller = require('../controllers/projectController.js');
var bodyParser = require('body-parser');

//router는 project 입니다.

project.get('/', function(req, res){
  res.send("/project/");
  //프로젝트 초기화면
});

project.post('/save/:id', function(req, res){
  res.send(id+"를 저장함");
  //프로젝트 저장하는 부분
});

project.get('/add', function(req, res){
  //req.session.email 없으면 예외처리 해주장 -> 해결함
  //Controller로 뺄까? -> ㄴㄴ 일단 여기다
  var email = req.session.email;
  if (email){ //세션, 이메일이 있는경우
    res.render('createProject', {url : "test"});
  }
  else { //세션이 없는경우
    //TODO 로그인해달라고 alert 하고, 로그인 창으로 리다이렉팅하기
    res.send("<script> alert('로그인을 해주시기 바랍니다.'); location.href='/user/signin'; </script>")
  }
});

project.post('/add', function(req, res){
  //project 생성하는 부분
  //body -> owner: String, contents: String, projectname:String, xml:String
  Controller.addProject(req, res);
});

module.exports = project;
