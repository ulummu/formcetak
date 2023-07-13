export const capitalFirstWord = (event) => {
  var words = event.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};
export const checkSpecialChar = (e) => {
  var key = e.keyCode;
  if (key === 53 || key === 55) {
    e.preventDefault();
    e.stopPropagation();
  }
};
export const jumlahFunc = (
  values,
  setKata,
  setVisibleUnder,
  setVisibleHigher,
  setVisibleButtonJumlah
) => {
  if (values.jumlah <= 100 && values.jumlah > null) {
    setVisibleUnder(true);
    setVisibleHigher(false);
    setVisibleButtonJumlah(false);
    setKata("Free");
  } else {
    setVisibleHigher(true);
    setVisibleUnder(false);
    setVisibleButtonJumlah(false);
    setKata("Include");
  }
};
export const ubahFunction = (
  setVisibleUnder,
  setVisibleHigher,
  setVisibleButtonJumlah
) => {
  setVisibleUnder(false);
  setVisibleHigher(false);
  setVisibleButtonJumlah(true);
};
export const handleFormInput = (
  event,
  values,
  kata,
  dataAkad,
  temp,
  noCatin,
  lBarcode,
  dataResepsi,
  filter,
  dataBundling,
  visible,
  visibleWebsite,
  visibleVideo,
  visibleWebnVid,
  visibleAkad,
  visibleResepsi,
  visibleFilter,
  visibleUnder,
  visibleHigher,
  visibleButtonJumlah,
  setVisibleWebsite,
  setVisibleVideo,
  setVisibleWebnVid,
  setLBarcode,
  setFilter,
  setValues,
  setTemp,
  setVisible,
  setNoCatin,
  setVisibleFilter,
  setVisibleBarcode,
  setDataBundling,
  setVisibleAkad,
  setVisibleResepsi,
  setDataAkad,
  setDataResepsi,
  setVisibleUnder,
  setVisibleHigher,
  setVisibleButtonJumlah
) => {
  const { name, value } = event.target;
  if (event.target.name === "daftarHadir" && event.target.value === "Iya") {
    setVisible(!visible);
  } else if (
    event.target.name === "daftarHadir" &&
    event.target.value === "Tidak"
  ) {
    setVisible(false);
    setNoCatin("");
  }
  if (event.target.name === "pakaiFilter" && event.target.value === "Iya") {
    setVisibleFilter(!visibleFilter);
  } else if (
    event.target.name === "pakaiFilter" &&
    event.target.value === "Tidak"
  ) {
    setVisibleFilter(false);
  }
  if (event.target.name === "barcode" && event.target.value === "Iya") {
    setVisibleBarcode(!visible);
  } else if (
    event.target.name === "barcode" &&
    event.target.value === "Tidak"
  ) {
    setVisibleBarcode(false);
    setLBarcode("");
  }
  if (event.target.name === "bundling" && event.target.value === "Website") {
    setVisibleWebsite(true);
    setVisibleVideo(false);
    setVisibleWebnVid(false);
    setDataBundling(1);
  } else if (
    event.target.name === "bundling" &&
    event.target.value === "Video/Jpeg"
  ) {
    setVisibleVideo(true);
    setVisibleWebsite(false);
    setVisibleWebnVid(false);
    setDataBundling(2);
  } else if (
    event.target.name === "bundling" &&
    event.target.value === "Website dan Video/Jpeg"
  ) {
    setVisibleWebnVid(true);
    setVisibleWebsite(false);
    setVisibleVideo(false);
    setDataBundling(0);
  }
  if (
    event.target.name === "namaAcaraAkad" &&
    event.target.value === "Lainnya"
  ) {
    setVisibleAkad(!visibleAkad);
  } else if (
    event.target.name === "namaAcaraAkad" &&
    (event.target.value === "Akad" || event.target.value === "Pemberkatan")
  ) {
    setVisibleAkad(false);
  }
  if (
    event.target.name === "namaAcaraResepsi" &&
    event.target.value === "Lainnya"
  ) {
    setVisibleResepsi(!visibleResepsi);
  } else if (
    event.target.name === "namaAcaraResepsi" &&
    (event.target.value === "Resepsi" ||
      event.target.value === "Walimatul Ursy")
  ) {
    setVisibleResepsi(false);
  }
  if (!!values.lainnyaAkad) {
    setDataAkad("%0a-Acara : " + values.lainnyaAkad);
  } else {
    setDataAkad("%0a-Acara : " + values.namaAcaraAkad);
  }
  if (!!values.lainnyaResepsi) {
    setDataResepsi("%0a-Acara : " + values.lainnyaResepsi);
  } else {
    setDataResepsi("%0a-Acara : " + values.namaAcaraResepsi);
  }
  if (e.target.name === "nomorCatin") {
    setNoCatin("%0a-Nomor Calon Pengantin : " + e.target.value);
  }
  if (!!values.linkBarcode) {
    setLBarcode("%0a-Link Barcode : " + values.linkBarcode);
  }
  if (dataBundling === 1 || dataBundling === 0) {
    setTemp(encodeURI(values.loveStory));
    setValues({
      ...values,
      [name]: value,
    });
  }
  if (!!values.filterig) {
    setFilter(
      "%0a-Tema Filter Instagram : " +
        values.filterig +
        "%0a-Frame : " +
        values.frame
    );
  }
  setValues({
    ...values,
    [name]: value,
  });
  console.log(values);
};
export const handleFormSubmit = (
  event,
  values,
  kata,
  dataAkad,
  temp,
  noCatin,
  lBarcode,
  dataResepsi,
  filter,
  dataBundling,
  visible,
  visibleWebsite,
  visibleVideo,
  visibleWebnVid,
  visibleAkad,
  visibleResepsi,
  visibleFilter,
  visibleUnder,
  visibleHigher,
  setVisibleWebsite,
  setVisibleVideo,
  setVisibleWebnVid,
  setLBarcode,
  setFilter,
  setValues,
  setTemp,
  setVisible,
  setNoCatin,
  setVisibleFilter,
  setVisibleBarcode,
  setDataBundling,
  setVisibleAkad,
  setVisibleResepsi,
  setDataAkad,
  setDataResepsi,
  setVisibleUnder,
  setVisibleHigher,
  setValidated
) => {
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    event.preventDefault();
    event.stopPropagation();
    if (dataBundling === 1) {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        "1. Model Undangan Cetak : " +
        values.model +
        "%0a%0a2. Desain Undangan Cetak : " +
        values.desain +
        "%0a%0a3. Jumlah Undangan Cetak : " +
        values.jumlah +
        "%0a%0a4. Nama yang didahulukan : " +
        values.namaAwal +
        "%0a%0a5. Mempelai Wanita %0a-Nama Panggilan : " +
        values.panggilanWanita +
        "%0a-Nama Lengkap : " +
        values.lengkapWanita +
        "%0a-Nama Kedua Orang Tua : Putri " +
        values.wanitaAnakKe +
        " dari Bapak " +
        values.namaBapakWanita +
        " dan Ibu " +
        values.namaIbuWanita +
        "%0a%0a6. Mempelai Pria %0a-Nama Panggilan : " +
        values.panggilanPria +
        "%0a-Nama Lengkap : " +
        values.lengkapPria +
        "%0a-Nama Kedua Orang Tua : Putra " +
        values.priaAnakKe +
        " dari Bapak " +
        values.namaBapakPria +
        " dan Ibu " +
        values.namaIbuPria +
        "%0a%0a7. Rincian Acara %0a-Acara 1 : " +
        dataAkad +
        "%0a-Hari, Tanggal Bulan Tahun : " +
        values.hariAkad +
        ", " +
        values.akad +
        "%0a-Pukul " +
        values.pukulAkad +
        " " +
        values.zonaWaktuAkad +
        "%0a-Tempat acara : " +
        values.tempatAkad +
        "%0a-Maps acara : " +
        values.mapsAkad +
        "%0a%0a-Acara 2 " +
        dataResepsi +
        "%0a-Hari, Tanggal Bulan Tahun : " +
        values.hariResepsi +
        ", " +
        values.resepsi +
        "%0a-Pukul " +
        values.pukulResepsi +
        " " +
        values.zonaWaktuResepsi +
        "%0a-Tempat acara : " +
        values.tempatResepsi +
        "%0a-Maps acara : " +
        values.mapsResepsi +
        "%0a%0a8. Tema Undangan Website : " +
        values.temaWebsite +
        "%0a%0a9. Bahasa Undangan Website: " +
        values.bahasa +
        "%0a%0a10. Foto Undangan Digital : " +
        values.foto +
        "%0a%0a11. Filter Instagram : " +
        values.pakaiFilter +
        filter +
        "%0a%0a12. Musik : " +
        values.musik +
        "%0a%0a13. Love Story : " +
        temp +
        "%0a%0a14. Live Streaming : " +
        values.live +
        "%0a%0a15. Wedding Gift %0a%0a-Amplop Digital 1%0a-Nomor Rekening 1 : " +
        values.nomorRek +
        "%0a-Nama Bank 1 : " +
        values.namaBank +
        "%0a-Atas Nama 1 : " +
        values.atasNama +
        "%0a%0a-Amplop Digital 2%0a-Nomor Rekening 2 : " +
        values.nomorRek2 +
        "%0a-Nama Bank 2 : " +
        values.namaBank2 +
        "%0a-Atas Nama 2 : " +
        values.atasNama2 +
        "%0a%0a-Kirim Hadiah%0a-Alamat : " +
        values.alamat +
        "%0a-Nama Penerima : " +
        values.namaPenerima +
        "%0a-WA Konfirmasi Amplop/Penerima : " +
        values.waKonfirmasi +
        "%0a%0a16. Reservasi Kehadiran via WA : " +
        values.daftarHadir +
        noCatin +
        "%0a%0a17. Alamat Pengiriman Undangan Cetak %0a-Nama Penerima : " +
        values.namaPenerimaUndangan +
        "%0a-Alamat Penerima : " +
        values.alamatPenerimaUndangan +
        "%0a-Nomor Telepon Penerima : " +
        values.nomorPenerimaUndangan;
    } else if (dataBundling === 2) {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        "1. Model Undangan Cetak : " +
        values.model +
        "%0a%0a2. Desain Undangan Cetak : " +
        values.desain +
        "%0a%0a3. Jumlah Undangan Cetak : " +
        values.jumlah +
        "%0a%0a4. Nama yang didahulukan : " +
        values.namaAwal +
        "%0a%0a5. Mempelai Wanita %0a-Nama Panggilan : " +
        values.panggilanWanita +
        "%0a-Nama Lengkap : " +
        values.lengkapWanita +
        "%0a-Nama Kedua Orang Tua : Putri " +
        values.wanitaAnakKe +
        " dari Bapak " +
        values.namaBapakWanita +
        " dan Ibu " +
        values.namaIbuWanita +
        "%0a%0a6. Mempelai Pria %0a-Nama Panggilan : " +
        values.panggilanPria +
        "%0a-Nama Lengkap : " +
        values.lengkapPria +
        "%0a-Nama Kedua Orang Tua : Putra " +
        values.priaAnakKe +
        " dari Bapak " +
        values.namaBapakPria +
        " dan Ibu " +
        values.namaIbuPria +
        "%0a%0a7. Rincian Acara %0a-Acara 1 : " +
        dataAkad +
        "%0a-Hari, Tanggal Bulan Tahun : " +
        values.hariAkad +
        ", " +
        values.akad +
        "%0a-Pukul " +
        values.pukulAkad +
        " " +
        values.zonaWaktuAkad +
        "%0a-Tempat acara : " +
        values.tempatAkad +
        "%0a-Maps acara : " +
        values.mapsAkad +
        "%0a%0a-Acara 2 " +
        dataResepsi +
        "%0a-Hari, Tanggal Bulan Tahun : " +
        values.hariResepsi +
        ", " +
        values.resepsi +
        "%0a-Pukul " +
        values.pukulResepsi +
        " " +
        values.zonaWaktuResepsi +
        "%0a-Tempat acara : " +
        values.tempatResepsi +
        "%0a-Maps acara : " +
        values.mapsResepsi +
        "%0a%0a8. Tema Undangan Video/Jpeg : " +
        values.temaVideo +
        "%0a%0a9. Paket Undangan Video/Jpeg : " +
        values.paketVideo +
        "%0a%0a10. Filter Instagram : " +
        values.pakaiFilter +
        filter +
        "%0a%0a11. Penggunaan Foto : " +
        values.foto +
        "%0a%0a12. Barcode : " +
        values.barcode +
        lBarcode +
        "%0a%0a13. Denah : " +
        values.denah +
        "%0a%0a14. Musik : " +
        values.musik +
        "%0a%0a15. Alamat Pengiriman Undangan Cetak %0a-Nama Penerima : " +
        values.namaPenerimaUndangan +
        "%0a-Alamat Penerima : " +
        values.alamatPenerimaUndangan +
        "%0a-Nomor Telepon Penerima : " +
        values.nomorPenerimaUndangan;
    } else {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        "1. Model Undangan Cetak : " +
        values.model +
        "%0a%0a2. Desain Undangan Cetak : " +
        values.desain +
        "%0a%0a3. Jumlah Undangan Cetak : " +
        values.jumlah +
        "%0a%0a4. Nama yang didahulukan : " +
        values.namaAwal +
        "%0a%0a5. Mempelai Wanita %0a-Nama Panggilan : " +
        values.panggilanWanita +
        "%0a-Nama Lengkap : " +
        values.lengkapWanita +
        "%0a-Nama Kedua Orang Tua : Putri " +
        values.wanitaAnakKe +
        " dari Bapak " +
        values.namaBapakWanita +
        " dan Ibu " +
        values.namaIbuWanita +
        "%0a%0a6. Mempelai Pria %0a-Nama Panggilan : " +
        values.panggilanPria +
        "%0a-Nama Lengkap : " +
        values.lengkapPria +
        "%0a-Nama Kedua Orang Tua : Putra " +
        values.priaAnakKe +
        " dari Bapak " +
        values.namaBapakPria +
        " dan Ibu " +
        values.namaIbuPria +
        "%0a%0a7. Rincian Acara %0a-Acara 1 : " +
        dataAkad +
        "%0a-Hari, Tanggal Bulan Tahun : " +
        values.hariAkad +
        ", " +
        values.akad +
        "%0a-Pukul " +
        values.pukulAkad +
        " " +
        values.zonaWaktuAkad +
        "%0a-Tempat acara : " +
        values.tempatAkad +
        "%0a-Maps acara : " +
        values.mapsAkad +
        "%0a%0a-Acara 2 " +
        dataResepsi +
        "%0a-Hari, Tanggal Bulan Tahun : " +
        values.hariResepsi +
        ", " +
        values.resepsi +
        "%0a-Pukul " +
        values.pukulResepsi +
        " " +
        values.zonaWaktuResepsi +
        "%0a-Tempat acara : " +
        values.tempatResepsi +
        "%0a-Maps acara : " +
        values.mapsResepsi +
        "%0a%0a8. Tema Undangan Website : " +
        values.temaWebsite +
        "%0a%0a9. Bahasa Undangan Website: " +
        values.bahasa +
        "%0a%0a10. Tema Undangan Video/Jpeg : " +
        values.temaVideo +
        "%0a%0a11. Paket Undangan Video/Jpeg : " +
        values.paketVideo +
        "%0a%0a12. Foto Undangan Digital: " +
        values.foto +
        "%0a%0a13. Filter Instagram : " +
        values.pakaiFilter +
        filter +
        "%0a%0a14. Barcode : " +
        values.barcode +
        lBarcode +
        "%0a%0a15. Denah : " +
        values.denah +
        "%0a%0a16. Musik Undangan %0a-Website : " +
        values.musik +
        "%0a-Video : " +
        values.musik2 +
        "%0a%0a17. Love Story : " +
        temp +
        "%0a%0a18. Live Streaming : " +
        values.live +
        "%0a%0a19. Wedding Gift %0a%0a-Amplop Digital 1%0a-Nomor Rekening 1 : " +
        values.nomorRek +
        "%0a-Nama Bank 1 : " +
        values.namaBank +
        "%0a-Atas Nama 1 : " +
        values.atasNama +
        "%0a%0a-Amplop Digital 2%0a-Nomor Rekening 2 : " +
        values.nomorRek2 +
        "%0a-Nama Bank 2 : " +
        values.namaBank2 +
        "%0a-Atas Nama 2 : " +
        values.atasNama2 +
        "%0a%0a-Kirim Hadiah%0a-Alamat : " +
        values.alamat +
        "%0a-Nama Penerima : " +
        values.namaPenerima +
        "%0a-WA Konfirmasi Amplop/Penerima : " +
        values.waKonfirmasi +
        "%0a%0a20. Reservasi Kehadiran via WA : " +
        values.daftarHadir +
        noCatin +
        "%0a%0a21. Alamat Pengiriman Undangan Cetak %0a-Nama Penerima : " +
        values.namaPenerimaUndangan +
        "%0a-Alamat Penerima : " +
        values.alamatPenerimaUndangan +
        "%0a-Nomor Telepon Penerima : " +
        values.nomorPenerimaUndangan;
    }
  }
  // console.log(dataGold);
  event.preventDefault();
  event.stopPropagation();
  setValidated(true);
};
