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