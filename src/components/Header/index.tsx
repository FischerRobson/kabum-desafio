import { Link, useHistory } from 'react-router-dom'

import { Container, Profile, Menu, MenuOption, ToogleTheme, LogOut } from './styles'

import Toggle from '../Toggle';

import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../hooks/AuthContext';
import { useState } from 'react';

const Header = () => {

  const history = useHistory();

  const { signOut, loggedUser } = useAuth();

  const [selectedMenu, setSelectedMenu] = useState<number>(1)

  const loggout = () => {
    history.push("/");
    signOut();
  }

  return (
    <Container>
      <Profile>
        Bem vindo, {loggedUser.username}
      </Profile>
      <Menu>
        <MenuOption className={selectedMenu === 1 ? "selected" : ""}>
          <Link to="/">Clientes</Link>
        </MenuOption>
        <MenuOption className={selectedMenu === 2 ? "selected" : ""}>
          <Link to="/users">Usuários</Link>
        </MenuOption>
      </Menu>
      <ToogleTheme>
        <Toggle />
      </ToogleTheme>
      <LogOut onClick={() => loggout()}>
        <FiLogOut />
      </LogOut>
    </Container>
  )
}

export default Header;
