 window.onload = function(){
    var imgs = document.getElementById('imgs');
    var banner = document.getElementById('banner');
    var tit = document.getElementById("tit");
    var content = document.getElementById('content');
    var titles = tit.getElementsByTagName('li');
    var contents = content.getElementsByTagName('div');

    banner.onmouseout = function(){
    	imgs.src ="imgs/2012041411433867.jpg";
    	imgs.style.border = "1px solid #F92672";
    	banner.style.background ="#DD4E42";
    } 
    banner.onmouseover = function(){
    	imgs.src ="imgs/1G0323119-12.jpg";
    	imgs.style.border = "2px solid #D4D515";
    	banner.style.background ="#AC76B0";
    }
    for(var i = 0; i < titles.length ; i++){
    	titles[i].index = i;
     	titles[i].onmouseover=function(){
    		for (var j = 0;j < titles.length ; j++) {
    			titles[j].className="";
    			contents[j].style.display="none";
    		}
    		this.className="active";
    		contents[this.index].style.display="block";
    	}
    }
}


 