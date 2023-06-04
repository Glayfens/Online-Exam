var point = 0
var besAdetCevap = ["a", "b", "c", "d", "e"];
var puanid=document.getElementById("puan");
var soruNumaralariSayi = document.getElementById("soru-ozel-ad").innerHTML;
var sure_id=document.getElementById("sure");
var verilenSure= 2400;
t_int = setInterval(timer,1000);
var cevaplar = [];


// Sorularımızın tutulduğu yer
let sorular = [
    {
    soruid: 1,
    soru: "İnsan vücudunda kaç tane kalp bulunur ?",
    cevap1: "Bir",
    cevap2: "İki",
    cevap3: "Üç",
    cevap4: "Dört",
    cevap5: "Hiçbiri",
    dogruCevap: "a",
  },
  {
    soruid: 2,
    soru: "Türkiye' nin başkenti neredesidir ?",
    cevap1: "Çorum",
    cevap2: "Ankara",
    cevap3: "İnegöl",
    cevap4: "İstanbul",
    cevap5: "İzmir",
    dogruCevap: "b",
  },
  {
    soruid: 3,
    soru: "2+2 Kaçtır ?",
    cevap1: "5",
    cevap2: "4",
    cevap3: "99",
    cevap4: "142",
    cevap5: "17",
    dogruCevap: "b",
  },
  {
    soruid: 4,
    soru: "İstanbul ne zaman fethedildi ?",
    cevap1: "666",
    cevap2: "2010",
    cevap3: "1881",
    cevap4: "1453",
    cevap5: "874",
    dogruCevap: "d",
  },
  {
    soruid: 5,
    soru: "Aşağıdakilerden hangisi bir rakam değildir ?",
    cevap1: "0",
    cevap2: "2",
    cevap3: "4",
    cevap4: "6",
    cevap5: "12",
    dogruCevap: "e",
  },
  {
    soruid: 6,
    soru: "2+2/2 Kaçtır ?",
    cevap1: "3",
    cevap2: "4",
    cevap3: "2",
    cevap4: "1",
    cevap5: "0",
    dogruCevap: "a",
  },
  {
    soruid: 7,
    soru: "Cumhuriyet ne zaman ilan edilmiştir ? ",
    cevap1: "29 Ekim 1923",
    cevap2: "23 Nisan 1920",
    cevap3: "19 Mayıs 1919",
    cevap4: "1 Mayıs 1923",
    cevap5: "5 Haziran 2000",
    dogruCevap: "a",
  },
  {
    soruid: 8,
    soru: "Hangisi Dünya'daki en yüksek dağ zirvesidir ?",
    cevap1: "Denali",
    cevap2: "Mont Blanc",
    cevap3: "Everest",
    cevap4: "Kilimanjaro",
    cevap5: "Ağrı Dağı",
    dogruCevap: "c",
  },
  {
    soruid: 9,
    soru: "Hangisi İngilizce'de merhaba anlamına gelir ? ",
    cevap1: "Goodbye",
    cevap2: "Thank you",
    cevap3: "Hello",
    cevap4: "Please",
    cevap5: "Sorry",
    dogruCevap: "c",
  },
  {
    soruid: 10,
    soru: "Hangisi Güneş Sistemi'ndeki en büyük gezegendir ?",
    cevap1: "Venüs",
    cevap2: "Mars",
    cevap3: "Mars",
    cevap4: "Jupiter",
    cevap5: "Satürn",
    dogruCevap: "d",
  },
];


// Tablodaki süre kodumuz
function timer(){
  if(verilenSure <= 0)
  {
    alert("Zamanınız dolmuştur.");
    window.location.reload(false);
  }
  var saniye = verilenSure % 60;
  if(verilenSure <=0){
      sure_id.innerHTML = "Süreniz doldu!";
  }
  else{
      var dakika = Math.floor(verilenSure / 60);
      if(dakika<10) {
          dakika= "0" + dakika;
      }
      if(saniye<10){
          saniye = "0" + saniye;
      }
      sure_id.innerHTML = "Süre: " + dakika + ":" + saniye;
      verilenSure--; 
  }
}

