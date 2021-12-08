function auth(application, req, res, session){
    if(typeof application.usermap == 'undefined'){
	application.usermap={};
    }
    var user;
    console.log(req.id);
    console.log(req.name);
    console.log(application.usermap[req.id]);
    if(typeof application.usermap[req.id] == 'undefined'){
	user={"id":req.id,"name":req.name,"amount":0};
	application.usermap[user.id]=user;
    }else{
	user = application.usermap[req.id];
	if(req.name != user.name){
	    session.errormessage = "Wrong name";
	    return false;
	}
    }
    delete session.errormessage;
    session.user=user;
    return true;
}
exports.auth=auth;

