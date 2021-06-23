import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    //grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
        'Header'
        'Content';
    height: 100vh;
`

export const Content = styled.div`
    padding: 7%;
    background: ${props => props.theme.colors.secondary};
`