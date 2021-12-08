var homedir = "./home";
var workdir = "./jikken";
var path = require('path')
var express = require('express')
var session = require('express-session')
var home = express()
var work = express()
var mall = require(workdir+'/mall/mall.js')

var application={}
work.use(session({
  secret: 'web enshu.c.tdu',
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false,
	      maxage: 1000*60*30}
}))
work.engine('.ejs',require('ejs').renderFile)
work.set('views', workdir)
work.set('view engine', 'ejs')
work.get('/(.*\.ejs)', function(req, res) {
    console.log("1 "+req.path)
    res.render(req.path.substr(1),{application: application, req: req.query, res: res, session: req.session});
});
work.use('/',express.static(workdir))
work.use(express.json())
work.use(express.urlencoded({ extended: true }))
work.post('/(.*)/mall.ejs', function(req, res) {
    console.log("2 "+req.path)
    var p = /\/(.*\/)[^\/]*/.exec(req.path)[1];
    if(mall.auth(application, req.body, res, req.session)){
	res.redirect("mallbody.ejs");
    }else{
	res.redirect("login.ejs");
    }
});
work.post('/.*', function(req, res) {
    console.log("3 "+req.path)
    res.render(req.path.substr(1),{application: application, req: req.body, res: res, session: req.session});
});
home.use(express.static(homedir))
home.use('/jikken/',work)
home.listen(8000)
console.log('server starts.');
