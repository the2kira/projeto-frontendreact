import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 15px;
`

export const Produto = styled.div`
border: 1px solid;
`
export const Img = styled.img`
width: 250px;
height: 250px;`

export const Informacoes = styled.div`
padding: 5px;
background-color: white;
div{
    display: flex;
    justify-content: center;

    button{
    width: 150px;
    padding: 4px;
    }
}
`