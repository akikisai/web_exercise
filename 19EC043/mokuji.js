function mokuji(){
    const nav = document.getElementById('mokuji');
    const elem =document.getElementsByTagName("*");
    const regex = new RegExp('^H[1-6]');
    const mokuji = document.createElement('ol');
    const m=elem.length;
    for (var i=0; i< m; i++){
	if(regex.test(elem[i].nodeName)){
	    elem[i].setAttribute('id',i); 
	    var item = document.createElement('li');
	    var anker = document.createElement('a');
	    anker.setAttribute('href',"#"+i);
	    var c=elem[i].childNodes;
	    for(var j=0; j< c.length; j++){
		anker.appendChild(c[j].cloneNode(true));
	    }
	    item.appendChild(anker);
	    mokuji.appendChild(item);
	}
    }
    nav.appendChild(mokuji);
}


    
