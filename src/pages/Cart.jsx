import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
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
const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Info = styled.div`
  flex: 3;
  background-color: white;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ImageContainer = styled.div`
  width: 400px;
  position: relative;
`;

const Detail = styled.div`
  padding: 20px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    padding: "20px",
  })}
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductName = styled.span`
  font-size: 24px;
  margin-bottom: 10px;
`;
const ProductID = styled.span`
  font-size: 16px;
`;
const ProductGrind = styled.span`
  font-size: 20px;
  ${mobile({
    marginTop: "15px",
  })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 28px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 36px;
  font-weight: 200;
  ${mobile({
    marginBottom: "25px",
  })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  border: 1px solid teal;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
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
                  <Product>
                    <ProductName>
                      <b>Product: </b>Signature Blend
                    </ProductName>
                    <ProductID>
                      <b>ID: </b> 123456789
                    </ProductID>
                  </Product>

                  <ProductGrind>
                    <b>Grind: </b> Whole Bean
                  </ProductGrind>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove></Remove>
                  <ProductAmount>2</ProductAmount>
                  <Add></Add>
                </ProductAmountContainer>
                <ProductPrice>$ 12.99</ProductPrice>
              </PriceDetail>
            </ProductInfo>
            <Hr></Hr>
            <ProductInfo>
              <ProductDetail>
                <ImageContainer>
                  <Image src="https://iili.io/H8Y7kTN.webp"></Image>
                </ImageContainer>
                <Detail>
                  <Product>
                    <ProductName>
                      <b>Product: </b>Rainforest Rhapsody
                    </ProductName>
                    <ProductID>
                      <b>ID: </b> 234567891
                    </ProductID>
                  </Product>

                  <ProductGrind>
                    <b>Grind: </b>Fine
                  </ProductGrind>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove></Remove>
                  <ProductAmount>3</ProductAmount>
                  <Add></Add>
                </ProductAmountContainer>
                <ProductPrice>$ 14.99</ProductPrice>
              </PriceDetail>
            </ProductInfo>
          </Info>

          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Signature Blend (2x)</SummaryItemText>
              <SummaryItemPrice>$ 25.98</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Rainforest Rhapsody (3x)</SummaryItemText>
              <SummaryItemPrice>$ 45.97</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 76.95</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Cart;
