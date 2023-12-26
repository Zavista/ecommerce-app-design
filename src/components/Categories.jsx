import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #fcfdf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid lightgray;
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
  font-weight: 500;
  font-size: 40px;
  margin-top: 40px;
  ${mobile({
    fontSize: "28px",
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