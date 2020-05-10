var array = [1, 2];
alert("Isi Array Saat ini... Diinget yaa "+array)

function getPush(){
    var input = document.getElementById("push").value
    array.push(input)
    alert(array)
}
function getPop(){
    var input = document.getElementById("pop").value
    array.pop(input)
    alert(array)
}
function getUnshift(){
    var input = document.getElementById("unshift").value
    array.unshift(input)
    alert(array)
}
function getShift(){
    var input = document.getElementById("shift").value
    array.shift(input)
    alert(array)
}