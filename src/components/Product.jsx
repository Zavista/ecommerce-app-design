import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`
const Circle = styled.div`
    
`
const Image = styled.img`
    height: 100%;
    border: 1px solid blue;
`

const Info = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    border: 1px solid green;
`
const Icon = styled.div`
    display: flex;
    flex-direction: column;
`
const Product = (item) => {
    return (
        <Container>
            <Circle></Circle>
            <Image src={item.item.image_url}></Image>
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product