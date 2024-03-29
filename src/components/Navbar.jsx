import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  color: black;
  border-bottom: 4px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  ${mobile({
    padding: "10px 0px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({
    width: "40px",
    height: "16px",
    marginLeft: "0px",
  })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${mobile({
    fontSize: "24px",
    marginLeft: "5px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: "2",
  })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({
    fontSize: "12px",
    marginRight: "8px",
  })}
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <SearchIcon style={{ fontSize: 16 }}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate('/')}>Brewtiful</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate('/products')}>Products</MenuItem>
          <MenuItem onClick={() => navigate('/register')}>Register</MenuItem>
          <MenuItem onClick={() => navigate('/login')}>Sign In</MenuItem>
          <Badge badgeContent={4} color="primary" onClick={() => navigate('/cart')}>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
