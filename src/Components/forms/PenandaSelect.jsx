import React,{ useState } from 'react'
import logo from "../../apple.png";
import { Button, Form, Modal } from "react-bootstrap";
import TextInputFormComponent from './TextInputFormComponent';

const PenandaSelect = ({
    classEffect,
    validasi,  
    name,
    namaTambah,
    label,
    labelTambah,
    value,
    valueTambah,
    visible,
    placeholderTambah,
    optionsTitle,
    options,
    errorText,
    errorTextTambah,
    onChange,
  }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  }
  const url = '';
    return (
        <>
      <Form.Group className="mb-2">
        <Form.Label className={classEffect}>{label}<br />Ketentuan bisa dilihat{" "}
    <a
      className="tutor"
      href={url}
      onClick={handleShow}
      target="_blank"
      rel="noopener noreferrer"
    >
      disini
    </a></Form.Label>
        <Form.Select name={name} value={value} onChange={onChange} required={validasi}>
          <option value="" hidden>
            {optionsTitle}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>{option.text}</option>
            ))}
        </Form.Select>
          {visible && (
            <TextInputFormComponent
            classEffect="formTambah mt-3"
            label={labelTambah}
            name={namaTambah}
            value={valueTambah}
            placeholder={placeholderTambah}
            errorText={errorTextTambah}
            onChange={onChange}
            />
          )}
        <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
      </Form.Group>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Petunjuk Penanda Lokasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={logo} alt="logo" className="ujilogo"/><br />
          Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </>
    );
  };

export default PenandaSelect