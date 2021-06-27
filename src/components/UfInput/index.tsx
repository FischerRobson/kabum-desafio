import axios from "axios";
import { useEffect, useState, SelectHTMLAttributes } from "react";
import { api_ufs } from "../../consts/apis";
import { Container } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
}

interface IUFIBGE {
  sigla: string;
}

const UfInput: React.FC<ISelectProps> = ({ ...props }) => {

  const [ufs, setUfs] = useState<string[]>([]);

  useEffect(() => {
    axios.get<IUFIBGE[]>(api_ufs)
      .then(res => {
        const ufInitials = res.data.map(uf => uf.sigla)
        setUfs(ufInitials)
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <Container {...props}>
      <option value="">Ufs</option>
      {ufs.map(uf => {
        return (
          <option value={uf}>{uf}</option>
        )
      })}
    </Container>
  )
}

export default UfInput;
