console.log('Loaded!');

var element=element.getElementById('main-text');
element.innerHTML='This is a newexample on JS';
var img=document.getElementById('madi');
/*var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft='px';
}*/
img.onclick=function(){
    img.style.marginLeft='100px';
    
  // var interval=setInterval(moveRight,50);
};