import styled from 'styled-components' // Importando styled de 'styled-components'

export const input = styled.input` //exporte a variavel constante InpuBlack que esta recebendo styled acessando um input
    background-color: white;
` 

export const Container = styled.div` //exporte a variavel constante Container que esta recebendo styled acessando uma div
    background-color: #b752ff;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #ffff;     
    }    
`
export const AddButton = styled.button`
    background-color: #6cf000;
    color: #000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover{
        opacity: 0.8;
    }
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: white;
    border-radius: 5px;
    margin-top: 15px;
    padding: 10px;

    p{
        text-transform: capitalize; //Toda primeira letra sempre será maiúscula
        font-weight: bold;
    }
`
export const TrashButton = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
   font-size: 20px;



`