import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    
`
const Description = styled.p`
    
`

const SocialContainer = styled.div`
    
`
const SocialIcon = styled.div`
    
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Brewtiful</Logo>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum beatae incidunt aliquid possimus reprehenderit deleniti, temporibus quam provident rerum quasi quibusdam necessitatibus dignissimos nesciunt, voluptatibus earum! Ut tenetur magnam perferendis?</Description>
            <SocialContainer>
                <SocialIcon>
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon>
                    <Instagram></Instagram>
                </SocialIcon>
                <SocialIcon> 
                    <Twitter></Twitter>
                </SocialIcon>
                
                
               
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer