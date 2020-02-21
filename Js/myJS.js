/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *///
var w = ["a","a","b","b"];
 var turns = 0, w1,w2;
  var words=[];
    function wordsFiller(words){
        var count =0;
        var e = document.getElementById("size");
    var n = e.options[e.selectedIndex].value;
        for(let i=0;i<n*n;i++){
            if(i%2===0){
                words[i]="E"+count;
            }else{
                words[i]="I"+count;
                count++;
            }
        }
        shuffle(words);
    }
function tableCreate(){
    var counter = 0;
    var e = document.getElementById("size");
    var n = e.options[e.selectedIndex].value;
 var body = document.body,
 tbl = document.getElementById("table");
 tbl.innerHTML="";
for(var i =0;i<n;i++){    
    var row = tbl.insertRow();
    row.style.height='100px';
    for(var k=0;k<n;k++){
        var cell = row.insertCell();
        cell.style.border = '1px solid black';
        cell.id=''+words[counter];
        cell.setAttribute('class','cell');
        cell.setAttribute('onclick','turn(this.id);');
        counter++;
    }
}
}
function turn(k){
    turns++;
    let n;
    let name=String(k);
    let cell = document.getElementById(k);
    cell.setAttribute('class','selected');
    if(name.substr(0,1)==="E"){
        n=(name.substring(1,name.length)*2);
        
    }else{
        n=(name.substring(1,name.length)*2)+1;
    }
    cell.innerHTML = w[n];
    console.log(n);
    if(turns%2!==0){
         w1=k;
         cell.removeAttribute('onclick');
    }else{
         w2=k;
        check(w1,w2);       
    }
}
function check(w1,w2){
    var l1=w1.length;var l2=w2.length;
    var c1 =document.getElementById(w1), c2 = document.getElementById(w2); 
    var match = false;
    if(l1===l2){
        if(w1.substring(0,1)!==w2.substring(0,1)){
            if(w1.substring(1,l1)===w2.substring(1,l2)){
                match =true;
                c1.removeAttribute('onclick');
                c2.removeAttribute('onclick');
                setTimeout(()=>(c1.setAttribute('class','guessed'),
                c2.setAttribute('class','guessed')),500); 
            }
        }  
    }
    if(match===false){    
        c1.setAttribute('onclick','turn(this.id);');
        setTimeout(()=>reset(),500);  
    }
}
function reset(){
    var c1 =document.getElementById(w1), c2 = document.getElementById(w2); 
        c1.innerHTML="";
        c2.innerHTML="";
        c1.setAttribute('class','cell');
        c2.setAttribute('class','cell');
}
function shuffle(array) {
    var e = document.getElementById("size");
    var n = e.options[e.selectedIndex].value;
  var currentIndex = n*n, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array);
  tableCreate();
}
/*select box code*/
var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
  );
});

$$('.color-picker')[0].on('click', '.square', function(event, square) {
  background = square.getStyle('background');
  $$('.custom-dropdown select').each(function (dropdown) {
    dropdown.setStyle({'background' : background});
  });
});

/*text animation*/
