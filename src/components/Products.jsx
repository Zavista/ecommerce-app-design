import styled from "styled-components"
import { popularItems } from "../data"
import Product from "./Product"


const Container = styled.div`
    padding: 20px;
    display: flex;
`
const Products = () => {
  return (
    <Container>
        {popularItems.map(item=>(
            <Product item={item} key={item._id}></Product>
        ))}
    </Container>
  )
}

export default Products