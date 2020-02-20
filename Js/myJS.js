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
