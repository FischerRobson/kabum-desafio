import {Link} from 'react-router-dom'

import { Container, Profile, Menu, MenuOption, ToogleTheme, LogOut } from './styles'

import Toggle from '../Toggle';

import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../hooks/AuthContext';

const Header = () => {

    const { signOut } = useAuth();

    return (
        <Container>
            <Profile>
                Bem vindo, Usuário
            </Profile>
            <Menu>
                <MenuOption>
                    <Link to="/">Clientes</Link>
                </MenuOption>
                <MenuOption>
                    <Link to="/users">Usuários</Link>
                </MenuOption>
            </Menu>
            <ToogleTheme>
                <Toggle />
            </ToogleTheme>
            <LogOut onClick={() => signOut()}>
                <FiLogOut />
            </LogOut>
        </Container>
    )
}

export default Header;