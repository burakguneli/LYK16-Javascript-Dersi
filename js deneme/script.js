// var foo = 1;
// var foo = "at";
// foo = [1, "hana", true, ["css", "html", "js"], { baba: "at", esek:"okuz"}];
//foo = { isim: "burak", soyisim: "guneli"};

// console.log(foo);

// var DolarTl = 2.9592;
// var EuroTl = 3.3057;
// var sonuc = 0;

// function kur(para){

// 	sonuc = para * DolarTl;
// 	var bildiri = para + " TL" + " = " + sonuc + " DOLAR";
// 	console.log(bildiri);

// 	sonuc = para * EuroTl;
// 	bildiri = para + " TL" + " = " + sonuc + " EURO";
// 	console.log(bildiri);

// }

// kur(10);

// function fun1(){
// 	console.log("Ben bir callbackim.");
// }

// function fun2(){
// 	console.log(typeof callback);
// 	if(typeof callback == "function"){
// 		callback();
// 	}
// }

// // fun2(function(){
// // 	console.log("Anonim Fonksiyon");
// // });

// fun2(function(){
// 	console.log("test");
// });

// fun2("Onur");

// var baba = document.getElementById("text");

// var element = document.getElementsByClassName("text");
// console.log(element)

// var element = document.querySelectorAll(".foo");
// console.log(element);
//
// for(var i = 0; i < element.length; i++){
// 	// element[i].innerHTML = "<p>LYK 2016 OLEEEEY</p> " + i;
// 	element[i].innerHTML = "LYK 2016 OLEEEEY " + i; //for dongusuyle hepsininin icini degistirme islemi.
// }

// var taglar = document.getElementsByTagName("div");
// console.log(taglar);

// baba.innerHTML = "BABABABABABABBBABA"

// var eleman = document.createElement("article");
// var eleman2 = document.createElement("figure");
//
// eleman2.innerHTML = "ELEMAN 2";
//
// document.body.appendChild(eleman);
// eleman.appendChild(eleman2);
// element[1].appendChild(eleman2);
//
// var dolly = eleman2.cloneNode(true); //kopyalama islemi, true parametresi icerigin de gelmesini sagliyor.

// document.body.appendChild(dolly); //ekleme islemi.
// document.body.removeChild(dolly); //silme islemi.
//
// // eleman2.classList.add("warning"); //class ekleme islemi.
//
// var button = document.getElementById('button');
//
// button.onclick = function(){
// 	alert('Selam!');
// }; //basildiginda calisir.

// var kutu = document.getElementById('kutu');

// kutu.onfocus = function(){
// 	alert('Selam!');
// }; //basidiginda macvi cerceveyle focuslanir.

// function mesaj(){
// 	console.log('Deneme');
// }

// kutu.addEventListener('mouseover', mesaj); //mouse ustunde oldugunda calisir.
// kutu.removeEventListener('mouseover', mesaj); //event listeneri bellekten tamamen siler.

var sayi = 0;

var yer = document.getElementById('number');
var artma = document.getElementById('arttir');

artma.onclick = function(){
	sayi = sayi + 1;
	yer.innerHTML = sayi;
};

var azalma = document.getElementById('azalt');

azalma.onclick = function(){
	sayi = sayi - 1;
	yer.innerHTML = sayi;
};
