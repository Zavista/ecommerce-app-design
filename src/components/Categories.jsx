import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
`
const CategoryContainer = styled.div`
    display: flex;
    padding: 0px;
    justify-content: space-between;
    margin: 0px;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 25px;
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