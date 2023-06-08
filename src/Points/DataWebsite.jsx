import React from 'react'
import SelectFormComponent from '../Components/forms/SelectFormComponent'
import { bahasaPackages, filterPackages, fotoPackages, framePackages, pakaiFilterPackages, webThemes } from '../constans/FormConstans'
import FormTutorial from '../Components/forms/FormTutorial'
import SelectWithClass from '../Components/forms/SelectWithClass'
import { Accordion, Form } from 'react-bootstrap'
import TextInputFormComponent from '../Components/forms/TextInputFormComponent'
import DataWeddingGift from './DataWeddingGift'

const DataWebsite = ( { temaWebsite, bahasa, pakaiFilter, visiblFilter, filterig, frame, foto, musik, loveStory, live, nomorRek, namaBank, atasNama, nomorRek2, namaBank2, atasNama2, alamat, namaPenerima, waKonfirmasi, visibl, nomorCatin, daftarHadir, checkSpecialChar, capitalFirstWord, handleInputChange }) => {
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
        
        <SelectFormComponent
        validasi={true} 
        label="Menggunakan Foto"
        name="foto"
        value={foto}
        optionsTitle="Silakan Pilih"
        options={fotoPackages}
        errorText="Foto Belum Dipilih"
        onChange={handleInputChange}
        />
        <Accordion flush >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
                <i className="bi bi-music-note-beamed me-2"></i>
                <div className="labelForm">Musik</div>
            </Accordion.Header>
            <Accordion.Body>
                <TextInputFormComponent
                validasi={true} 
                label="Backsound Undangan"
                name="musik"
                value={musik}
                placeholder="Masukkan Link Youtube"
                errorText="Musik Belum Diisi"
                onChange={handleInputChange}
                />

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
        </Form.Group>
    </>
  )
}

export default DataWebsite