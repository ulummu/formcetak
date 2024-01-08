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
export const jumlahSubmit = (
  event,
  values,
  valuesJum,
  setValues,
  setValuesJum,
  setValidatedJumlah
) => {
  const { name, value } = event.target;
  if (values.jumlah === "") {
    setValuesJum({ ...valuesJum, errText: "Jumlah Belum Diisi" });
  }
  if (values.jumlah <= 20 && values.jumlah !== "") {
    setValuesJum({
      ...valuesJum,
      verif: true,
      errText: "Jumlah kurang dari 20",
    });
  }
  if (values.jumlah <= 101 && values.jumlah !== "" && values.jumlah > 20) {
    setValuesJum({
      ...valuesJum,
      verif: false,
      errText: "",
      visibleUnder: false,
      visibleHigher: true,
      visibleButtonJumlah: false,
      kata: "Include",
    });
  } else if (values.jumlah > 101) {
    setValuesJum({
      ...valuesJum,
      verif: false,
      errText: "",
      visibleUnder: true,
      visibleHigher: false,
      visibleButtonJumlah: false,
      kata: "Free",
    });
  }
  setValues({
    ...values,
    [name]: value,
  });
  event.preventDefault();
  event.stopPropagation();
  setValidatedJumlah(true);
};
export const ubahFunction = (valuesJum, setValuesJum) => {
  setValuesJum({
    ...valuesJum,
    visibleUnder: false,
    visibleHigher: false,
    visibleButtonJumlah: true,
  });
};
export const handleFormInput = (
  event,
  values,
  data,
  dataAkad,
  temp,
  noCatin,
  lBarcode,
  dataResepsi,
  filter,
  visible,
  visibleAkad,
  visibleResepsi,
  visibleFilter,
  setLBarcode,
  setFilter,
  setValues,
  setData,
  setTemp,
  setVisible,
  setNoCatin,
  setVisibleFilter,
  setVisibleBarcode,
  setVisibleAkad,
  setVisibleResepsi,
  setDataAkad,
  setDataResepsi
) => {
  const { name, value } = event.target;
  if (event.target.name === "bundling" && event.target.value === "Website") {
    let newValues = values;
    newValues.visibleWebsite = true;
    newValues.visibleVideo = false;
    newValues.visibleWebnVid = false;
    newValues.dataBundling = 1;
    setValues(newValues);
  } else if (
    event.target.name === "bundling" &&
    event.target.value === "Video/Jpeg"
  ) {
    let newValues = values;
    newValues.visibleWebsite = false;
    newValues.visibleVideo = true;
    newValues.visibleWebnVid = false;
    newValues.dataBundling = 2;
    setValues(newValues);
  } else if (
    event.target.name === "bundling" &&
    event.target.value === "Website dan Video/Jpeg"
  ) {
    let newValues = values;
    newValues.visibleWebsite = false;
    newValues.visibleVideo = false;
    newValues.visibleWebnVid = true;
    newValues.dataBundling = 0;
    setValues(newValues);
  }
  if (
    event.target.name === "penandaLokasi" &&
    event.target.value === "QR Code"
  ) {
    let newValues = values;
    newValues.visibleQR = true;
    newValues.denahNote = false;
    setValues(newValues);
  } else if (
    event.target.name === "penandaLokasi" &&
    event.target.value === "QR Code dan Denah"
  ) {
    let newValues = values;
    newValues.visibleQR = true;
    newValues.denahNote = true;
    setValues(newValues);
  } else if (
    event.target.name === "penandaLokasi" &&
    event.target.value === "Denah"
  ) {
    let newValues = values;
    newValues.visibleQR = false;
    newValues.denahNote = true;
    setValues(newValues);
  } else {
    let newValues = values;
    newValues.visibleQR = false;
    newValues.denahNote = false;
    setValues(newValues);
  }
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
    setData("Acara : " + values.lainnyaAkad);
  } else {
    setData("Acara : " + values.namaAcaraAkad);
  }
  if (!!values.lainnyaResepsi) {
    setDataResepsi("Acara : " + values.lainnyaResepsi);
  } else {
    setDataResepsi("Acara : " + values.namaAcaraResepsi);
  }
  if (event.target.name === "nomorCatin") {
    setNoCatin("-Nomor Calon Pengantin : " + event.target.value);
  }
  if (!!values.linkBarcode) {
    setLBarcode("-Link Google Maps : " + values.linkBarcode);
  }
  if (values.dataBundling === 1 || values.dataBundling === 0) {
    setTemp(encodeURI(values.loveStory));
    setValues({
      ...values,
      [name]: value,
    });
  }
  if (!!values.filterig) {
    setFilter(
      `-Tema Filter Instagram : ${values.filterig}
-Frame : ${values.frame}`
    );
  }
  setValues({
    ...values,
    [name]: value,
  });
};
export const handleFormSubmit = (
  event,
  values,
  data,
  temp,
  noCatin,
  lBarcode,
  dataResepsi,
  filter,
  setValidated
) => {
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    event.preventDefault();
    event.stopPropagation();
    if (values.dataBundling === 1) {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        encodeURIComponent(`1. Model Undangan Cetak : ${values.model}\n
2. Desain Undangan Cetak : ${values.desain}\n
3. Jumlah Undangan Cetak : ${values.jumlah}\n
4. Penanda Lokasi : ${values.penandaLokasi}
${values.qrCode}
5. Nama yang didahulukan : ${values.namaAwal}\n
6. Mempelai Wanita
-Nama Panggilan : ${values.panggilanWanita}
-Nama Lengkap : ${values.lengkapWanita}
-Nama Kedua Orang Tua : Putri ${values.wanitaAnakKe} dari Bapak ${values.namaBapakWanita} dan Ibu ${values.namaIbuWanita}\n
7. Mempelai Pria
-Nama Panggilan : ${values.panggilanPria}
-Nama Lengkap : ${values.lengkapPria}
-Nama Kedua Orang Tua : Putra ${values.priaAnakKe} dari Bapak ${values.namaBapakPria} dan Ibu ${values.namaIbuPria}\n
8. Rincian Acara\n
-Acara 1
-${data}
-Hari, Tanggal Bulan Tahun : ${values.hariAkad}, ${values.akad}
-Pukul ${values.pukulAkad} ${values.zonaWaktuAkad}
-Tempat acara : ${values.tempatAkad}
-Maps acara : ${values.mapsAkad}\n
-Acara 2
-${dataResepsi}
-Hari, Tanggal Bulan Tahun : ${values.hariResepsi}, ${values.resepsi}
-Pukul ${values.pukulResepsi} ${values.zonaWaktuResepsi}
-Tempat acara : ${values.tempatResepsi}
-Maps acara : ${values.mapsResepsi}\n
9. Tema Undangan Website : ${values.temaWebsite}\n
10. Bahasa Undangan Website: ${values.bahasa}\n
11. Foto Undangan Digital : ${values.foto}\n
12. Filter Instagram: ${values.pakaiFilter}
${filter}
13. Musik : ${values.musik}\n
14. Love Story : ${values.loveStory}\n
15. Live Streaming : ${values.live}\n
16. Wedding Gift
-Amplop Digital 1
-Nama Bank 1 : ${values.namaBank}
-Nomor Rekening 1 : ${values.nomorRek}
-Atas Nama 1 : ${values.atasNama}\n
-Amplop Digital 2
-Nama Bank 2 : ${values.namaBank2}
-Nomor Rekening 2 : ${values.nomorRek2}
-Atas Nama 2 : ${values.atasNama2}\n
-Kirim Hadiah
-Alamat : ${values.alamat}
-Nama Penerima : ${values.namaPenerima}\n
-WA Konfirmasi Amplop/Penerima : ${values.waKonfirmasi}\n
17. Reservasi Kehadiran via WA : ${values.daftarHadir} 
${noCatin}
18. Alamat Pengiriman Undangan Cetak
-Nama Penerima : ${values.namaPenerimaUndangan}
-Alamat Penerima : ${values.alamatPenerimaUndangan}
-Nomor Telepon Penerima : ${values.nomorPenerimaUndangan}`);
    } else if (values.dataBundling === 2) {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        encodeURIComponent(`1. Model Undangan Cetak : ${values.model}\n
2. Desain Undangan Cetak : ${values.desain}\n
3. Jumlah Undangan Cetak : ${values.jumlah}\n
4. Penanda Lokasi : ${values.penandaLokasi}
${values.qrCode}
5. Nama yang didahulukan : ${values.namaAwal}\n
6. Mempelai Wanita
-Nama Panggilan : ${values.panggilanWanita}
-Nama Lengkap : ${values.lengkapWanita}
-Nama Kedua Orang Tua : Putri ${values.wanitaAnakKe} dari Bapak ${values.namaBapakWanita} dan Ibu ${values.namaIbuWanita}\n
7. Mempelai Pria
-Nama Panggilan : ${values.panggilanPria}
-Nama Lengkap : ${values.lengkapPria}
-Nama Kedua Orang Tua : Putra ${values.priaAnakKe} dari Bapak ${values.namaBapakPria} dan Ibu ${values.namaIbuPria}\n
8. Rincian Acara\n
-Acara 1
-${data}
-Hari, Tanggal Bulan Tahun : ${values.hariAkad}, ${values.akad}
-Pukul ${values.pukulAkad} ${values.zonaWaktuAkad}
-Tempat acara : ${values.tempatAkad}
-Maps acara : ${values.mapsAkad}\n
-Acara 2
-${dataResepsi}
-Hari, Tanggal Bulan Tahun : ${values.hariResepsi}, ${values.resepsi}
-Pukul ${values.pukulResepsi} ${values.zonaWaktuResepsi}
-Tempat acara : ${values.tempatResepsi}
-Maps acara : ${values.mapsResepsi}\n
9. Tema Undangan Video/Jpeg : ${values.temaVideo}\n
10. Paket Undangan Video/Jpeg : ${values.paketVideo}\n
11. Filter Instagram: ${values.pakaiFilter}
${filter}
12. Penggunaan Foto : ${values.foto}\n
13. Barcode : ${values.barcode}
${lBarcode}\n
14. Denah : ${values.denah}\n
15. Musik : ${values.musik}\n
16. Alamat Pengiriman Undangan Cetak
-Nama Penerima : ${values.namaPenerimaUndangan}
-Alamat Penerima : ${values.alamatPenerimaUndangan}
-Nomor Telepon Penerima : ${values.nomorPenerimaUndangan}`);
    } else {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        encodeURIComponent(`1. Model Undangan Cetak : ${values.model}\n
2. Desain Undangan Cetak : ${values.desain}\n
3. Jumlah Undangan Cetak : ${values.jumlah}\n
4. Penanda Lokasi : ${values.penandaLokasi}
${values.qrCode}
5. Nama yang didahulukan : ${values.namaAwal}\n
6. Mempelai Wanita
-Nama Panggilan : ${values.panggilanWanita}
-Nama Lengkap : ${values.lengkapWanita}
-Nama Kedua Orang Tua : Putri ${values.wanitaAnakKe} dari Bapak ${values.namaBapakWanita} dan Ibu ${values.namaIbuWanita}\n
7. Mempelai Pria
-Nama Panggilan : ${values.panggilanPria}
-Nama Lengkap : ${values.lengkapPria}
-Nama Kedua Orang Tua : Putra ${values.priaAnakKe} dari Bapak ${values.namaBapakPria} dan Ibu ${values.namaIbuPria}\n
8. Rincian Acara\n
-Acara 1
-${data}
-Hari, Tanggal Bulan Tahun : ${values.hariAkad}, ${values.akad}
-Pukul ${values.pukulAkad} ${values.zonaWaktuAkad}
-Tempat acara : ${values.tempatAkad}
-Maps acara : ${values.mapsAkad}\n
-Acara 2
-${dataResepsi}
-Hari, Tanggal Bulan Tahun : ${values.hariResepsi}, ${values.resepsi}
-Pukul ${values.pukulResepsi} ${values.zonaWaktuResepsi}
-Tempat acara : ${values.tempatResepsi}
-Maps acara : ${values.mapsResepsi}\n
9. Tema Undangan Website : ${values.temaWebsite}\n
10. Bahasa Undangan Website: ${values.bahasa}\n
11. Tema Undangan Video/Jpeg : ${values.temaVideo}\n
12. Paket Undangan Video/Jpeg : ${values.paketVideo}\n
13. Foto Undangan Digital: ${values.foto}\n
14. Filter Instagram: ${values.pakaiFilter}
${filter}
15. Barcode : ${values.barcode}
${lBarcode}
16. Denah : ${values.denah}\n
17. Musik Undangan
-Website : ${values.musik}
-Video : ${values.musik2}\n
18. Love Story : ${temp}\n
19. Live Streaming : ${values.live}\n
20. Wedding Gift
-Amplop Digital 1
-Nama Bank 1 : ${values.namaBank}
-Nomor Rekening 1 : ${values.nomorRek}
-Atas Nama 1 : ${values.atasNama}\n
-Amplop Digital 2
-Nama Bank 2 : ${values.namaBank2}
-Nomor Rekening 2 : ${values.nomorRek2}
-Atas Nama 2 : ${values.atasNama2}\n
-Kirim Hadiah
-Alamat : ${values.alamat}
-Nama Penerima : ${values.namaPenerima}\n
-WA Konfirmasi Amplop/Penerima : ${values.waKonfirmasi}\n
21. Reservasi Kehadiran via WA : ${values.daftarHadir} 
${noCatin}
22. Alamat Pengiriman Undangan Cetak
-Nama Penerima : ${values.namaPenerimaUndangan}
-Alamat Penerima : ${values.alamatPenerimaUndangan}
-Nomor Telepon Penerima : ${values.nomorPenerimaUndangan}`);
    }
  }
  // console.log(dataGold);
  event.preventDefault();
  event.stopPropagation();
  setValidated(true);
};
