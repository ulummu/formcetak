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
} from "../helpers/FormHelper";
import {
  initialFormValues,
  modelThemes,
  designs,
  namaPertama,
  pilihanBundling,
} from "../constans/FormConstans";
import DataMempelai from "../Points/DataMempelai";
import DataAcara from "../Points/DataAcara";
import DataAlamatKirim from "../Points/DataAlamatKirim";
import DataWebsite from "../Points/DataWebsite";
import DataVideo from "../Points/DataVideo";
import DataBundling from "../Points/DataBundling";

export default function CardForm(props) {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialFormValues);
  const [visible, setVisible] = useState(false);
  const [visibleWebsite, setVisibleWebsite] = useState(false);
  const [visibleVideo, setVisibleVideo] = useState(false);
  const [visibleWebnVid, setVisibleWebnVid] = useState(false);
  const [visibleBarcode, setVisibleBarcode] = useState(false);
  const [visibleAkad, setVisibleAkad] = useState(false);
  const [visibleResepsi, setVisibleResepsi] = useState(false);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [data, setData] = useState("");
  const [lBarcode, setLBarcode] = useState("");
  const [noCatin, setNoCatin] = useState("");
  const [dataResepsi, setDataResepsi] = useState("");
  const [dataBundling, setDataBundling] = useState(0);
  const [temp, setTemp] = useState("");
  const [filter, setFilter] = useState("");
  // console.log(visibleAkad);
  // const capitalize = (s) =>
  //   s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  // if (/[$%&*?#@^]/.test(e.key)) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
  const handleInputChange = (event) =>
    handleFormInput(
      event,
      values,
      data,
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
      setValues,
      setTemp,
      setVisible,
      setNoCatin,
      setVisibleFilter,
      setVisibleBarcode,
      setDataBundling,
      setVisibleAkad,
      setVisibleResepsi,
      setData,
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
      setValues,
      setTemp,
      setVisible,
      setNoCatin,
      setVisibleFilter,
      setVisibleBarcode,
      setDataBundling,
      setVisibleAkad,
      setVisibleResepsi,
      setData,
      setDataResepsi,
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
              <Form
                className="form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                {/* Form model */}
                <SelectFormComponent
                  validasi={true}
                  name="model"
                  label="Model Undangan Cetak"
                  defaultValue={values.model}
                  optionsTitle="Silakan Pilih Model"
                  options={modelThemes}
                  errorText="Model Belum Dipilih"
                  onChange={handleInputChange}
                />

                {/* Form Desain */}
                <SelectFormComponent
                  validasi={true}
                  name="desain"
                  label="Desain Undangan Cetak"
                  defaultValue={values.desain}
                  optionsTitle="Silakan Pilih Desain"
                  options={designs}
                  errorText="Desain Belum Dipilih"
                  onChange={handleInputChange}
                />
                {/* Form Jumlah */}
                <Form.Group className="mb-3">
                  <Form.Label className="labelForm">
                    Jumlah Undangan Cetak
                  </Form.Label>
                  <Form.Control
                    name="jumlah"
                    defaultValue={values.jumlah}
                    type="number"
                    placeholder="Silakan Masukan Jumlah"
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Jumlah Belum Diisi
                  </Form.Control.Feedback>
                </Form.Group>
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
                  label="Bundling"
                  defaultValue={values.bundling}
                  optionsTitle="Silakan Pilih Bundling"
                  options={pilihanBundling}
                  errorText="Bundling Belum Dipilih"
                  onChange={handleInputChange}
                />
                {visibleWebsite && (
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
                {visibleVideo && (
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
                {visibleWebnVid && (
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
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
