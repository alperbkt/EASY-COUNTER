"use strict";

let sayı = 0 ;
// let azalt = document.querySelector("#buton1");
// let sıfırla= document.querySelector("#buton2");
// let arttır = document.querySelector("#buton3");

document.querySelector("#buton1").addEventListener("click",Azalt);
function Azalt(){
    sayı--;
    document.querySelector("#sayıid").textContent = sayı;
    if(sayı < 0){
        document.querySelector("#sayıid").style.color = "red";
    }
    else{
        document.querySelector("#sayıid").style.color = "green";
    }
}
document.querySelector("#buton2").addEventListener("click",Sıfırla);
function Sıfırla(){
    sayı = 0;
    document.querySelector("#sayıid").textContent = sayı;
    document.querySelector("#sayıid").style.color = "white";

}
document.querySelector("#buton3").addEventListener("click",Arttır);
function Arttır(){
    sayı++;
    document.querySelector("#sayıid").textContent = sayı;
    if(sayı < 0){
        document.querySelector("#sayıid").style.color = "red";
    }
    else{
        document.querySelector("#sayıid").style.color = "green";
    }
}

