var colors =getAr(6);
var squares= document.querySelectorAll(".square");
var cl = Math.floor(Math.random() * 6);
var col = colors[cl];
var sp =document.getElementById("hg");
var target =document.getElementById("target");
var hone =document.querySelector("h1");
target.textContent=col;
for(var i=0; i < squares.length ; i++){
    squares[i].style.background = colors[i];
     }
for( var i=0 ;i < squares.length ;i++ ){
squares[i].addEventListener("click",function(){
    var nwc =this.style.background;
    if(nwc===col){
        sp.textContent="correct";
        func();
    }
    else{
        sp.textContent="try again";
        this.style.background = "#123545" ;
    }
})
}
function func(){
    for(var i=0; i < squares.length ; i++){
        squares[i].style.background = col;
         }
         hone.style.background = col;

}

function getAr(num){
                     var arr = []
                      for(var i=0; i < num ; i++){
        
                                 arr.push(arRr()) } 
                            return arr;
                      }

function arRr(){
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", "+ b + ")" ;
               }
    