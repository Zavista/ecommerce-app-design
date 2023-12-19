import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
const Container = styled.div`
    
`
const Wrapper =styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: lightgray;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 48px;
`
const Description = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    letter-spacing: 1px;
`
const Price = styled.span`
    font-weight: 400;
    font-size: 40px;
`

const FilterContainer = styled.div`
    
`
const Filter = styled.select`

`

const FilterTitle = styled.option`
    
`
const FilterOption = styled.option`
    
`




const SingleProduct = () => {
    const [item, setItem] = useState([]);
    const id = 1; // Replace this with the dynamic ID you'll receive as a prop

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fake-coffee-api.vercel.app/api/${id}`);
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);



    const mapGrindToCoarseness = (option) => {
        switch (option) {
          case "Whole Bean":
            return "Whole Bean";
          case "French Press":
            return "Coarse";
          case "Cafetiere":
            return "Medium-Coarse";
          case "Filter":
            return "Medium";
          case "Expresso":
            return "Fine";
          case "Pour Over":
            return "Extra-Fine";
          default:
            return "None";
    }}

    console.log(item[0]);
    return (
        <Container>
        <Navbar></Navbar>
        <Wrapper>
            <ImageContainer>
                <Image src={item[0] && item[0].image_url}></Image>
            </ImageContainer>
            <InfoContainer>
                <Title>{item[0] && item[0].name}</Title>
                <Description>{item[0] && item[0].description}</Description>
                <Price>${item[0] && item[0].price}</Price>
            </InfoContainer>
            <FilterContainer>
                <Filter>
                    <FilterOption disabled selected>Grind Option</FilterOption>
                    {["Whole Bean", "French Press", "Cafetiere", "Filter", "Espresso", "Pour Over"].map((option, index) => (
                    <FilterOption key={index} disabled={!item[0].grind_option.includes(option)}>
                        {mapGrindToCoarseness(option)}
                    </FilterOption>
                    ))}
                </Filter>

            </FilterContainer>
        </Wrapper>
        <Newsletter></Newsletter>
        <Footer></Footer>
        </Container>
  )
}

export default SingleProduct