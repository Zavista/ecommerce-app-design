import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: tan;
    color: brown;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50!
    </Container>
  )
}

export default Announcement