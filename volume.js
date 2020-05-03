const tb= "";
const tk= "";
function jumlahTabung(){
    var r1 = document.getElementById("pertamaTbg").value;
    var r2 = document.getElementById("keduaTbg").value;
    if(r1=="" || r2==""){
        alert("Masih ada nilai jari-jari yang kosong");
    }
    else{
        var vol1 = 3.14 * r1 * r1 * 6;
        var vol2 = 3.14 * r2 * r2 * 6;
        const totalTbg = vol1+vol2;
        alert("Volume Tabung Pertama "+vol1);
        alert("Volume Tabung Kedua "+vol2);
        alert("Jumlah Volume Tabung "+totalTbg);
        this.tb = totalTbg;
    }
}
function jumlahKeduanya(){
    var kubus = this.total;
    var tabung = this.totalTbg;
    var keduanya = this.tb+this.tk;
    alert("Jika hasil keduanya dijumlahkan adalah "+keduanya);
}
function jumlahKubus(){
    var pertama = document.getElementById("pertama").value;
    var kedua = document.getElementById("kedua").value;
    var volumA;
    var volumB;
    if(pertama == "" || kedua ==""){
        alert("Ada bagian yang masih kosong");
    }
    else{
        volumA = pertama*pertama*pertama;
        volumB = kedua*kedua*kedua;
        const total = volumA+volumB;
        this.tk = total;
        alert("Volume Kubus Pertama Adalah "+volumA);
        alert("Volume Kubus Kedua Adalah "+volumB);
        alert("Hasil Penjumlahan Volume Adalah "+total);
    }
}
function selisihKeduanya(){
    var A = this.tb;
    var B = this.tk;
    var selisih;
    if(A>=B){
        selisih = A-B;
    }
    else{
        selisih = B-A;
    }
    alert("Selisih Volume Keduanya Adalah "+selisih);
}