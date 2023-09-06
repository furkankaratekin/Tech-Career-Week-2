function veriEkle() {
  // Kullanıcıdan alınan veriyi alın
  var yeniVeri = document.getElementById("veriInput").value;

  // Local Storage'dan mevcut verileri alın
  var kaydedilenVeriler =
    JSON.parse(localStorage.getItem("kaydedilenVeriler")) || [];

  // Yeni veriyi diziye ekleyin
  kaydedilenVeriler.push(yeniVeri);

  // Diziyi Local Storage'e geri kaydedin
  localStorage.setItem("kaydedilenVeriler", JSON.stringify(kaydedilenVeriler));

  // Veriyi ekrana ekleyin
  guncelleKayitListesi();
}

function guncelleKayitListesi() {
  // Local Storage'dan verileri alın
  var kaydedilenVeriler =
    JSON.parse(localStorage.getItem("kaydedilenVeriler")) || [];

  // Verileri tamsayıya çevirin ve büyükten küçüğe sıralayın
  var tamsayiVeriler = kaydedilenVeriler
    .map(function (veri) {
      return parseInt(veri, 10);
    })
    .sort(function (a, b) {
      return b - a; // Büyükten küçüğe sıralama
    });

  var kayitListesi = document.getElementById("kaydedilenVeriler");

  // Önceki listeyi temizle
  kayitListesi.innerHTML = "";

  // Sıralanmış tamsayı verilerini listeye ekleyin
  for (var i = 0; i < tamsayiVeriler.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = tamsayiVeriler[i];
    kayitListesi.appendChild(listItem);
  }
}

// Sayfa yüklendiğinde kayıtlı verileri göster
guncelleKayitListesi();
