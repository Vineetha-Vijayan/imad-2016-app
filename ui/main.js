console.log('Loaded!');
//changing the text of th main text div
var element=document.getElementById('main-text');

element.innerHTML='New Value';

var img=document.getElementById('madi');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
   
    
   var interval=setInterval(moveRight,50);
};