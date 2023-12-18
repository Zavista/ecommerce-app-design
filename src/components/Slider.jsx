import styled from "styled-components"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Container = styled.div`
    background-color: lightblue; //just to allow me to see the total container while coding
    width: 100%;
    height: 100vh;
    display: flex;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #3E2723;
    border-radius: 50%;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
        </Arrow>
        <Arrow>
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        </Arrow>
    </Container>
  )
}

export default Slider