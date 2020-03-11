/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *///
var w = ["accustom","abituare","welcome","accogliere","realize","accorgersi","beat","battere","burn","bruciare","throw","buttare","hunt","cacciare","occur","capitare","charge","caricare","yield","cedere","declare","denunciare","intend","destinare","proclaim","dichiarare","fulfill","eseguire","expose","esporre","avoid","evitare","prohibit","impedire","engage","impegnare"];
 var turns = 0, w1,w2;
  var words=[];
  var d = new Date();
var n,e,pause=false,t1=d.getTime(),t2=0;
    function wordsFiller(words, sk,index){
        
        document.getElementById("poga").disabled=false;
        document.getElementById("endScreen").style.display='none';
        var count =Math.floor(Math.random() * 18);
         e = document.getElementById("size");
     n = e.options[e.selectedIndex].value;
     if(sk!==0){
         n=sk;
         document.getElementById("size").selectedIndex=index;
     }
        for(let i=0;i<n*n;i++){
            if(i%2===0){
                words[i]="E"+count;
            }else{
                words[i]="I"+count;
                if(count<17){
                    count++;
                }
                else if(count===17){
                    count=0;}
            }
        }
        shuffle(words);
    }
function tableCreate(){
    var counter = 0;
    turns=0;
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
var rect = document.getElementById("table").getBoundingClientRect();
          window.scrollTo(rect.left, rect.top);
}
function turn(k){
    if(pause===false){
        if(turns===0){
            d = new Date();
          t1= d.getTime();
        }
        pause = true;
    turns++;
    let g;
    let name=String(k);
    let cell = document.getElementById(k);
    cell.setAttribute('class','selected');
    if(name.substr(0,1)==="E"){
        g=(name.substring(1,name.length)*2);
        
    }else{
        g=(name.substring(1,name.length)*2)+1;
    }
    cell.innerHTML = w[g];
    console.log(g);
    if(turns%2!==0){
         w1=k;
         cell.removeAttribute('onclick');
         pause=false;
    }else{
         w2=k;
        check(w1,w2);       
    }
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
                c2.setAttribute('class','guessed'),pause=false),500); 
                victory(false);
                
                
            }
        }  
    }
    if(match===false){    
        c1.setAttribute('onclick','turn(this.id);');
        setTimeout(()=>reset(),500);  
    }
}
function victory(t){
    let d = new Date();
    if(t===true){document.getElementById("endScreen").style.display='inline';
          document.getElementById("poga").disabled = true;
          var rect = document.getElementById("endScreen").getBoundingClientRect();
          window.scrollTo(rect.left, rect.top);
          console.log(rect.left, rect.bottom);
          document.getElementById("skaits").innerHTML=turns;
          t2=d.getTime();
          let time =(t2-t1)/1000;
          if(turns===0){
              time=0;
          }
          document.getElementById("time").innerHTML=time;
          pause=false;}
      let m = document.getElementsByClassName("guessed");
      console.log(m);
      console.log("gar=" +m.length);
      if(m.length===(n*n)-2){
          document.getElementById("endScreen").style.display='inline';
          var rect = document.getElementById("endScreen").getBoundingClientRect();
          window.scrollTo(rect.left, rect.top);
          document.getElementById("poga").disabled = true;
          document.getElementById("skaits").innerHTML=turns;
          t2=d.getTime();
          let time =(t2-t1)/1000;
          document.getElementById("time").innerHTML=time;
          pause=false;
      }
    
}
function reset(){
    var c1 =document.getElementById(w1), c2 = document.getElementById(w2); 
        c1.innerHTML="";
        c2.innerHTML="";
        c1.setAttribute('class','cell');
        c2.setAttribute('class','cell');
        pause=false;
}
function shuffle(array) {
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
