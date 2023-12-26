import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://wallpapercave.com/wp/wp6511626.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 12px 0px 5px 0px;
  padding: 10px;
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const LoginButton = styled.button`
  width: 40%;
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const RegisterButton = styled.button`
  width: 30%;
  box-sizing: border-box;
  border: 1px solid teal;
  background-color: white;
  color: teal;
  cursor: pointer;
`;

const Link = styled.a`
  margin-top: 15px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <ButtonContainer>
            <LoginButton>Sign In</LoginButton>
            <RegisterButton>Register</RegisterButton>
          </ButtonContainer>

          <Link>Forgot Password</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
