import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 0px;
  height: 50vh;
  position: relative;
  background-color: #fcfdf5;
  ${mobile({
    height: "30vh",
  })}
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    width: 120%;
    height: 120%;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: black;
  padding-top: 7%;
  ${mobile({
    fontSize: "24px",
  })}
`;
const Button = styled.button`
  border: 1px solid black;
  padding: 10px 20px;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  margin-bottom: 5%;
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/products')}>
      <Image src={item.img}></Image>
    </Container>
  );
};

export default CategoryItem;
