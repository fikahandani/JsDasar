function jumlah(){
    var pertama = document.getElementById("pertama").value;
    var kedua =document.getElementById("kedua").value;
    if(pertama=="" || kedua==""){
        alert("Ada Nilai Yang Masih Kosong");
    }
    else{
        var volumeA = pertama*pertama*pertama;
        var volumeB = kedua*kedua*kedua;
        var total = volumeA+volumeB;
        alert("Volume Kubus Pertama "+volumeA);
        alert("Volume Kubus Kedua "+volumeB);
        alert("Jumlah Volume Kedua Kubus Adalah "+total);
    }
}