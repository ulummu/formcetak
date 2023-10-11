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
  setValuesJum
) => {
  if (values.jumlah <= 150 && valuesJum.jumlahLain === true) {
    setValuesJum({
      ...valuesJum,
      errorText: "Jumlah kurang dari 150",
      display: "block",
    });
  } else if (values.jumlah > 150 && valuesJum.jumlahLain === true) {
    setValuesJum({
      ...valuesJum,
      display: "none",
      visibleUnder: true,
      visibleHigher: false,
      visibleButtonJumlah: false,
      kata: "Free",
    });
  } else if (valuesJum.jumlahLain === false) {
    setValuesJum({
      ...valuesJum,
      display: "none",
      visibleUnder: false,
      visibleHigher: true,
      visibleButtonJumlah: false,
      kata: "Include",
    });
    setValues({
      ...values,
      jumlah: valuesJum.jumlah,
    });
  }
};
export const jumlahChange = (
  event,
  values,
  valuesJum,
  setValues,
  setValuesJum
) => {
  const { name, value } = event.target;
  if (
    event.target.name === "opsiJumlah" &&
    event.target.value === "Jumlah lain"
  ) {
    setValuesJum({ ...valuesJum, visibleJumlah: true, jumlahLain: true });
  } else if (
    event.target.name === "opsiJumlah" &&
    event.target.value !== "Jumlah lain"
  ) {
    setValuesJum({
      ...valuesJum,
      jumlah: event.target.value,
      visibleJumlah: false,
      jumlahLain: false,
    });
  }
  setValues({
    ...values,
    [name]: value,
  });
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
  dataBundling,
  visible,
  visibleWebsite,
  visibleVideo,
  visibleWebnVid,
  visibleAkad,
  visibleResepsi,
  visibleFilter,
  setVisibleWebsite,
  setVisibleVideo,
  setVisibleWebnVid,
  setLBarcode,
  setFilter,
  setOpsiJumlah,
  setValues,
  setData,
  setTemp,
  setVisible,
  setNoCatin,
  setVisibleFilter,
  setVisibleBarcode,
  setDataBundling,
  setVisibleAkad,
  setVisibleResepsi,
  setDataAkad,
  setDataResepsi
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
  if (dataBundling === 1 || dataBundling === 0) {
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
  dataBundling,
  setValidated
) => {
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    event.preventDefault();
    event.stopPropagation();
    if (dataBundling === 1) {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        encodeURIComponent(`1. Model Undangan Cetak : ${values.model}\n
2. Desain Undangan Cetak : ${values.desain}\n
3. Jumlah Undangan Cetak : ${values.jumlah}\n
4. Nama yang didahulukan : ${values.namaAwal}\n
5. Mempelai Wanita
-Nama Panggilan : ${values.panggilanWanita}
-Nama Lengkap : ${values.lengkapWanita}
-Nama Kedua Orang Tua : Putri ${values.wanitaAnakKe} dari Bapak ${values.namaBapakWanita} dan Ibu ${values.namaIbuWanita}\n
6. Mempelai Pria
-Nama Panggilan : ${values.panggilanPria}
-Nama Lengkap : ${values.lengkapPria}
-Nama Kedua Orang Tua : Putra ${values.priaAnakKe} dari Bapak ${values.namaBapakPria} dan Ibu ${values.namaIbuPria}\n
7. Rincian Acara\n
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
8. Tema Undangan Website : ${values.temaWebsite}\n
9. Bahasa Undangan Website: ${values.bahasa}\n
10. Foto Undangan Digital : ${values.foto}\n
11. Filter Instagram: ${values.pakaiFilter}
${filter}\n
12. Musik : ${values.musik}\n
13. Love Story : ${values.loveStory}\n
14. Live Streaming : ${values.live}\n
15. Wedding Gift
-Amplop Digital 1
-Nomor Rekening 1 : ${values.nomorRek}
-Nama Bank 1 : ${values.namaBank}
-Atas Nama 1 : ${values.atasNama}\n
-Amplop Digital 2
-Nomor Rekening 2 : ${values.nomorRek2}
-Nama Bank 2 : ${values.namaBank2}
-Atas Nama 2 : ${values.atasNama2}\n
-Kirim Hadiah
-Alamat : ${values.alamat}
-Nama Penerima : ${values.namaPenerima}\n
-WA Konfirmasi Amplop/Penerima : ${values.waKonfirmasi}\n
16. Reservasi Kehadiran via WA : ${values.daftarHadir} 
${noCatin}
17. Alamat Pengiriman Undangan Cetak
-Nama Penerima : ${values.namaPenerimaUndangan}
-Alamat Penerima : ${values.alamatPenerimaUndangan}
-Nomor Telepon Penerima : ${values.nomorPenerimaUndangan}`);
    } else if (dataBundling === 2) {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        encodeURIComponent(`1. Model Undangan Cetak : ${values.model}\n
2. Desain Undangan Cetak : ${values.desain}\n
3. Jumlah Undangan Cetak : ${values.jumlah}\n
4. Nama yang didahulukan : ${values.namaAwal}\n
5. Mempelai Wanita
-Nama Panggilan : ${values.panggilanWanita}
-Nama Lengkap : ${values.lengkapWanita}
-Nama Kedua Orang Tua : Putri ${values.wanitaAnakKe} dari Bapak ${values.namaBapakWanita} dan Ibu ${values.namaIbuWanita}\n
6. Mempelai Pria
-Nama Panggilan : ${values.panggilanPria}
-Nama Lengkap : ${values.lengkapPria}
-Nama Kedua Orang Tua : Putra ${values.priaAnakKe} dari Bapak ${values.namaBapakPria} dan Ibu ${values.namaIbuPria}\n
7. Rincian Acara\n
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
8. Tema Undangan Video/Jpeg : ${values.temaVideo}\n
9. Paket Undangan Video/Jpeg : ${values.paketVideo}\n
10. Filter Instagram: ${values.pakaiFilter}
${filter}\n
11. Penggunaan Foto : ${values.foto}\n
12. Barcode : ${values.barcode}
${lBarcode}\n
13. Denah : ${values.denah}\n
14. Musik : ${values.musik}\n
15. Alamat Pengiriman Undangan Cetak
-Nama Penerima : ${values.namaPenerimaUndangan}
-Alamat Penerima : ${values.alamatPenerimaUndangan}
-Nomor Telepon Penerima : ${values.nomorPenerimaUndangan}`);
    } else {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=6282136869969&text=" +
        encodeURIComponent(`1. Model Undangan Cetak : ${values.model}\n
2. Desain Undangan Cetak : ${values.desain}\n
3. Jumlah Undangan Cetak : ${values.jumlah}\n
4. Nama yang didahulukan : ${values.namaAwal}\n
5. Mempelai Wanita
-Nama Panggilan : ${values.panggilanWanita}
-Nama Lengkap : ${values.lengkapWanita}
-Nama Kedua Orang Tua : Putri ${values.wanitaAnakKe} dari Bapak ${values.namaBapakWanita} dan Ibu ${values.namaIbuWanita}\n
6. Mempelai Pria
-Nama Panggilan : ${values.panggilanPria}
-Nama Lengkap : ${values.lengkapPria}
-Nama Kedua Orang Tua : Putra ${values.priaAnakKe} dari Bapak ${values.namaBapakPria} dan Ibu ${values.namaIbuPria}\n
7. Rincian Acara\n
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
8. Tema Undangan Website : ${values.temaWebsite}\n
9. Bahasa Undangan Website: ${values.bahasa}\n
10. Tema Undangan Video/Jpeg : ${values.temaVideo}\n
11. Paket Undangan Video/Jpeg : ${values.paketVideo}\n
12. Foto Undangan Digital: ${values.foto}\n
13. Filter Instagram: ${values.pakaiFilter}
${filter}\n
14. Barcode : ${values.barcode}
${lBarcode}\n
15. Denah : ${values.denah}\n
16. Musik Undangan
-Website : ${values.musik}
-Video : ${values.musik2}\n
17. Love Story : ${temp}\n
18. Live Streaming : ${values.live}\n
15. Wedding Gift
-Amplop Digital 1
-Nomor Rekening 1 : ${values.nomorRek}
-Nama Bank 1 : ${values.namaBank}
-Atas Nama 1 : ${values.atasNama}\n
-Amplop Digital 2
-Nomor Rekening 2 : ${values.nomorRek2}
-Nama Bank 2 : ${values.namaBank2}
-Atas Nama 2 : ${values.atasNama2}\n
-Kirim Hadiah
-Alamat : ${values.alamat}
-Nama Penerima : ${values.namaPenerima}\n
-WA Konfirmasi Amplop/Penerima : ${values.waKonfirmasi}\n
16. Reservasi Kehadiran via WA : ${values.daftarHadir} 
${noCatin}
17. Alamat Pengiriman Undangan Cetak
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