var soruSayisi = sorular.length;

// Ekran yüklerken ilk soruyu görmemizi sağlayan fonksiyon
window.onload = function ()
{
  if (soruNumaralariSayi == 1) {

  document.getElementById("geri-button").disabled = true;

  document.getElementById("soru-ozel-ad").innerHTML = 1;

  document.getElementById("soruicerigi").innerHTML = sorular[0].soru;

  document.getElementById("cevap1HTML").innerHTML = sorular[0].cevap1;

  document.getElementById("cevap2HTML").innerHTML = sorular[0].cevap2;

  document.getElementById("cevap3HTML").innerHTML = sorular[0].cevap3;

  document.getElementById("cevap4HTML").innerHTML = sorular[0].cevap4;

  document.getElementById("cevap5HTML").innerHTML = sorular[0].cevap5;

  myFunction(soruSayisi);
  }
};


// Butonlar ile diger soruya geçtiğimizde diğer soruyu yükleyen kod
function DigerSorularaGecis(otherQuestion)
{
  saveAnswer();
  document.getElementById("soru-ozel-ad").innerHTML = otherQuestion;
  document.getElementById("soruicerigi").innerHTML = sorular[otherQuestion - 1].soru;

  document.getElementById("cevap1HTML").innerHTML =
    sorular[otherQuestion - 1].cevap1;

  document.getElementById("cevap2HTML").innerHTML =
    sorular[otherQuestion - 1].cevap2;

  document.getElementById("cevap3HTML").innerHTML =
    sorular[otherQuestion - 1].cevap3;

  document.getElementById("cevap4HTML").innerHTML =
    sorular[otherQuestion - 1].cevap4;

  document.getElementById("cevap5HTML").innerHTML =
    sorular[otherQuestion - 1].cevap5;
}


// Önceki Soruya Dön
function GeriButonu()
{
  //checkQuestion();
  soruNumaralariSayi--;
  if(soruNumaralariSayi < 1)
  {
    soruNumaralariSayi = sorular.length;
  }
  DigerSorularaGecis(soruNumaralariSayi);
  saveAnswer();
}


// Sonraki Soruya Dön
function ileriButonu()
{
  checkQuestion();
  soruNumaralariSayi++;
  if(soruNumaralariSayi > soruSayisi)
  {
    soruNumaralariSayi = 1
  }
  DigerSorularaGecis(soruNumaralariSayi);
  saveAnswer();
}


