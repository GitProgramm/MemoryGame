/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function tableCreate(table){
    var e = document.getElementById("size");
    var n = e.options[e.selectedIndex].value;
 var body = document.body,
 tbl = document.createElement('table');
 tbl.style.width='100px';
 tbl.style.border='1px solid black';

 document.getElementById("description").innerHTML = n;
 let thread=table.createThread();
for(var i =0;i<n;i++){
    for(var k=0;k<n;k++){
        document.getElementById("table").innerHTML = "";
    }
}
}

