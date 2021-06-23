import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 70px auto;
    grid-template-areas: 
        'Header'
        'Content';
    height: 100vh;
`

export const Content = styled.div`
    padding: 7%;
    background: ${props => props.theme.colors.secondary};
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`