// Soru Kontrolünü burda yapıyoruz doğru ve yanlışlar burda kontrol ediliyor
function checkQuestion() {
  var checkflag = false;

  {
    var ele = document.getElementsByName("cevapName");

    var dictDogruCevap = sorular[soruNumaralariSayi - 1].dogruCevap;

    for (i = 0; i < ele.length; i++) {
      // onceden dogru şimdi yanlış olana girmiyor
      if (ele[i].checked) {
        checkflag = true;
        console.log("cevaplar: " + cevaplar);
        if (dictDogruCevap == besAdetCevap[i]) {
          // cevap doğru ise

          if (cevaplar.length < soruNumaralariSayi) {
            // ilk defa giriyor
            console.log("cevap doğru ve ilk defa girdi");
            cevaplar.push(besAdetCevap[i]);
            document.getElementsByClassName("sorular-button")[
              soruNumaralariSayi - 1
            ].style.backgroundColor = "green";
            point += 100 / sorular.length;
            document.getElementById("puan").innerHTML = point.toFixed(2);
          } else {
            // onceden işaretlemiş
            // ama yine doğru işaretlemişse devam ama yanlışa çevirdiyse puan azalt
            if (cevaplar[soruNumaralariSayi - 1] == besAdetCevap[i]) {
              console.log("cevap önceden de doğruydu şimdide doğru");
              // yine doğru ise devam bişe yapma
            } else {
              console.log("cevap öncdeen yanlıştı şimdi doğru");
              // yanlışa dondü -> puan azalt
              point += 100 / sorular.length;
              document.getElementById("puan").innerHTML = point.toFixed(2);
              document.getElementsByClassName("sorular-button")[
                soruNumaralariSayi - 1
              ].style.backgroundColor = "green";
              console.log(
                "cevaplar[soruNumaralariSayi - 1] = " +
                  cevaplar[soruNumaralariSayi - 1]
              );
              console.log(" besAdetCevap[i] = " + besAdetCevap[i]);
              cevaplar[soruNumaralariSayi - 1] = besAdetCevap[i];
              console.log(
                "cevaplar[soruNumaralariSayi - 1] = " +
                  cevaplar[soruNumaralariSayi - 1]
              );
              console.log(" besAdetCevap[i] = " + besAdetCevap[i]);
              for (var a = 0; a < cevaplar.length; a++) {
                console.log("cevaplar[" + a + "] = " + cevaplar[a]);
              }
              console.log("--*****----");
            }
          }
          // onceden işaretlememiş ise yapıştır ama işaretlemişse onu değiştir
          // cevap doğru
          ele[i].checked = false;
        } else {
          console.log("Yanlış cevap");
          // CEVAP YANLIŞ
          console.log("cevaplar.length: " + cevaplar.length);
          if (cevaplar.length < soruNumaralariSayi) {
            console.log("cevap yanlış ve ilk defa giriyor");
            // ilk defa giriyor
            cevaplar.push(besAdetCevap[i]);
            document.getElementsByClassName("sorular-button")[
              soruNumaralariSayi - 1
            ].style.backgroundColor = "red";

            document.getElementById("puan").innerHTML = point.toFixed(2);
          } else {
            console.log("cevap yanış ve onceden girmiş");
            // onceden işaretlemiş
            // hala yanlışsa devam ama doğruysa arttır
            console.log(
              "cevaplar[soruNumaralariSayi - 1]" +
                cevaplar[soruNumaralariSayi - 1]
            );
            console.log("cevaplar[i]" + cevaplar[i]);
            if (cevaplar[soruNumaralariSayi - 1] == dictDogruCevap) {
              console.log("cevap yanlış ve onceden doğru idi şimdi yanlış");
              // onceden doğru idi şimdi yanlış
              point -= 100 / sorular.length;
              document.getElementById("puan").innerHTML = point.toFixed(2);
              document.getElementsByClassName("sorular-button")[
                soruNumaralariSayi - 1
              ].style.backgroundColor = "red";
              cevaplar[soruNumaralariSayi - 1] = besAdetCevap[i];
              // yine doğru ise devam bişe yapma
              console.log("cevaplar: " + cevaplar);
            } else if (cevaplar[soruNumaralariSayi - 1] == "0") {
              document.getElementsByClassName("sorular-button")[
                soruNumaralariSayi - 1
              ].style.backgroundColor = "red";
              cevaplar[soruNumaralariSayi - 1] = besAdetCevap[i];
            } else {
              console.log("onceden de yanlıştı şimdi de yanlış");
            }
          }
        }
      }
    }
    //if kontolru
    if (checkflag == false) {
      // boş cevap göndermiştir
      cevaplar.push("0");
    }
  }
}


// Soru ekleme kısmımız burası ekleceyeceğimiz soruyu burda giriyoruz
function soruEkleme()
{
  var question = document.getElementById("inputSoru").value;
  var girdi1 = document.getElementById("input1").value;
  var girdi2 = document.getElementById("input2").value;
  var girdi3 = document.getElementById("input3").value;
  var girdi4 = document.getElementById("input4").value;
  var girdi5 = document.getElementById("input5").value;
  var dogrugirdi = document.getElementById("dogruCevap").value.toLowerCase();;

  const yeniSoru = {
    soruid: soruSayisi + 1,
    soru: question,
    cevap1: girdi1,
    cevap2: girdi2,
    cevap3: girdi3,
    cevap4: girdi4,
    cevap5: girdi5,
    dogruCevap: dogrugirdi,
  };

  if( question != "" &&
  girdi1 != "" &&
  girdi2 != "" &&
  girdi3 != "" &&
  girdi4 != "" &&
  girdi5 != "" &&
  dogrugirdi != ""
  )
  {
    sorular.push(yeniSoru);
    soruSayisi++;
    let newBtn = document.createElement("button");
    newBtn.innerText = soruSayisi;
    newBtn.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.

    newBtn.onclick = function () {
      DigerSorularaGecis(soruSayisi);
    };

    document.querySelector("#button-container").appendChild(newBtn);
    //console.log("dogru cevap: " + girdiDogruCevap);
    // sağ üst tablo renkler silinmeli ve puan 0 lanmalı

    for (var d = 0; d < sorular.length; d++) {
      document.getElementsByClassName("sorular-button")[
        d
      ].style.backgroundColor = "white";
    }
    document.getElementById("puan").innerHTML = "";
  }
  else {
    alert("Lütfen boş bilgi bırakmayınız...");
  }
}


