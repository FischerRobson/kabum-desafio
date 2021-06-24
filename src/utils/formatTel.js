import StringMask from "string-mask";

const TelMask = (cpf) => {
  let telMask = "(00)00000-0000";
  let formatter = new StringMask(telMask);
  let telFormated = formatter.apply(cpf);
  
  return telFormated;
};

export default TelMask;