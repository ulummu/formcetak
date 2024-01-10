import React, { useState } from "react";
import logo from "../logo.png";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./CardForm.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SelectFormComponent from "./forms/SelectFormComponent";
import {
  capitalFirstWord,
  checkSpecialChar,
  handleFormInput,
  handleFormSubmit,
  jumlahSubmit,
  ubahFunction,
} from "../helpers/FormHelper";
import {
  initialFormValues,
  namaPertama,
  pilihanBundling,
  initialJumlah,
  penandaPilih,
} from "../constans/FormConstans";
import DataMempelai from "../Points/DataMempelai";
import DataAcara from "../Points/DataAcara";
import DataAlamatKirim from "../Points/DataAlamatKirim";
import DataWebsite from "../Points/DataWebsite";
import DataVideo from "../Points/DataVideo";
import DataBundling from "../Points/DataBundling";
import TextInput from "./forms/TextInput";
import PenandaSelect from "./forms/PenandaSelect";
import * as formik from "formik";
import * as yup from "yup";

export default function CardForm(props) {
  const [validated, setValidated] = useState(false);
  const [validatedJumlah, setValidatedJumlah] = useState(false);
  const [values, setValues] = useState(initialFormValues);
  const [valuesJum, setValuesJum] = useState(initialJumlah);
  const [visible, setVisible] = useState(false);
  const [visibleBarcode, setVisibleBarcode] = useState(false);
  const [visibleAkad, setVisibleAkad] = useState(false);
  const [visibleResepsi, setVisibleResepsi] = useState(false);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [dataAkad, setDataAkad] = useState("");
  const [lBarcode, setLBarcode] = useState("");
  const [noCatin, setNoCatin] = useState("");
  const [data, setData] = useState("");
  const [dataResepsi, setDataResepsi] = useState("");
  const [temp, setTemp] = useState("");
  const [filter, setFilter] = useState("");

  const { Formik } = formik;

  const schema = yup.object().shape({
    model: yup.string().required("Model belum diisi"),
    desain: yup.string().required("desain belum diisi"),
    jumlah: yup
      .number()
      .required("Jumlah belum diisi")
      .min(20, "Kurang dari 20"),
  });

  const jumSubmit = (event) =>
    jumlahSubmit(
      event,
      values,
      valuesJum,
      setValues,
      setValuesJum,
      setValidatedJumlah
    );
  const ubahFunc = () => ubahFunction(valuesJum, setValuesJum);
  // const handleForm = (event) => {
  //   const { target } = event;
  //   formik.setFieldValue(target.name, target.value);
  // };
  const handleInputChange = (event) =>
    handleFormInput(
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
    );
  const handleSubmit = (event) =>
    handleFormSubmit(
      event,
      values,
      data,
      temp,
      noCatin,
      lBarcode,
      dataResepsi,
      filter,
      setValidated
    );
  return (
    <Container>
      <Row>
        <Col>
          <Card className="m-auto mt-5 mb-5 align-self-center Card ">
            <Card.Header as="h3" className="card-header">
              <img src={logo} alt="logo" className="logo me-2" />
              Form Undangan Cetak
            </Card.Header>
            <Card.Body>
              <Form.Label className="judul">
                Silakan Isi Data Secara Lengkap
              </Form.Label>
              <Formik
                validationSchema={schema}
                onSubmit={jumSubmit}
                initialValues={{
                  model: "",
                  desain: "",
                  jumlah: "",
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form className="form" noValidate onSubmit={handleSubmit}>
                    {/* Form model */}
                    <TextInput
                      isInvalid={!!errors.model}
                      name="model"
                      label="Model Undangan Cetak"
                      value={values.model}
                      type="text"
                      placeholder="Silakan Diisi"
                      errorText={errors.model}
                      onChange={handleChange}
                    />

                    {/* Form Desain */}
                    <TextInput
                      isInvalid={!!errors.desain}
                      name="desain"
                      label="Desain/Tema Undangan Cetak"
                      value={values.desain}
                      type="text"
                      placeholder="Silakan Diisi"
                      errorText={errors.desain}
                      onChange={handleChange}
                    />
                    <Form.Group className="mb-2">
                      <Form.Label>Jumlah Undangan</Form.Label>
                      <Form.Control
                        name="jumlah"
                        disabled={!valuesJum.visibleButtonJumlah}
                        value={values.jumlah}
                        onChange={handleChange}
                        required
                        type="number"
                        placeholder="Masukkan Jumlah"
                        isInvalid={!!errors.jumlah}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.jumlah}
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* <TextInput
                  validasi={true}
                  verif={valuesJum.verif}
                  label="Jumlah Undangan"
                  disable={!valuesJum.visibleButtonJumlah}
                  name="jumlah"
                  value={values.jumlah}
                  onChange={handleInputChange}
                  type="number"
                  errorText="Jumlah Belum Diisi"
                  placeholder="Masukkan Jumlah"
                /> */}
                    {/* Form Jumlah */}
                    <Form.Group className="mb-3">
                      {!valuesJum.visibleButtonJumlah && (
                        <Form.Label
                          onClick={ubahFunc}
                          className="float-end mt-1 mb-1 primary"
                          style={{ color: "#0D6EFD" }}
                        >
                          ubah
                        </Form.Label>
                      )}
                      {valuesJum.visibleButtonJumlah && (
                        <Button type="submit" className="float-end mt-2 mb-1">
                          Input
                        </Button>
                      )}
                    </Form.Group>
                  </Form>
                )}
              </Formik>
              <Form
                className="form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                {valuesJum.visibleUnder && (
                  <>
                    {/* Penanda Lokasi */}
                    <PenandaSelect
                      classEffect="labelForm mb-0"
                      validasi={true}
                      name="penandaLokasi"
                      label="Penanda Lokasi"
                      value={values.penandaLokasi}
                      optionsTitle="Silakan Pilih Penanda"
                      options={penandaPilih}
                      errorText="Penanda Belum Dipilih"
                      onChange={handleInputChange}
                      visible={values.visibleQR}
                      namaTambah="qrCode"
                      labelTambah="Masukan Link Google Maps"
                      placeholderTambah="Masukan Link Google Maps"
                      valueTambah={values.qrCode}
                      errorTextTambah="QR Code Belum Diisi"
                    />
                    {values.denahNote && (
                      <Form.Label>
                        Kirimkan Sketsa Denah kepada Admin
                      </Form.Label>
                    )}

                    {/* Form Nama didahulukan */}
                    <SelectFormComponent
                      validasi={true}
                      name="namaAwal"
                      label="Nama yang Didahulukan"
                      defaultValue={values.namaAwal}
                      optionsTitle="Silakan Pilih"
                      options={namaPertama}
                      errorText="Nama Belum Dipilih"
                      onChange={handleInputChange}
                    />
                    {/* Form Mempelai */}
                    <DataMempelai
                      panggilanWanita={values.panggilanWanita}
                      lengkapWanita={values.lengkapWanita}
                      wanitaAnakKe={values.wanitaAnakKe}
                      namaBapakWanita={values.namaBapakWanita}
                      namaIbuWanita={values.namaIbuWanita}
                      panggilanPria={values.panggilanPria}
                      lengkapPria={values.lengkapPria}
                      priaAnakKe={values.priaAnakKe}
                      namaBapakPria={values.namaBapakPria}
                      namaIbuPria={values.namaIbuPria}
                      handleInputChange={handleInputChange}
                    />
                    {/* Form Acara */}
                    <DataAcara
                      hariAkad={values.hariAkad}
                      akad={values.akad}
                      pukulAkad={values.pukulAkad}
                      zonaWaktuAkad={values.zonaWaktuAkad}
                      namaAcaraAkad={values.namaAcaraAkad}
                      tempatAkad={values.tempatAkad}
                      mapsAkad={values.mapsAkad}
                      visiblAkad={visibleAkad}
                      lainnyaAkad={values.lainnyaAkad}
                      hariResepsi={values.hariResepsi}
                      resepsi={values.resepsi}
                      pukulResepsi={values.pukulResepsi}
                      zonaWaktuResepsi={values.zonaWaktuResepsi}
                      namaAcaraResepsi={values.namaAcaraResepsi}
                      tempatResepsi={values.tempatResepsi}
                      mapsResepsi={values.mapsResepsi}
                      visiblResepsi={visibleResepsi}
                      lainnyaResepsi={values.lainnyaResepsi}
                      handleInputChange={handleInputChange}
                    />

                    {/* Form Pengiriman */}
                    <DataAlamatKirim
                      namaPenerimaUndangan={values.namaPenerimaUndangan}
                      alamatPenerimaUndangan={values.alamatPenerimaUndangan}
                      nomorPenerimaUndangan={values.nomorPenerimaUndangan}
                      handleInputChange={handleInputChange}
                    />

                    {/* Form Bundling */}
                    <SelectFormComponent
                      validasi={true}
                      name="bundling"
                      classEffect="fw-bold"
                      label={valuesJum.kata}
                      defaultValue={values.bundling}
                      optionsTitle="Silakan Pilih"
                      options={pilihanBundling}
                      errorText="Bundling Belum Dipilih"
                      onChange={handleInputChange}
                    />
                    {values.visibleWebsite && (
                      <DataWebsite
                        temaWebsite={values.temaWebsite}
                        bahasa={values.bahasa}
                        pakaiFilter={values.pakaiFilter}
                        visiblFilter={visibleFilter}
                        filterig={values.filterig}
                        frame={values.frame}
                        foto={values.foto}
                        musik={values.musik}
                        loveStory={values.loveStory}
                        live={values.live}
                        nomorRek={values.nomorRek}
                        namaBank={values.namaBank}
                        atasNama={values.atasNama}
                        nomorRek2={values.nomorRek2}
                        namaBank2={values.namaBank2}
                        atasNama2={values.atasNama2}
                        namaPenerima={values.namaPenerima}
                        alamat={values.alamat}
                        waKonfirmasi={values.waKonfirmasi}
                        daftarHadir={values.daftarHadir}
                        visibl={visible}
                        nomorCatin={values.nomorCatin}
                        checkSpecialChar={checkSpecialChar}
                        capitalFirstWord={capitalFirstWord}
                        handleInputChange={handleInputChange}
                      />
                    )}
                    {values.visibleVideo && (
                      <DataVideo
                        temaVideo={values.temaVideo}
                        paketVideo={values.paketVideo}
                        pakaiFilter={values.pakaiFilter}
                        visiblFilter={visibleFilter}
                        filterig={values.filterig}
                        frame={values.frame}
                        foto={values.foto}
                        barcode={values.barcode}
                        visiblBarcode={visibleBarcode}
                        linkBarcode={values.linkBarcode}
                        denah={values.denah}
                        musik={values.musik}
                        handleInputChange={handleInputChange}
                      />
                    )}
                    {values.visibleWebnVid && (
                      <DataBundling
                        temaWebsite={values.temaWebsite}
                        bahasa={values.bahasa}
                        temaVideo={values.temaVideo}
                        paketVideo={values.paketVideo}
                        pakaiFilter={values.pakaiFilter}
                        visiblFilter={visibleFilter}
                        filterig={values.filterig}
                        frame={values.frame}
                        barcode={values.barcode}
                        visiblBarcode={visibleBarcode}
                        linkBarcode={values.linkBarcode}
                        denah={values.denah}
                        foto={values.foto}
                        musik={values.musik}
                        musik2={values.musik2}
                        loveStory={values.loveStory}
                        live={values.live}
                        nomorRek={values.nomorRek}
                        namaBank={values.namaBank}
                        atasNama={values.atasNama}
                        nomorRek2={values.nomorRek2}
                        namaBank2={values.namaBank2}
                        atasNama2={values.atasNama2}
                        namaPenerima={values.namaPenerima}
                        alamat={values.alamat}
                        waKonfirmasi={values.waKonfirmasi}
                        daftarHadir={values.daftarHadir}
                        visibl={visible}
                        nomorCatin={values.nomorCatin}
                        checkSpecialChar={checkSpecialChar}
                        capitalFirstWord={capitalFirstWord}
                        handleInputChange={handleInputChange}
                      />
                    )}
                    <Form.Label className="nb">
                      <strong>NB</strong> : Jika ada tambahan data atau yang
                      lainnya, silakan hubungi admin
                    </Form.Label>
                    <Button type="submit" className="Button mb-2">
                      <i className="bi bi-whatsapp me-2"></i>
                      Kirim
                    </Button>
                  </>
                )}
                {valuesJum.visibleHigher && (
                  <>
                    {/* Penanda Lokasi */}
                    <PenandaSelect
                      classEffect="labelForm"
                      validasi={true}
                      name="penandaLokasi"
                      label="Penanda Lokasi"
                      value={values.penandaLokasi}
                      optionsTitle="Silakan Pilih Penanda"
                      options={penandaPilih}
                      errorText="Penanda Belum Dipilih"
                      onChange={handleInputChange}
                      visible={values.visibleQR}
                      namaTambah="qrCode"
                      labelTambah="Masukan Link Google Maps"
                      placeholderTambah="Masukan Link Google Maps"
                      valueTambah={values.qrCode}
                      errorTextTambah="QR Code Belum Diisi"
                      onChangeTambah={handleInputChange}
                    />
                    {values.denahNote && (
                      <Form.Label>
                        Kirimkan Sketsa Denah kepada Admin
                      </Form.Label>
                    )}
                    {/* Form Nama didahulukan */}
                    <SelectFormComponent
                      validasi={true}
                      name="namaAwal"
                      label="Nama yang Didahulukan"
                      defaultValue={values.namaAwal}
                      optionsTitle="Silakan Pilih"
                      options={namaPertama}
                      errorText="Nama Belum Dipilih"
                      onChange={handleInputChange}
                    />
                    {/* Form Mempelai */}
                    <DataMempelai
                      panggilanWanita={values.panggilanWanita}
                      lengkapWanita={values.lengkapWanita}
                      wanitaAnakKe={values.wanitaAnakKe}
                      namaBapakWanita={values.namaBapakWanita}
                      namaIbuWanita={values.namaIbuWanita}
                      panggilanPria={values.panggilanPria}
                      lengkapPria={values.lengkapPria}
                      priaAnakKe={values.priaAnakKe}
                      namaBapakPria={values.namaBapakPria}
                      namaIbuPria={values.namaIbuPria}
                      handleInputChange={handleInputChange}
                    />
                    {/* Form Acara */}
                    <DataAcara
                      hariAkad={values.hariAkad}
                      akad={values.akad}
                      pukulAkad={values.pukulAkad}
                      zonaWaktuAkad={values.zonaWaktuAkad}
                      namaAcaraAkad={values.namaAcaraAkad}
                      tempatAkad={values.tempatAkad}
                      mapsAkad={values.mapsAkad}
                      visiblAkad={visibleAkad}
                      lainnyaAkad={values.lainnyaAkad}
                      hariResepsi={values.hariResepsi}
                      resepsi={values.resepsi}
                      pukulResepsi={values.pukulResepsi}
                      zonaWaktuResepsi={values.zonaWaktuResepsi}
                      namaAcaraResepsi={values.namaAcaraResepsi}
                      tempatResepsi={values.tempatResepsi}
                      mapsResepsi={values.mapsResepsi}
                      visiblResepsi={visibleResepsi}
                      lainnyaResepsi={values.lainnyaResepsi}
                      handleInputChange={handleInputChange}
                    />

                    {/* Form Pengiriman */}
                    <DataAlamatKirim
                      namaPenerimaUndangan={values.namaPenerimaUndangan}
                      alamatPenerimaUndangan={values.alamatPenerimaUndangan}
                      nomorPenerimaUndangan={values.nomorPenerimaUndangan}
                      handleInputChange={handleInputChange}
                    />

                    {/* Form Bundling */}
                    <SelectFormComponent
                      validasi={true}
                      classEffect="fw-bold"
                      name="bundling"
                      label={valuesJum.kata}
                      defaultValue={values.bundling}
                      optionsTitle="Silakan Pilih Bundling"
                      options={pilihanBundling}
                      errorText="Bundling Belum Dipilih"
                      onChange={handleInputChange}
                    />
                    {values.visibleWebsite && (
                      <DataWebsite
                        temaWebsite={values.temaWebsite}
                        bahasa={values.bahasa}
                        pakaiFilter={values.pakaiFilter}
                        visiblFilter={visibleFilter}
                        filterig={values.filterig}
                        frame={values.frame}
                        foto={values.foto}
                        musik={values.musik}
                        loveStory={values.loveStory}
                        live={values.live}
                        nomorRek={values.nomorRek}
                        namaBank={values.namaBank}
                        atasNama={values.atasNama}
                        nomorRek2={values.nomorRek2}
                        namaBank2={values.namaBank2}
                        atasNama2={values.atasNama2}
                        namaPenerima={values.namaPenerima}
                        alamat={values.alamat}
                        waKonfirmasi={values.waKonfirmasi}
                        daftarHadir={values.daftarHadir}
                        visibl={visible}
                        nomorCatin={values.nomorCatin}
                        checkSpecialChar={checkSpecialChar}
                        capitalFirstWord={capitalFirstWord}
                        handleInputChange={handleInputChange}
                      />
                    )}
                    {values.visibleVideo && (
                      <DataVideo
                        temaVideo={values.temaVideo}
                        paketVideo={values.paketVideo}
                        pakaiFilter={values.pakaiFilter}
                        visiblFilter={visibleFilter}
                        filterig={values.filterig}
                        frame={values.frame}
                        foto={values.foto}
                        barcode={values.barcode}
                        visiblBarcode={visibleBarcode}
                        linkBarcode={values.linkBarcode}
                        denah={values.denah}
                        musik={values.musik}
                        handleInputChange={handleInputChange}
                      />
                    )}
                    {values.visibleWebnVid && (
                      <DataBundling
                        temaWebsite={values.temaWebsite}
                        bahasa={values.bahasa}
                        temaVideo={values.temaVideo}
                        paketVideo={values.paketVideo}
                        pakaiFilter={values.pakaiFilter}
                        visiblFilter={visibleFilter}
                        filterig={values.filterig}
                        frame={values.frame}
                        barcode={values.barcode}
                        visiblBarcode={visibleBarcode}
                        linkBarcode={values.linkBarcode}
                        denah={values.denah}
                        foto={values.foto}
                        musik={values.musik}
                        musik2={values.musik2}
                        loveStory={values.loveStory}
                        live={values.live}
                        nomorRek={values.nomorRek}
                        namaBank={values.namaBank}
                        atasNama={values.atasNama}
                        nomorRek2={values.nomorRek2}
                        namaBank2={values.namaBank2}
                        atasNama2={values.atasNama2}
                        namaPenerima={values.namaPenerima}
                        alamat={values.alamat}
                        waKonfirmasi={values.waKonfirmasi}
                        daftarHadir={values.daftarHadir}
                        visibl={visible}
                        nomorCatin={values.nomorCatin}
                        checkSpecialChar={checkSpecialChar}
                        capitalFirstWord={capitalFirstWord}
                        handleInputChange={handleInputChange}
                      />
                    )}
                    <Form.Label className="nb">
                      <strong>NB</strong> : Jika ada tambahan data atau yang
                      lainnya, silakan hubungi admin
                    </Form.Label>
                    <Button type="submit" className="Button mb-2">
                      <i className="bi bi-whatsapp me-2"></i>
                      Kirim
                    </Button>
                  </>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
