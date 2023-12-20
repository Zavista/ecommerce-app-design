import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  background-color: lightgray;
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 1px;
  border: 1px solid teal;
  background-color: ${(props) => (props.type === "filled" ? "teal" : "white")};
  color: ${(props) => (props.type === "filled" ? "white" : "teal")};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
`;

const Info = styled.div`
  flex: 3;
  background-color: lightblue;
`;
const Summary = styled.div`
  flex: 1;
  background-color: lightgreen;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ImageContainer = styled.div`
  width: 300px;

  &:hover {
    transform: scale(1.25);
  }
`;
const Detail = styled.div`
  padding: 20px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductGrind = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
`;

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
        <Bottom>
          <Info>
            <ProductInfo>
              <ProductDetail>
                <ImageContainer>
                  <Image src="https://iili.io/H8Y78Qt.webp"></Image>
                </ImageContainer>
                <Detail>
                  <ProductName>
                    <b>Product: </b>Signature Blend
                  </ProductName>
                  <ProductID>
                    <b>ID: </b> 123456789
                  </ProductID>
                  <ProductGrind>
                    <b>Grind: </b> Whole Bean
                  </ProductGrind>
                </Detail>
              </ProductDetail>
              <PriceDetail>price</PriceDetail>
            </ProductInfo>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Cart;
