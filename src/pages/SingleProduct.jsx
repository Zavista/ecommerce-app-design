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
        </Wrapper>
        <Newsletter></Newsletter>
        <Footer></Footer>
        </Container>
  )
}

export default SingleProduct