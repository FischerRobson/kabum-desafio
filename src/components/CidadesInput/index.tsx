import axios from 'axios';
import { SelectHTMLAttributes, useEffect, useState } from 'react';
import { api_cidades } from '../../consts/apis';
import { Container } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  uf: string;
}

interface ICityIBGE {
  nome: string
}

const CidadesInput: React.FC<ISelectProps> = ({ uf, ...props }) => {

  const [cidades, setCidades] = useState<string[]>([]);

  useEffect(() => {
    axios.get<ICityIBGE[]>(api_cidades(uf))
      .then(res => {
        const cidades = res.data.map(uf => uf.nome)
        setCidades(cidades)
      }).catch(err => {
        console.log(err);
      })
  }, [uf])

  return (
    <Container {...props}>
      {cidades.map(cidade => {
        return (
          <option value={cidade.toUpperCase()}>{cidade}</option>
        )
      })}

    </Container>
  )
}

export default CidadesInput;
