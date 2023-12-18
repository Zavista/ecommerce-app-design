import styled from "styled-components"
import { useEffect, useState } from "react";
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 4 columns */
    grid-template-rows: repeat(2, 1fr); /* 2 rows */
`
const Products = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fake-coffee-api.vercel.app/api?limit=9");
        const data = await response.json();
        setPopularItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
        {popularItems.map(item=>(
            <Product item={item} key={item._id}></Product>
        ))}
    </Container>
  )
}

export default Products