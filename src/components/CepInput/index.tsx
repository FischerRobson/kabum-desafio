import React from "react";
import Input from "../Input";
import InputMask from "react-input-mask";

interface ICepInputProps {
    name: string;
    id?: string;
    value: string | undefined;
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
}

function CepInput(props: ICepInputProps) {
  function removeMask(e: any) {
    e.target.value = e.target.value.replace(/\D/g, "");
    props.onChange(e);
  }

  return (
    <>
      <InputMask
        mask="99999-999"
        //maskChar={""}
        alwaysShowMask={false}
        type="text"
        name={props.name}
        id={props.id}
        onChange={removeMask}
        placeholder="Pesquise pelo CEP"
        value={props.value}
        onBlur={props.onBlur}
      >
        {(inputProps: any) => <Input {...inputProps} />}
      </InputMask>
    </>
  );
}

export default CepInput;