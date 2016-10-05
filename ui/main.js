console.log('Loaded!');
//changing the text of th main text div
var element=document.getElementById('main-text');

//element.innerHTML='New Value';

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
   
    
   var interval=setInterval(moveRight,100);
};

//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
 if(request.readyState===XMLHttpRequest.DONE){
     if(request.status===200){
         var counter =request.responseText;
       // counter=counter+1;
var span= document.getElementById('count');
span.innerHTML=counter.toString();
     }
 }   
};
request.open('GET','http://vineetha-vijayan.imad.hasura-app.io/counter',true);

request.send(null);
};
//Submit name

var submit=document.getElementById('submit-btn');
submit.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
 if(request.readyState===XMLHttpRequest.DONE){
     if(request.status===200){
var names=request.responseText;
names=JSON.parse(names);
var list='';
for(i=0;i<names.length;i++)
{
    list+='<li>'+names[i]+'</li>';
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;
}
}


};
var nameInput=document.getElementById('name');
var name=nameInput.value;
request.open('GET','http://vineetha-vijayan.imad.hasura-app.io/submit-name?name='+name,true);

request.send(null);
};



