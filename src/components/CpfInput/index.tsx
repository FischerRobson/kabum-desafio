import React from "react";
import Input from "../Input";
import InputMask from "react-input-mask";

interface ICpfnputProps {
    name: string;
    id?: string;
    value: string | undefined;
    onChange: (e: any) => void;
}

function CpfInput(props: ICpfnputProps) {
  function removeMask(e: any) {
    e.target.value = e.target.value.replace(/\D/g, "");
    props.onChange(e);
  }

  return (
    <>
      <InputMask
        mask="999.999.999-99"
        //maskChar={""}
        alwaysShowMask={false}
        type="text"
        name={props.name}
        id={props.id}
        onChange={removeMask}
        placeholder="Digite o Cpf do cliente"
        value={props.value}
      >
        {(inputProps: any) => <Input {...inputProps} />}
      </InputMask>
    </>
  );
}

export default CpfInput;