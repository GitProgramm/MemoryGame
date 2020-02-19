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

 
for(var i =0;i<n;i++){
    let row=table.insertRow();
    for(var k=0;k<n;k++){
        let cell=row.insertCell();
        let text="aaa"
        cell.appendChild(text);
    }
}
}

