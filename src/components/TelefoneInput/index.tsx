import React from "react";
import Input from "../Input";
import InputMask from "react-input-mask";

interface ITelefoneInputProps {
    name: string;
    id?: string;
    value: string | undefined;
    onChange: (e: any) => void;
}

function TelefoneInput(props: ITelefoneInputProps) {
  function removeMask(e: any) {
    e.target.value = e.target.value.replace(/\D/g, "");
    props.onChange(e);
  }

  return (
    <>
      <InputMask
        mask="(99) 99999-9999"
        //maskChar={""}
        type="text"
        name={props.name}
        id={props.id}
        onChange={removeMask}
        placeholder="Digite o Telefone do Cliente"
        value={props.value}
      >
        {(inputProps: any) => <Input {...inputProps} />}
      </InputMask>
    </>
  );
}

export default TelefoneInput;