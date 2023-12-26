import styled from "styled-components";
import Products from "./Products";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  margin-top: 40px;
  ${mobile({
    fontSize: "28px",
  })}
`;

const HomeProducts = () => {
  return (
    <Container>
      <Title>Popular Products</Title>
      <Products></Products>
    </Container>
  );
};

export default HomeProducts;
