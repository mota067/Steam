let time = 2000,
currentImageIndex = 0,
images = document.querySelectorAll("#slide img")
max = images.length;

function nextImage() {
    images[currentImageIndex]
    .classList.remove("selecionado")

    currentImageIndex++

    if(currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex]
    .classList.add("selecionado")
}

function start() {
 setInterval(() => {
   nextImage()
 }, time)
}

window.addEventListener("load", start)

var titulo = document.querySelector("#nomedojogo");
function começar() {
titulo.innerHTML = "GTA V PREMIUM";


}
function mota(){
    
    var imgdepois = "gta.jpg"
    document.getElementById("img2").src = imgdepois
    
}
function mota1() {
    var imgdepois1 = "gtaonline.jpg"
    document.getElementById("img3").src = imgdepois1
}
function mota2() {
    var imgdepois2 = "r.jpg"
    document.getElementById("img4").src = imgdepois2
}
function mota3() {
    var imgdepois3 = "rrr.jpg"
    document.getElementById("img5").src = imgdepois3
}
function mota4() {
    var videodepois = "gtav.mp4"
    document.getElementById("videoo").src = videodepois
}

    var namegame = document.querySelector("#gratuito");
function mota5() {
    namegame.innerHTML = "Por 35,59 R$";

}
function motaa(){
    
    var imgdepois = "a.jpg"
    document.getElementById("img2").src = imgdepois
    
}
function motaa1() {
    var imgdepois1 = "aa.jpg"
    document.getElementById("img3").src = imgdepois1
}
function motaa2() {
    var imgdepois2 = "aaa.jpg"
    document.getElementById("img4").src = imgdepois2
}
function motaa3() {
    var imgdepois3 = "aaaa.jpg"
    document.getElementById("img5").src = imgdepois3
}
function motaa4() {
    var videodepois = "cs.mp4"
    document.getElementById("videoo").src = videodepois
}

    var namegamee = document.querySelector("#gratuito");
function motaa5() {
    namegamee.innerHTML = "Gratuito p/ Jogar";
    
}
var titulo = document.querySelector("#nomedojogo");
function começarr() {
titulo.innerHTML = "CS GLOBAL OFENSIVE";
}

function motaaa(){
    
    var imgdepois = "rr3.jpg"
    document.getElementById("img2").src = imgdepois
    
}
function motaaa1() {
    var imgdepois1 = "rr.jpg"
    document.getElementById("img3").src = imgdepois1
}
function motaaa2() {
    var imgdepois2 = "rr2.PNG"
    document.getElementById("img4").src = imgdepois2
}
function motaaa3() {
    var imgdepois3 = "rrrr.jpg"
    document.getElementById("img5").src = imgdepois3
}
function motaaa4() {
    var videodepois = "video.mp4"
    document.getElementById("videoo").src = videodepois
}

    var namegamee = document.querySelector("#gratuito");
function motaaa5() {
    namegamee.innerHTML = "Gratuito p/ Jogar";
    
}
var titulo = document.querySelector("#nomedojogo");
function começarrr() {
titulo.innerHTML = "MIRROR'S EDGE";
}
function motaaaa(){
    
    var imgdepois = "b.jpg"
    document.getElementById("img2").src = imgdepois
    
}
function motaaaa1() {
    var imgdepois1 = "bb.jpg"
    document.getElementById("img3").src = imgdepois1
}
function motaaaa2() {
    var imgdepois2 = "bbb.jpg"
    document.getElementById("img4").src = imgdepois2
}
function motaaaa3() {
    var imgdepois3 = "bbbb.jpg"
    document.getElementById("img5").src = imgdepois3
}
function motaaaa4() {
    var videodepois = "godofwar.mp4"
    document.getElementById("videoo").src = videodepois
}

    var namegamee = document.querySelector("#gratuito");
function motaaaa5() {
    namegamee.innerHTML = "Por apenas 59,99 R$";
    
}
var titulo = document.querySelector("#nomedojogo");
function começarrrr() {
titulo.innerHTML = "GOD OF WAR";
}


//OFERTAS ESPECIAS//


function box1() {
    var img1 = "slenderman.jpg"
    document.getElementById("box1").src = img1
}
function box2() {
    var img2 = "devilmaycry.jpg"
    document.getElementById("box2").src = img2
}
function box3() {
    var img3 = "residentevil.jpg"
    document.getElementById("box3").src = img3
}
function box4() {
    var img4 = "battlefield.jpg"
    document.getElementById("box4").src = img4
}
var nomes = document.querySelector("#name1");
function trocanomes() {
    nomes.innerHTML = "SLENDER MAN : THE ARRIVAL"
}
var nomes2 = document.querySelector("#name2")
function trocanomes1() {
    nomes2.innerHTML = "Promoção até 18 de agos. às 15:00"
}
var nomes3 = document.querySelector("#name3")
function trocanomes2() {
    nomes3.innerHTML = "9,99 R$"
}
var nomes4 = document.querySelector("#name4")
function trocanomes3() {
    nomes4.innerHTML = "DEVIL MAY CRY 5"
}
var nomes5 = document.querySelector("#name5")
function trocanomes4() {
    nomes5.innerHTML = "Apenas playstation 5"
}
var nomes6 = document.querySelector("#name6")
function trocanomes5() {
    nomes6.innerHTML = "156,59 R$"
}
var nomes7 = document.querySelector("#name7")
function trocanomes6(){
    nomes7.innerHTML = "RESIDENT EVIL: VILLAGER"
}
var nomes8 = document.querySelector("#name8")
function trocanomes7() {
    nomes8.innerHTML = "BATTLEFIELD V"
}
var names = document.querySelector("#name1")
function troca() {
    names.innerHTML = "OFERTA DO DIA"
}
var names1 = document.querySelector("#name2")
function troca1() {
    names1.innerHTML = "Oferta válida até 29 de set. às 14:00."
}
var names2 = document.querySelector("#name3")
function troca2() {
    names2.innerHTML = "Até -90%"
}
var names3 = document.querySelector("#name4")
function troca3() {
    names3.innerHTML = "FIM DE SEMANA GRATUITO"
}
var names4 = document.querySelector("#name5")
function troca4() {
    names4.innerHTML = "Oferta válida até 08 de out. às 17:00."
}
var names5 = document.querySelector("#name6")
function troca5() {
    names5.innerHTML = "Até -100%"
}
var names6 = document.querySelector("#name7")
function troca6() {
    names6.innerHTML = "DIA DA SESSÃO EA GAMES"
}
var names7 = document.querySelector("#name8")
function troca7() {
    names7.innerHTML = "EURO TRUCK SIMULATOR"
}
function boxes1() {
    var imagem1 = "godofwar4.jpg"
    document.getElementById("box1").src = imagem1
}
function boxes2() {
    var imagem2 = "goatsimulator.jpg"
    document.getElementById("box2").src = imagem2
}
function boxes3() {
    var imagem3 = "eagames.jpg"
    document.getElementById("box3").src = imagem3
}
function boxes4() {
    var imagem4 = "eurotruck.jpg"
    document.getElementById("box4").src = imagem4
}
