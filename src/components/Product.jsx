import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
    flex: 1;
    margin: 5px;
`
const Circle = styled.div`
    
`
const Image = styled.img`
    
`

const Info = styled.div`
    
`
const Icon = styled.div`
    
`
const Product = (item) => {
  return (
    <Container>
        <Circle></Circle>
        <Image src={item.image_url}></Image>
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