import styled from "styled-components"

const Container = styled.div`
    
`

const Register = () => {
  return (
    <Container>
        <Wrapper></Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="first name"></Input>
                <Input placeholder="last ame"></Input>
                <Input placeholder="username"></Input>
                <Input placeholder="email"></Input>
                <Input placeholder="password"></Input>
                <Input placeholder="confirm password"></Input>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with <b>Privacy Policy</b></Agreement>
            </Form>
    </Container>
  )
}

export default Register