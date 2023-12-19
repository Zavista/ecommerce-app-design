import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height: 30vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    outline: none;
    border: 1px solid teal;
    box-sizing: border-box;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`



const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates on your favorite products. </Description>
        <InputContainer>
            <Input placeholder="Enter your email"></Input>
            <Button>
                <Send></Send>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter