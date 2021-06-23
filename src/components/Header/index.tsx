import { Container, Profile, Menu, MenuOption, ToogleTheme } from './styles'

import Toggle from '../Toggle';

const Header = () => {
    return (
        <Container>
            <Profile>
                Bem vindo, Usuário
            </Profile>
            <Menu>
                <MenuOption>
                    Clientes
                </MenuOption>
                <MenuOption>
                    Usuários
                </MenuOption>
            </Menu>
            <ToogleTheme>
                <Toggle />
            </ToogleTheme>
        </Container>
    )
}

export default Header;