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
function filter(){
    var data = [1,2,3,4,5,6,7,8,9,10]
    var filter = document.getElementById("filter").value
    if(filter==""){
        alert("Data Kosong")
    }
    else{
        var angka = data.filter(function(x){
            return x==filter
        })
        if(angka==[]){
            alert("Data Tidak Ditemukan")
        }
        else{
            alert("Angka "+ angka +" Ditemukan")
        }
    }
    
}
function find(){
    var data = [1,2,3,4,5,6,7,8,9,10]
    var find = document.getElementById("find").value
    if(find==""){
        alert("Data Kosong")
    }
    else{
        var angka = data.find(function(x){
            return x==find
        })
        if(angka==undefined){
            alert("Data tidak ditemukan")
        }
        else{   
            alert("Angka "+angka+" Dapat di Fidnd")
        }
    }
}