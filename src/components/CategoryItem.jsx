import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 0px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Title = styled.h1`
  color: black;
  margin-bottom: 5px;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem