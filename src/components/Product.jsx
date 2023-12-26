import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Info = styled.div`
  background-color: #f1eaea;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffff8;
  position: relative;

  &:hover ${Info} {
    opacity: 0.6;
  }
`;
const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #e9f7ef;
  position: absolute;
`;
const Image = styled.img`
  height: 100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: transform 0.5s ease;

  &:hover {
    background-color: lightgreen;
    transform: scale(1.1);
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.image_url}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
        </Icon>
        <Icon>
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
