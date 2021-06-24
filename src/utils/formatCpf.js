import StringMask from "string-mask";

const CpfMask = (cpf) => {
  let cpfMask = "000.000.000-00";
  let formatter = new StringMask(cpfMask);
  let cpfFormated = formatter.apply(cpf);
  
  return <>{cpfFormated}</>;
};

export default CpfMask;