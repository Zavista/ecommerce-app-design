import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
    
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem></CategoryItem>
        ))}
    </Container>
  )
}

export default Categories