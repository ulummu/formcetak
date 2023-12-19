import React from "react";
import { Form } from "react-bootstrap";
import { capitalFirstWord } from "../../helpers/FormHelper";

const TextInput = ({
  name,
  type,
  disable,
  classEffect,
  value,
  label,
  placeholder,
  errorText,
  validasi,
  note,
  onChange,
}) => {
  return (
    <Form.Group>
        <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        disabled={disable}
        value={capitalFirstWord(value)}
        onChange={onChange}
        required={validasi}
        type={type}
        placeholder={placeholder}
        />
      <Form.Text muted>
        {note}
      </Form.Text>
      <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextInput;
