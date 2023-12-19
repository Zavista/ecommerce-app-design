import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { Add, Remove } from "@mui/icons-material"
const Container = styled.div`
    
`
const Wrapper =styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 3;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: lightgray;
`
const InfoContainer = styled.div`
    flex: 2;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 48px;
`
const Description = styled.p`
    margin-top: 25px;
    font-size: 20px;
    letter-spacing: 1px;
    min-height: 125px;
`
const Flavor = styled.p`
    font-size: 20px;
    letter-spacing: 1px; 
    font-weight: 700;
    margin-bottom: 15px;
`

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`


const FilterContainer = styled.div`
    margin-top: 25px;
    display: flex;
    margin-bottom: auto;
    align-items: center;
    width: 40%;
    margin-bottom: 25px;
`
const Filter = styled.select`
    padding: 5px;
    cursor: pointer;
    flex: 1;
    border: 1px solid teal;
    background-color: white;
`

const FilterTitle = styled.span`
    margin-right: 10px;
    font-size: 20px;
    font-weight: 400;
    flex: 1;
`
const FilterOption = styled.option`
    cursor: pointer;
    
`
const AddContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    margin: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 400; 
    border: 1px solid teal;
    padding: 5px;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    font-size: 24px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    color: teal;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: teal;
        border: 2px solid white;
        color: white;
    }
`
const Icon = styled.div`
    &:hover{
        transform: scale(1.3);
    }
`


const SingleProduct = () => {
    const [item, setItem] = useState([]);
    const id = 3; // Replace this with the dynamic ID you'll receive as a prop

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
          case "Espresso":
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
                <Flavor>Flavor Profile: {item[0] &&item[0].flavor_profile.join(", ")}</Flavor>
                <Price>${item[0] && item[0].price}</Price>
                <FilterContainer>
                    <FilterTitle>Grind Option:</FilterTitle>
                    <Filter>
                        {item[0] && ["Whole Bean", "French Press", "Cafetiere", "Filter", "Espresso", "Pour Over"].map((option, index) => (
                        <FilterOption key={index} disabled={!item[0].grind_option.includes(option)}>
                            {mapGrindToCoarseness(option)}
                        </FilterOption>
                        ))}
                    </Filter>
                </FilterContainer>
                <AddContainer>
                        <AmountContainer>
                            <Icon>
                               <Remove></Remove> 
                            </Icon>
                            <Amount>1</Amount>
                            <Icon>
                               <Add></Add> 
                            </Icon>
                            
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter></Newsletter>
        <Footer></Footer>
        </Container>
  )
}

export default SingleProduct