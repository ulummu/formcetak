import React from 'react'
import SelectFormComponent from '../Components/forms/SelectFormComponent'
import { bahasaPackages, filterPackages, fotoPackages, framePackages, pakaiFilterPackages, videoPackages, videoThemes, webThemes } from '../constans/FormConstans'
import { Accordion, Form } from 'react-bootstrap'
import SelectWithClass from '../Components/forms/SelectWithClass'
import FormTutorial from '../Components/forms/FormTutorial'
import TextInputFormComponent from '../Components/forms/TextInputFormComponent'
import DataWeddingGift from './DataWeddingGift'

const DataBundling = ({ temaWebsite, bahasa, temaVideo, paketVideo, pakaiFilter, visiblFilter, filterig, frame, foto, visiblBarcode, barcode, linkBarcode, denah, musik, musik2, loveStory, live, nomorRek, namaBank, atasNama, nomorRek2, namaBank2, atasNama2, alamat, namaPenerima, waKonfirmasi, visibl, nomorCatin, daftarHadir, checkSpecialChar, capitalFirstWord, handleInputChange }) => {
  return (
    <>
    <SelectFormComponent
        validasi={true}
        name="temaWebsite"
        label="Tema Undangan Website"
        defaultValue={temaWebsite}
        optionsTitle="Silakan Pilih Tema"
        options={webThemes}
        errorText="Tema Belum Dipilih"
        onChange={handleInputChange}
        />
    <SelectFormComponent
        validasi={true} 
        name="bahasa"
        label="Bahasa Undangan Website"
        defaultValue={bahasa}
        optionsTitle="Silakan Pilih Bahasa"
        options={bahasaPackages}
        errorText="Bahasa Belum Dipilih"
        onChange={handleInputChange}
    />
    <SelectFormComponent
        validasi={true}
        name="temaVideo"
        label="Tema Undangan Video/Jpeg"
        defaultValue={temaVideo}
        optionsTitle="Silakan Pilih Tema"
        options={videoThemes}
        errorText="Tema Belum Dipilih"
        onChange={handleInputChange}
    />

    <SelectFormComponent
        validasi={true}
        name="paketVideo"
        label="Paket Undangan Video/Jpeg"
        value={paketVideo}
        optionsTitle="Sesuai dengan paket yang dipilih"
        options={videoPackages}
        errorText="Paket Belum Dipilih"
        onChange={handleInputChange}
    />
    <SelectFormComponent
        validasi={true} 
        label="Foto Undangan"
        name="foto"
        value={foto}
        optionsTitle="Silakan Pilih"
        options={fotoPackages}
        errorText="Foto Belum Dipilih"
        onChange={handleInputChange}
    />
    <Form.Group>
        <Form.Label className="mb-0">Filter Instagram</Form.Label>
        <Form.Label className="labelFormFilter">
          Dengan tambahan biaya.
        </Form.Label>
          <SelectWithClass
            validasi={true} 
            name="pakaiFilter"
            defaultValue={pakaiFilter}
            optionsTitle="Silakan Pilih"
            options={pakaiFilterPackages}
            errorText="Belum Dipilih"
            onChange={handleInputChange}

            />
            <FormTutorial 
            label="Contoh Filter Bisa Dilihat"
            linkTutorial="https://undangandigimo.com/katalog-filter/"
            />
      {visiblFilter && (
        <>
        <SelectFormComponent
        validasi={true} 
        label="Tema Filter Instagram"
        name="filterig"
        defaultValue={filterig}
        optionsTitle="Silakan Pilih Filter"
        options={filterPackages}
        errorText="Filter Belum Dipilih"
        onChange={handleInputChange}
        />

        <SelectFormComponent
        validasi={true} 
        label="Pilih Frame"
        name="frame"
        value={frame}
        optionsTitle="Silakan Pilih Frame"
        options={framePackages}
        errorText="Frame Belum Dipilih"
        onChange={handleInputChange}
        />
        </>
        )}
    </Form.Group>

    <SelectFormComponent
    validasi={true} 
    label="Tambahkan Barcode Lokasi"
    name="barcode"
    value={barcode}
    optionsTitle="Silakan Pilih"
    options={pakaiFilterPackages}
    errorText="Belum Dipilih"
    onChange={handleInputChange}
    />

    {visiblBarcode && (
        <>
        <TextInputFormComponent
        validasi={true} 
        classEffect="formTambah mt-3"
        label="Link Google Maps"
        name="linkBarcode"
        placeholder="Link Google Maps"
        value={linkBarcode}
        errorText="Link Belum Diisi"
        onChange={handleInputChange}
        />
        <FormTutorial 
        label="Tutorial Salin Barcode"
        linkTutorial="https://www.youtube.com/watch?v=07ihVwltHvQ"
        />
        </>
    )}

    <SelectFormComponent
    validasi={true} 
    label="Tambahkan Denah"
    name="denah"
    value={denah}
    optionsTitle="Silakan Pilih"
    options={pakaiFilterPackages}
    errorText="Denah Belum Dipilih"
    onChange={handleInputChange}
    />
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <i className="bi bi-music-note-beamed me-2"></i>
            <div className="labelForm">Musik</div>
        </Accordion.Header>
        <Accordion.Body>
        <Form.Label>Backsound Video/Jpeg</Form.Label>
          <Form.Control
            name="musik2"
            value={musik2}
            onChange={handleInputChange}
            required
            type="text"
            placeholder= "Masukkan Link Youtube dan Detik Lagu Dimulai"
          />
          <Form.Control.Feedback type="invalid">Belum diisi</Form.Control.Feedback>
          <Form.Label>Backsound Website</Form.Label>
            <Form.Control
              name="musik"
              value={musik}
              onChange={handleInputChange}
              required
              type="text"
              placeholder= "Masukkan Link Youtube"
            />
          <Form.Control.Feedback type="invalid">Belum diisi</Form.Control.Feedback>
            <FormTutorial 
            label="Tutorial Salin Backsound"
            linkTutorial="https://www.youtube.com/watch?v=DmWVqg3mfps"
            />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    <DataWeddingGift 
        loveStory={loveStory}
        live={live}
        nomorRek={nomorRek}
        namaBank={namaBank}
        atasNama={atasNama}
        nomorRek2={nomorRek2}
        namaBank2={namaBank2}
        atasNama2={atasNama2}
        namaPenerima={namaPenerima}
        alamat={alamat}
        waKonfirmasi={waKonfirmasi}
        daftarHadir={daftarHadir}
        visibl={visibl}
        nomorCatin={nomorCatin}
        checkSpecialChar={checkSpecialChar}
        capitalFirstWord={capitalFirstWord}
        handleInputChange={handleInputChange}
    />
    </>
  )
}

export default DataBundling