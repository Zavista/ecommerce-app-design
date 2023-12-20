import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  margin-bottom: 10px;
  ${mobile({
    padding:"0px"
  })}
  
`
const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
    margin: 0px;
    ${mobile({
      flexDirection:"column"
  })}
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 25px;
  ${mobile({
    fontSize: "28px",
    marginBottom: "10px"
  })}
`

const Categories = () => {
  return (
    <Container>
      <Title>Discover Our Global Coffee Origins</Title>
        <CategoryContainer>
          {categories.map(item=>(
            <CategoryItem item={item} key={item.id}>
            </CategoryItem>
        ))}
      </CategoryContainer>
    </Container>
  )

}

export default Categories