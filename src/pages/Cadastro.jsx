import styled from "styled-components"
import Logoo from "../assets/logo.svg"

export default function Cadastro() {
    return(
        <Container>
    <ImageContainer>
      <img src={Logoo} alt="Imagem Centralizada" />
    </ImageContainer>
 
    <FormContainer>
      <input type="email" placeholder="email"  data-test="email-input" />
      <input type="password" placeholder="senha" data-test="password-input"  />
      <input type="text" placeholder='nome' data-test="user-name-input" />
      <input type="url" placeholder='foto' data-test="user-image-input" />
      <button type="submit" data-test="signup-btn" >Cadastrar</button>
    </FormContainer>
    <SignupLink data-test="login-link">
  Já tem uma conta? Faça login!
    </SignupLink>
  </Container> 
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;



const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    margin-bottom: 10px;
    padding-left: 10px;
    width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-size: 19px;
  }

  button {
    padding: 8px 16px;
    background: #52B6FF;
border-radius: 4px;
width: 303px;
height: 45px;
border: none;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: white;
  }

 
`;

const SignupLink = styled.p`
  margin-top: 20px;


    color: #52B6FF;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
text-decoration: none;
`;