// Butonların hepsini burda oluşturuyoruz ve soruları atıyoruz
function myFunction(e) {
  for (let i = 1; i < e + 1; i++) {
    let newBtn = document.createElement("button");
    newBtn.innerText = i;
    newBtn.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.

    newBtn.onclick = function () {
      soruNumaralariSayi = i;
      // aradaki yerlere boşluk eklenmeli idi
      console.log("--- önce cevaplar ---");
      for (let a of cevaplar) {
        console.log(a);
      }
      for (
        var indexBoslukKoyma = cevaplar.length + 1;
        indexBoslukKoyma < soruNumaralariSayi;
        indexBoslukKoyma++
      ) {
        cevaplar.push("0");
      }
      console.log("--- sonra cevaplar ---");
      for (let a of cevaplar) {
        console.log(a);
      }
      DigerSorularaGecis(i);
    };

    document.querySelector("#button-container").appendChild(newBtn);
  }
}


// Tıkladığımız soruların cevapları kaybolmasın diye burada kaydediyoruz
function saveAnswer() {
  if (cevaplar.length < soruNumaralariSayi) {
    for (var a = 0; a < besAdetCevap.length; a++) {
      document.getElementsByName("cevapName")[a].checked = false;
    }
  } else {
    var prevAns = cevaplar[soruNumaralariSayi - 1]; // bu soruya onceden verilmiş cevaptır
    console.log("bu soruya onceden verilmiş cevaptır: " + prevAns);
    for (var i = 0; i < besAdetCevap.length; i++) {
      if (besAdetCevap[i] == prevAns) {
        document.getElementsByName("cevapName")[i].checked = true;
      } else if (prevAns == "0") {
        for (var a = 0; a < besAdetCevap.length; a++) {
          document.getElementsByName("cevapName")[a].checked = false;
        }
      }
    }
  }
}


// Sectigimiz soruyu cıkaran kodumuz burda
function soruCikarma() {
  var soruCikarmaNo = document.getElementById("SoruCikarma").value;
  if (soruCikarmaNo > soruSayisi || soruCikarmaNo < 1) {
    alert(
      "Girdiğiniz Sayıda Bir Soru Bulunmamaktadır !! Lütfen Tekrar Deneyinizz"
    );
  } else {
    for (var e = 0; e < sorular.length; e++) {
      document.getElementsByClassName("sorular-button")[
        e
      ].style.backgroundColor = "white";
    }
    sorular.splice(soruCikarmaNo - 1, 1); // çıkarttı
    soruSayisi--;

    for (
      var indexFor = soruCikarmaNo - 1;
      indexFor < soruSayisi - soruCikarmaNo;
      indexFor++
    ) {
      sorular[indexFor].soruid--;
      console.log("indexFor:" + indexFor);
    }
    console.log("soru sayisi sonra:" + soruSayisi);
    const buttonContainer = document.querySelector("#button-container");
    while (buttonContainer.firstChild) {
      buttonContainer.removeChild(buttonContainer.firstChild);
    }
    if (soruCikarmaNo == soruNumaralariSayi) {
      ileriButonu();
    }
    myFunction(soruSayisi);
  }
}

// Sınavı Bitirme Butonu
function sinaviBitir(){
  alert("Sınavınız Sonlandırılmış ve Gönderilmiştir.");
  window.location.reload(false);
}