import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container =styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    background-color: lightgray;
`
const Title = styled.h1`
    font-weight: 400;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 1px;
    border: 1px solid teal;
    background-color: ${props=>props.type ==="filled" ? "teal" : "white"};
    color: ${props=>props.type ==="filled" ? "white" : "teal"};

`
const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
`


const Bottom = styled.div`
    
`


const Cart = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (4)</TopText>
                    <TopText>Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default Cart