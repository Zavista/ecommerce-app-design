import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`

`;
const Description = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;


const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Brewtiful</Logo>
        <Description>
          Indulge in exceptional coffee blends curated for your perfect brew.
          Elevate your coffee experience with our handpicked selection of
          premium beans sourced from around the globe.
        </Description>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="#55acee">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon color="#e60023">
            <Pinterest></Pinterest>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
