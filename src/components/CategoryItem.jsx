import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 0px;
  margin-bottom: 1%;
  height: 50vh;
  position: relative;  
  background-color: transparent;
  &:hover{
    transform: scale(1.1);
  }
  ${mobile({
    height: "30vh"
  })}
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between
`

const Title = styled.h1`
  color: black;
  padding-top: 7%;
  ${mobile({
    fontSize: "24px"
  })}
`
const Button = styled.button`
  border: 1px solid black;
  padding: 10px 20px;
  background-color: white;
  color: gray;
  cursor: pointer;
  margin-bottom: 5%;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
          <Title>{item.title}</Title>
          <Button>Explore</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem