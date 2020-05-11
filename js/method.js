var array = [1, 2, 3, 4, 5];
//alert("Isi Array Saat ini... Diinget yaa "+array)

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
function splice(){
    var position = document.getElementById("posSplice").value
    var input = document.getElementById("splice").value
    if(position==""){
        alert("Posisi Array Kosong")
    }
    if(input==""){
        alert("Nilai Input Splice Kosong")
    }
    var length = array.length
    if(length < position){
        alert("Posisi Array Melebihi Jumlah Data Pada Array")
    }
    else{
        array.splice(position, 0, input)
        alert(array)
    }
}
function slice(){

    var indexAwal = document.getElementById("indexAwal").value
    var indexAkhir = document.getElementById("indexAkhir").value
    var length = array.length
    if(indexAwal==""){
        alert("Index Awal Kosong")
    }
    if(indexAkhir==""){
        alert("Index Akhir Kosong")
    }
    if(length < indexAkhir){
        alert("Index Akhir melebihi Panjang Array")
    }
    else{
        var hasil = array.slice(indexAwal, indexAkhir)
        alert(hasil)
    }
}