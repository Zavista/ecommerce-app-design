import styled from "styled-components"
import { useEffect, useState } from "react";
import Product from "./Product"
import {sliderItems} from "../data"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;

`
const Products = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fake-coffee-api.vercel.app/api?limit=8");
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
        {sliderItems.map(item=>(
            <Product item={item} key={item._id}></Product>
        ))}
    </Container>
  )
}

export default Products