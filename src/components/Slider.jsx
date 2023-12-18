import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  font-weight: 1000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  letter-spacing: 2px;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
      </Arrow>
      <Wrapper>
        <Slide bg="#fcf1ed">
          <ImageContainer>
            <Image src="https://iili.io/H8Y78Qt.webp"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
                Don&apos;t Compromise on Style! Get A Flat 30% Off For New Arrivals
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="#f4fafd">
          <ImageContainer>
            <Image src="https://iili.io/H8Y78Qt.webp"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
              Don&apos;t Compromise on Coffee! Get A Flat 30% On Everything
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="#f9dafe">
          <ImageContainer>
            <Image src="https://iili.io/H8Y78Qt.webp"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
              Don&apos;t Compromise on Style! Get A Flat 30% Off For New Arrivals
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="#ef5a69">
          <ImageContainer>
            <Image src="https://iili.io/H8Y78Qt.webp"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
              Don&apos;t Compromise on Coffee! Get A Flat 30% On Everything
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
