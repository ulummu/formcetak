import React from 'react'
import { Accordion } from 'react-bootstrap'
import TextInputFormComponent from '../Components/forms/TextInputFormComponent'
import { capitalFirstWord } from '../helpers/FormHelper'

const DataAlamatKirim = ({ namaPenerimaUndangan, alamatPenerimaUndangan, nomorPenerimaUndangan, handleInputChange }) => {
  return (
    <Accordion flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="bi bi-box-seam me-2"></i>
              <div className="labelForm">Alamat Pengiriman</div>
            </Accordion.Header>
            <Accordion.Body>
                <TextInputFormComponent
                classEffect="formTanggal mb-2"
                validasi={true} 
                label="Nama Pengirim"
                name="namaPenerimaUndangan"
                value={capitalFirstWord(namaPenerimaUndangan)}
                placeholder="Nama Pengirim"
                errorText="Nama Belum Diisi"
                onChange={handleInputChange}
                />
                <TextInputFormComponent
                classEffect="formTanggal mb-2"
                validasi={true} 
                label="Alamat Penerima"
                name="alamatPenerimaUndangan"
                defaultValue={alamatPenerimaUndangan}
                placeholder="Alamat Penerima"
                errorText="Alamat Belum Diisi"
                onChange={handleInputChange}
                />
                <TextInputFormComponent
                classEffect="formTanggal mb-2"
                validasi={true} 
                label="Nomor Telepon Penerima"
                name="nomorPenerimaUndangan"
                defaultValue={nomorPenerimaUndangan}
                placeholder="Nomor Penerima"
                errorText="Nomor Belum Diisi"
                onChange={handleInputChange}
                />
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}

export default DataAlamatKirim